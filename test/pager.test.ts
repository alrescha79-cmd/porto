import assert from "node:assert"
import { getPageNumbers, clampPage } from "../src/lib/pager.ts"

assert.deepEqual(getPageNumbers(1, 1), [1], "single page")
assert.deepEqual(getPageNumbers(5, 1), [1, 2, "...", 5], "first page")
assert.deepEqual(getPageNumbers(5, 3), [1, 2, 3, 4, 5], "middle page")
assert.deepEqual(getPageNumbers(5, 5), [1, "...", 4, 5], "last page")
assert.deepEqual(getPageNumbers(12, 6), [1, "...", 5, 6, 7, "...", 12], "wide total")
assert.equal(clampPage(0, 12), 1)
assert.equal(clampPage(99, 12), 12)
assert.equal(clampPage(5, 3), 3)
assert.equal(clampPage(2, 0), 1)

console.log("pager ok")