const deklinacja = require('deklinacja-od-ilosci');
const assert = require('assert');

// zero
assert.strictEqual(deklinacja(0, 'kot', 'koty', 'kotów'), 'kotów');

// liczby dodatnie
assert.strictEqual(deklinacja(1, 'kot', 'koty', 'kotów'), 'kot');
assert.strictEqual(deklinacja(2, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(3, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(4, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(5, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(6, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(7, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(8, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(9, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(10, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(20, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(21, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(22, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(23, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(24, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(25, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(30, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(31, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(32, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(33, 'kot', 'koty', 'kotów'), 'koty');
// liczby ujemne
assert.strictEqual(deklinacja(-33, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(-32, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(-31, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-30, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-25, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-24, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(-23, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(-22, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(-21, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-20, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-10, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-9, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-8, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-7, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-6, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-5, 'kot', 'koty', 'kotów'), 'kotów');
assert.strictEqual(deklinacja(-4, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(-3, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(-2, 'kot', 'koty', 'kotów'), 'koty');
assert.strictEqual(deklinacja(-1, 'kot', 'koty', 'kotów'), 'kot');

// rzeczowniki bez dopełniacza l. mnogiej
assert.strictEqual(deklinacja(-2, 'dzień', 'dni'), 'dni');
assert.strictEqual(deklinacja(-1, 'dzień', 'dni'), 'dzień');
assert.strictEqual(deklinacja(0, 'dzień', 'dni'), 'dni');
assert.strictEqual(deklinacja(1, 'dzień', 'dni'), 'dzień');
assert.strictEqual(deklinacja(2, 'dzień', 'dni'), 'dni');
assert.strictEqual(deklinacja(4, 'dzień', 'dni'), 'dni');
assert.strictEqual(deklinacja(5, 'dzień', 'dni'), 'dni');
assert.strictEqual(deklinacja(21, 'dzień', 'dni'), 'dni');
assert.strictEqual(deklinacja(22, 'dzień', 'dni'), 'dni');
assert.strictEqual(deklinacja(24, 'dzień', 'dni'), 'dni');
assert.strictEqual(deklinacja(25, 'dzień', 'dni'), 'dni');
