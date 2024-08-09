import {forwardRef as baseForwardRef, type ForwardRefRenderFunction, type Ref} from 'react';

export function forwardRef<T, P>(
  component: (props: P, ref: Ref<T>) => React.ReactNode,
): (props: P & {ref?: Ref<T>}) => React.ReactNode {
  return baseForwardRef(component as unknown as ForwardRefRenderFunction<unknown, unknown>);
}
