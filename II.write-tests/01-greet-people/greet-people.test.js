const greetPeople = require('./greet-people');
test("print list of names prefixed with Hello", function() {
  // Arrange
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  // Act
  var result = greetPeople(mentors)
  // Assert
  expect(result).toBe('Hello IrinaAshleighEtza')
});
test("print empty string prefixed with Hello", function() {
  // Arrange
  var mentors = [];
  // Act
  var result = greetPeople(mentors)
  // Assert
  expect(result).toBe('Hello ')
});
