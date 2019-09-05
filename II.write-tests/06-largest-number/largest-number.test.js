// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

const getLargestNumber = require('./largest-number');
test("Returns the largest number", function(){
    //arrange
    const input = [-200, 3, 21, 88, 4, 36];
    //act
    const result = getLargestNumber(input);

    //assert

    expect(result).toBe(88);
})