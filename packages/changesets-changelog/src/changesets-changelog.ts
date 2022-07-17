import {getInfo, getInfoFromPullRequest} from '@changesets/get-github-info';
import type {ChangelogFunctions} from '@changesets/types';
import {config} from 'dotenv';

config();

type Options = Record<string, unknown>;

const changelogFunctions: ChangelogFunctions = {
  getDependencyReleaseLine: async (changesets, updatedDependencies, options: Options) => {
    if (!options?.repo) {
      throw new Error(
        'Please provide a repo in Changesets config, e.g.:\n"changelog": ["@jakubmazanec/changesets-changelog", { "repo": "org/repo" }]',
      );
    }

    if (!updatedDependencies.length) {
      return '';
    }

    const changesetLink = `- Updated dependencies [${(
      await Promise.all(
        changesets.map(async (changeset) => {
          if (changeset.commit) {
            let {links} = await getInfo({
              repo: String(options.repo),
              commit: changeset.commit,
            });

            return links.commit;
          }

          return undefined;
        }),
      )
    )
      .filter((_) => _)
      .join(', ')}]:`;

    let updatedDepenenciesLines = updatedDependencies.map(
      (dependency) => `  - ${dependency.name}@${dependency.newVersion}`,
    );

    return [changesetLink, ...updatedDepenenciesLines].join('\n');
  },

  getReleaseLine: async (changeset, type, options: Options | null) => {
    if (!options?.repo) {
      throw new Error(
        'Please provide a repo in Changesets config, e.g.:\n"changelog": ["@jakubmazanec/changesets-changelog", { "repo": "org/repo" }]',
      );
    }

    let pullRequestFromSummary: number | undefined;
    let commitFromSummary: string | undefined;
    let usersFromSummary: string[] = [];
    let replacedChangelog = changeset.summary
      .replace(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/gim, (_, rawPullRequest) => {
        let pullRequest = Number(rawPullRequest);

        if (!Number.isNaN(pullRequest)) {
          pullRequestFromSummary = pullRequest;
        }

        return '';
      })
      .replace(/^\s*commit:\s*(\S+)/gim, (_, commit: string) => {
        commitFromSummary = commit;

        return '';
      })
      .replace(/^\s*(?:author|user):\s*@?(\S+)/gim, (_, user: string) => {
        usersFromSummary.push(user);

        return '';
      })
      .trim();
    let [firstLine, ...lines] = replacedChangelog.split('\n').map((line) => line.trimEnd());
    let commitLink: string | undefined;
    let pullRequestLink: string | undefined;
    let usersLink: string | undefined;

    if (pullRequestFromSummary === undefined) {
      let commitToFetchFrom = commitFromSummary ?? changeset.commit;

      if (commitToFetchFrom) {
        let {links} = await getInfo({
          repo: String(options.repo),
          commit: commitToFetchFrom,
        });

        commitLink = links.commit;
        pullRequestLink = links.pull ?? undefined;
        usersLink = links.user ?? undefined;
      }
    } else {
      let {links} = await getInfoFromPullRequest({
        repo: String(options.repo),
        pull: pullRequestFromSummary,
      });

      if (commitFromSummary) {
        links = {
          ...links,
          commit: `[\`${commitFromSummary}\`](https://github.com/${options.repo}/commit/${commitFromSummary})`,
        };
      }

      commitLink = links.commit ?? undefined;
      pullRequestLink = links.pull;
      usersLink = links.user ?? undefined;
    }

    if (usersFromSummary.length) {
      usersLink = usersFromSummary
        .map((userFromSummary) => `[@${userFromSummary}](https://github.com/${userFromSummary})`)
        .join(', ');
    }

    let prefix = [
      pullRequestLink ? ` ${pullRequestLink}` : '',
      commitLink ? ` ${commitLink}` : '',
      usersLink ? ` (${usersLink})` : '',
    ].join('');

    return `\n\n-${prefix ? `${prefix} –` : ''} ${firstLine}\n${lines
      .map((line) => `  ${line}`)
      .join('\n')}`;
  },
};

export = changelogFunctions;
