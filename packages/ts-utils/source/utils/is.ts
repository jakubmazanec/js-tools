/**
 * A generic type guard. If `isMatched` is `true`, TypeScript assumes `value` is of type `T`.
 * You can use it to narrow types:
 *
 * ```TypeScript
 * interface Foo {
 *   value: string;
 * }
 *
 * interface Bar {
 *   value: number;
 * }
 *
 * declare let foobar: Foo | Bar;
 *
 * if (is<Foo>(foobar, typeof foobar.value === 'string')) {
 *   // `typeof foobar` is now `Foo`
 * } else {
 *   // `typeof foobar` is now `Bar`
 * }
 * ```
 *
 * @typeParam T Potential type of `value`
 * @param value Value being checked
 * @param isMatched Specifies if `value` is of type `T`
 * @return Value of `isMatched`
 */
export function is<T>(value: unknown, isMatched: boolean): value is T {
  return isMatched;
}
