/**
 * Fibonacci returns a list of n values where the next number is the sum of the previous two
 * As in fib(13) = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
 * @param {Number} n The number of elements to display
 * @returns {Array} a fib sequence as an array
 */
const fib = n => [...Array(n).keys()]
  .reduce((a,v) => {
    a.push(a.slice(-1)[0] + a.slice(-2)[0]);
    return a;
  }, [0, 1]);
