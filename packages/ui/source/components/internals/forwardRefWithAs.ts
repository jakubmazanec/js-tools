import {forwardRef, type ForwardRefRenderFunction} from 'react';

export function forwardRefWithAs<T extends {name: string; displayName?: string}>(
  component: T,
): T & {displayName: string} {
  return Object.assign(
    forwardRef(component as unknown as ForwardRefRenderFunction<T, unknown>) as object,
    {
      displayName: component.displayName ?? component.name,
    },
  ) as T & {displayName: string};
}
