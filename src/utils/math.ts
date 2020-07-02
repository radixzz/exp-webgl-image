export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;

export function distance(a: number[], b: number[]) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

export function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

export function mapToRange(x: number, a1: number, a2: number, b1: number, b2: number) {
  return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
}

export function toDegrees(radians: number) {
  return radians * RAD2DEG;
}

export function toRadians(degrees: number) {
  return degrees * DEG2RAD;
}
