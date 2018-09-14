/**
 * returns a list of n values where the next number is the sum of the previous two
 * As in fib(13) = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
 * @param {Number} n The number of elements to display
 * @returns {Array} a fib sequence as an array
 */
export default const fib = n => [...Array(n)]
  .reduce((a,v) => {
    a.push(a.slice(-1)[0] + a.slice(-2)[0]);
    return a;
  }, [0, 1]);

/**
 * returns the fibonacci integer at the given depth
 * @param {Number} n The number of elements to display
 * @returns {Number} integer at the provided depth
 */
export const fibonacci = n => n < 1 ? 0 : (n <= 2 ? 1 : (fibonacci(n - 1) + fibonacci(n - 2)));


