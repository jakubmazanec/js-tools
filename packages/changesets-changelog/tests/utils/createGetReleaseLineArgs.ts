import parse from '@changesets/parse';

export function createGetReleaseLineArgs(
  content: string,
  commit: string | undefined,
  repo: string,
) {
  return [
    {
      ...parse(
        `---
  pkg: "minor"
  ---

  something
  ${content}
  `,
      ),
      id: 'some-id',
      commit,
    },
    'minor',
    {repo},
  ] as const;
}
