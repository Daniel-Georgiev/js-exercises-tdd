var fizzbuzz = require("./fizz-buzz");

test("prints 1", function() {
  var result = fizzbuzz(1);
  expect(result).toEqual("1");
});

test("prints 1,2", function() {
  var result = fizzbuzz(2);
  expect(result).toEqual("1, 2");
});

test("prints 1,2, fizz", function() {
  var result = fizzbuzz(3);
  expect(result).toEqual("1, 2, fizz");
});

test("prints 1,2, fizz", function() {
  var result = fizzbuzz(5);
  expect(result).toEqual("1, 2, fizz, 4, buzz");
});

test("prints fizz if number is multiple of 3, buzz if it is multiple of 5 and fizzbuzz if it is mutiple of both 3 and 5", function() {
  var result = fizzbuzz(15);
  expect(result).toEqual("1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, fizz, 14, fizzbuzz");
});

test("prints fizz if number is multiple of 3, buzz if it is multiple of 5 and fizzbuzz if it is mutiple of both 3 and 5 if n = 20", function() {
  var result = fizzbuzz(20);
  expect(result).toEqual("1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, fizz, 14, fizzbuzz, 16, 17, fizz, 19, buzz");
});

test("if number has 3 in it, it is a fizz", function() {
  var result = fizzbuzz(15);
  expect(result).toEqual("1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, fizz, 14, fizzbuzz");
});



