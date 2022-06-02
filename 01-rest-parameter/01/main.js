const multiply = (...nums) => nums.reduce((acc, el) => acc * el, 1);
console.log(multiply(2, 4, 6, 10));
