const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('return a Rooster call', () => {
            //Setup
            const expected = 'cock-a-doodle-doo!';
            //Exercise
            const actual = Rooster.announceDawn();
            //Verify
            assert.equal(expected, actual);
        });
    });
    describe('.timeAtDawn', () => {
        it('return its argument as a string', () => {
            //Setup
            const inputNumber = 10;
            const expected = '10';
            //Exercise
            const actual = Rooster.timeAtDawn(inputNumber);
            //Verify
            assert.strictEqual(expected, actual);
        });
        it('throws an error if passed a number less than 0', () => {
            //Setup
            const inputNumber = -1;
            const expected = RangeError;
            //Verify
            assert.throws(() => {
                Rooster.timeAtDawn(inputNumber);      //Exercise
            }, expected);
        });
        it('throws an error if passed a number greater than 23', () => {
            //Setup
            const inputNumber = 24;
            const expected = RangeError;
            //Verify
            assert.throws(() => {
                Rooster.timeAtDawn(inputNumber);    //Exercise
            }, expected);
        });
    });
});
