function addNumbers(numbers) {
    return numbers.reduce( (acc, num) => acc + num, 0)
}
module.exports = addNumbers;
