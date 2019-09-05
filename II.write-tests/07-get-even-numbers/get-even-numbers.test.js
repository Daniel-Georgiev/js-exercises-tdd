// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

const getEven = require('./get-even-numbers');

test('Returns only the even numbers', function(){
    //arrange
    const input = [22, 13, 73, 82, 4];
    
    //act
    const result = getEven(input);

    //assert
    expect(result).toEqual([22, 82, 4]);
    expect(input).toEqual([22, 13, 73, 82, 4]);
})