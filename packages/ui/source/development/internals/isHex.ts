export function isHex(value: string) {
  const valueHex = value.length === 6 && !value.startsWith(`#`) ? `#${value}` : value;

  const re = new RegExp(/^#[\da-f]{6}$/i);

  return re.test(valueHex.toUpperCase());
}
