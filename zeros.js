// zeros.js：找零值（基线：一律给空表）
import { isZero } from "./check.js";

export function findZeros(values) {
  return { positions: [], first: -1, nonzero: 0 };
}
