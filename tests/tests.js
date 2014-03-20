/**
 * Tests for nTh.js using the QUnit framework.
 */

(function () {
    QUnit.test("Numeric Ordinal Suffixes Tests", function (assert) {
        assert.equal(nth(1), '1st', 'nth(1) === 1st');
        assert.equal(nth(2), '2nd', 'nth(2) === 2nd');
        assert.equal(nth(3), '3rd', 'nth(3) === 3rd');
        assert.equal(nth(4), '4th', 'nth(4) === 4th');
        assert.equal(nth(5), '5th', 'nth(5) === 5th');
        assert.equal(nth(6), '6th', 'nth(6) === 6th');
        assert.equal(nth(7), '7th', 'nth(7) === 7th');
        assert.equal(nth(8), '8th', 'nth(8) === 8th');
        assert.equal(nth(9), '9th', 'nth(9) === 9th');
        assert.equal(nth(10), '10th', 'nth(10) === 10th');
        assert.equal(nth(11), '11th', 'nth(11) === 11th');
        assert.equal(nth(12), '12th', 'nth(12) === 12th');
        assert.equal(nth(13), '13th', 'nth(13) === 13th');
        assert.equal(nth(14), '14th', 'nth(14) === 14th');
        assert.equal(nth(15), '15th', 'nth(15) === 15th');
        assert.equal(nth(100), '100th', 'nth(100) === 100th');
        assert.equal(nth(101), '101st', 'nth(101) === 101st');
        assert.equal(nth(111), '111th', 'nth(111) === 111th');
        assert.equal(nth(112), '112th', 'nth(112) === 112th');
        assert.equal(nth(113), '113th', 'nth(113) === 113th');
        assert.equal(nth(1000), '1000th', 'nth(1000) === 1000th');
        assert.equal(nth(1001), '1001st', 'nth(1001) === 1001st');
    });
    
    QUnit.test("Non-Numeric Tests", function (assert) {
        assert.equal(nth('nonnumeric'), 'nonnumeric', "nth('nonnumeric') === nonnumeric");
        assert.equal(nth('One Hundred and 1'), 'One Hundred and 1st', "nth('One Hundred and 1') === 'One Hundred and 1st'");
        assert.equal(nth(''), '', "nth('') === ''");
        assert.equal(nth(' '), ' ', "nth(' ') === ' '");
    });
}());