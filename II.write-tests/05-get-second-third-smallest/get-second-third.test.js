var getSecondThirdSmallest = require("./get-second-third");

test("Gets the second and third smallest numbers", function() {
    //Arrange
    const input = [90, 5, 11, 8, 6];
    //Act
    const result = getSecondThirdSmallest(input);

    //Assert
    expect(result).toEqual([6, 8]);
    expect(input).toEqual([90, 5, 11, 8, 6]);
})

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
