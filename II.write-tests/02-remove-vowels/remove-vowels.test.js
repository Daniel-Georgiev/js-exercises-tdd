const removeVowels = require('./remove-vowels');
test("remove vowels from word", function() {
  // Arrange
  const string = 'samuel';

  // Act
  const result = removeVowels(string)
  // Assert
  expect(result).toBe('_a_ue_');

});
