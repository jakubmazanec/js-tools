import * as changelogFunctions from '../src/changesets-changelog';
import {createGetReleaseLineArgs} from './utils/createGetReleaseLineArgs';

function getMockGithubData() {
  return {
    commit: '03ee332',
    user: 'jakubmazanec',
    pull: 7853,
    repo: 'jakubmazanec/js-tools',
  };
}

let mockGithubData = getMockGithubData();

jest.mock('@changesets/get-github-info', () => {
  let mockGithubData = getMockGithubData();
  let links = {
    user: `[@${mockGithubData.user}](https://github.com/${mockGithubData.user})`,
    pull: `[#${mockGithubData.pull}](https://github.com/${mockGithubData.repo}/pull/${mockGithubData.pull})`,
    commit: `[\`${mockGithubData.commit}\`](https://github.com/${mockGithubData.repo}/commit/${mockGithubData.commit})`,
  };

  return {
    async getInfo() {
      return {
        pull: mockGithubData.pull,
        user: mockGithubData.user,
        links,
      };
    },
    async getInfoFromPullRequest() {
      return {
        commit: mockGithubData.commit,
        user: mockGithubData.user,
        links,
      };
    },
  };
});

describe('getReleaseLine()', () => {
  describe.each([mockGithubData.commit, 'wrongcommit', undefined])(
    'with commit from changeset of %s',
    (commitFromChangeset) => {
      describe.each(['pr', 'pull request', 'pull'])('override pr with %s keyword', (keyword) => {
        test.each(['with #', 'without #'] as const)('%s', async (kind) => {
          await expect(
            changelogFunctions.getReleaseLine(
              ...createGetReleaseLineArgs(
                `${keyword}: ${kind === 'with #' ? '#' : ''}${mockGithubData.pull}`,
                commitFromChangeset,
                mockGithubData.repo,
              ),
            ),
          ).resolves.toBe(
            `\n\n- [#7853](https://github.com/jakubmazanec/js-tools/pull/7853) [\`03ee332\`](https://github.com/jakubmazanec/js-tools/commit/03ee332) ([@jakubmazanec](https://github.com/jakubmazanec)) – something\n`,
          );
        });
      });
      test('override commit with commit keyword', async () => {
        await expect(
          changelogFunctions.getReleaseLine(
            ...createGetReleaseLineArgs(
              `commit: ${mockGithubData.commit}`,
              commitFromChangeset,
              mockGithubData.repo,
            ),
          ),
        ).resolves.toBe(
          `\n\n- [#7853](https://github.com/jakubmazanec/js-tools/pull/7853) [\`03ee332\`](https://github.com/jakubmazanec/js-tools/commit/03ee332) ([@jakubmazanec](https://github.com/jakubmazanec)) – something\n`,
        );
      });
    },
  );

  describe.each(['author', 'user'])('override author with %s keyword', (keyword) => {
    test.each(['with @', 'without @'] as const)('%s', async (kind) => {
      await expect(
        changelogFunctions.getReleaseLine(
          ...createGetReleaseLineArgs(
            `${keyword}: ${kind === 'with @' ? '@' : ''}someoneelse`,
            mockGithubData.commit,
            mockGithubData.repo,
          ),
        ),
      ).resolves.toBe(
        `\n\n- [#7853](https://github.com/jakubmazanec/js-tools/pull/7853) [\`03ee332\`](https://github.com/jakubmazanec/js-tools/commit/03ee332) ([@someoneelse](https://github.com/someoneelse)) – something\n`,
      );
    });
  });

  it('with multiple authors', async () => {
    await expect(
      changelogFunctions.getReleaseLine(
        ...createGetReleaseLineArgs(
          ['author: @jakubmazanec', 'author: @foobar'].join('\n'),
          mockGithubData.commit,
          mockGithubData.repo,
        ),
      ),
    ).resolves.toMatchInlineSnapshot(`
    "

    - [#7853](https://github.com/jakubmazanec/js-tools/pull/7853) [\`03ee332\`](https://github.com/jakubmazanec/js-tools/commit/03ee332) ([@jakubmazanec](https://github.com/jakubmazanec), [@foobar](https://github.com/foobar)) – something
    "
  `);
  });
});
