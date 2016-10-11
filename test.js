let assert = require('assert');
let PI = require('./server').PI;

assert.equal(PI(2), 3.1);
assert.equal(PI(3), 3.14);
assert.equal(PI(3, false), 14);
