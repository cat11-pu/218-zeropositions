// app.js：渲染结果
import { isZero } from "./check.js";
import { findZeros } from "./zeros.js";

export function render(spec) {
  const values = spec.values || [];
  const view = findZeros(values);
  const positions = view.positions || [];
  return { positions: positions, count: positions.length, first: view.first === undefined ? -1 : view.first,
           nonzero: view.nonzero || 0, value_count: values.length,
           total_ok: positions.length + (view.nonzero || 0) === values.length,
           tail: isZero(0) };
}
