var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
    //Arrange
    const input = [0, 3, 4, 10, 32, 9, 21, 55];
    //Act
    const result = largerThanTen(input);
    //Assert
    expect(result).toEqual([32, 21, 55])
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
