// zeros.js：找零值（一次扫描，每个值只判一次）
import { isZero } from "./check.js";

export function findZeros(values) {
  if (!values || values.length === 0) {
    const error = new Error("数值列表为空");
    error.code = "E_EMPTY_VALUES";
    throw error;
  }
  const positions = [];
  let nonzero = 0;
  for (let spot = 0; spot < values.length; spot += 1) {
    if (isZero(values[spot])) {
      positions.push(spot);
    } else {
      nonzero += 1;
    }
  }
  return { positions: positions, first: positions.length > 0 ? positions[0] : -1, nonzero: nonzero };
}
