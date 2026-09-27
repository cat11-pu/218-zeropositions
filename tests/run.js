import assert from "node:assert";
import { isZero } from "../check.js";
import { findZeros } from "../zeros.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("isZero returns a boolean", () => {
  assert.strictEqual(typeof isZero(0), "boolean");
});

check("findZeros returns positions", () => {
  assert.ok(Array.isArray(findZeros([0, 1]).positions));
});

check("findZeros returns first", () => {
  assert.strictEqual(typeof findZeros([0, 1]).first, "number");
});

check("render counts zeros", () => {
  assert.strictEqual(typeof render({ values: [0, 1] }).count, "number");
});

check("render exposes total flag", () => {
  assert.strictEqual(typeof render({ values: [0, 1] }).total_ok, "boolean");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
