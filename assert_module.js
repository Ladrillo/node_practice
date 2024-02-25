const assert = require('assert/strict')

assert.deepEqual({ a: 1, b: 11 }, { b: 11, a: 1 })
assert.equal({ valueOf: () => 4 }, 4)
