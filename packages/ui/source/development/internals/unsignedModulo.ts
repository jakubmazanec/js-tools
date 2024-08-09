export function unsignedModulo(x: number, n: number) {
  return ((x % n) + n) % n;
}
