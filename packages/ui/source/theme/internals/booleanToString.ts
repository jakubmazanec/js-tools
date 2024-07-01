export function booleanToString<T>(value: T): T extends boolean ? string : T {
  return (
    typeof value === 'boolean' ? `${value}`
    : value === 0 ? '0'
    : value) as T extends boolean ? string : T;
}
