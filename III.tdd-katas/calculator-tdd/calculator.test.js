const {add} = require('./calculator');

test("Calculator returns 0 if the input is an empty string", function() {
    //Arrange
    const input = "";
    const expected = 0;
    //Act
    const result = add(input);
    //Assert
    expect(result).toBe(expected);
})

test("Returns the input if it is a single number", function(){
    //Arrange
    const input = "1"
    const expected = 1;
    //Act
    const result = add(input);
    //Assert
    expect(result).toBe(expected);
})

test("Returns the sum of the input numbers", function(){
    //Arrange
    const input = "1,2"
    const expected = 3;
    //Act
    const result = add(input);
    //Assert
    expect(result).toBe(expected);
})

test("Returns the sum of the input numbers", function(){
    //Arrange
    const input = "1,2,3,4,5"
    const expected = 15;
    //Act
    const result = add(input);
    //Assert
    expect(result).toBe(expected);
})

test("Input could be separated by a new line instead of a comma", function(){
     //Arrange
     const input = "1\n2,3,4,5"
     const expected = 15;
     //Act
     const result = add(input);
     //Assert
     expect(result).toBe(expected);
})

test("The add method can receive an optional delimeter parameter", function(){
    //Arrange
    const input = "//;\n1;2"
    const expected = 3;
    //Act
    const result = add(input);
    //Assert
    expect(result).toBe(expected);
})

test("Calculator doesnt allow negatives", function(){
    //Arrange
    const input = "1,4,-1"
    const expected = "negatives not allowed";
    //Act
    const result = add(input);
    //Assert
    expect(result).toThrowError(Error('negatives not allowed'));
})

test("Calculator should ignore numbers bigger than 1000", function(){
    //Arrange
    const input = "2, 1001"
    const expected = 2;
    //Act
    const result = add(input);
    //Assert
    expect(result).toBe(expected);
})