import {type ClassName} from './ClassName.js';

type PickPropertyIfExistsReturn<
  T extends ClassName | Record<string, ClassName> | undefined,
  U extends string | undefined,
> =
  U extends undefined ? T
  : T extends Record<string, ClassName> ? null
  : ClassName;

export function pickPropertyIfExists<
  T extends ClassName | Record<string, ClassName> | undefined,
  U extends string | undefined,
>(object: T, property?: U): PickPropertyIfExistsReturn<T, U> {
  if (!property) {
    return object as PickPropertyIfExistsReturn<T, U>;
  }

  if (Array.isArray(object) || !object || typeof object === 'string') {
    return null as PickPropertyIfExistsReturn<T, U>;
  }

  return object[property] as PickPropertyIfExistsReturn<T, U>;
}
