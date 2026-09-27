// zeros.js：一次扫描找出全部零值位置（位置从零数，按扫描顺序自然升序、不重复）
import { isZero } from "./check.js";

export function findZeros(values) {
  if (!Array.isArray(values) || values.length === 0) {
    const error = new Error("数值列表为空");
    error.code = "E_EMPTY_VALUES";
    throw error;
  }

  const positions = [];
  let nonzero = 0;
  for (let index = 0; index < values.length; index += 1) {
    // 每个值只判一次：零与非零互斥且穷尽，保证 positions.length + nonzero === values.length
    if (isZero(values[index])) {
      positions.push(index);
    } else {
      nonzero += 1;
    }
  }

  return {
    positions: positions,
    first: positions.length > 0 ? positions[0] : -1,
    nonzero: nonzero
  };
}
