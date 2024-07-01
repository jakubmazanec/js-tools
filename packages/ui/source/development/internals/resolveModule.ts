import module from 'node:module';
import path from 'node:path';

export function resolveModule(moduleId: string) {
  let require = module.createRequire(import.meta.url);
  let modulePath = path.dirname(require.resolve(`${moduleId}/package.json`));

  return modulePath;
}
