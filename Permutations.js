/**
 * Swaps two indices in an array modifying the array
 * @param {array} a the array to modify
 * @param {number} i the index to swap
 * @param {number} j the index to swap
 * @returns void
 * @example swap([1,2,3,4],0,3) // [4,2,3,1] 
 */
const swap = (a, i, j) => {
  const save = a[i];
  a[i] = a[j];
  a[j] = save;
};

/**
 * Heaps Algorithm w/ iterator callback
 * https://stackoverflow.com/a/52172686/511795
 * @param arr
 * @param n
 * @param cb
 * @returns void
 * @example heaps([1,2,3,4], 4, p => result.push(p.slice()));
 */
const heaps = (arr, n = arr.length, cb = i => i) => {
  if (n === 1) {
    cb(arr);
  } else {
    for (let i = 0; i < n; i++) {
      perm(arr, n - 1, cb);
      heaps(arr, n - 1, n % 2 ? 0 : i);
    }
  }
};
export default heap;

/** Heaps algorithm via es6 + generator
* https://stackoverflow.com/a/48454664/511795
* @param arr
* @param n
* @returns {IterableIterator<*>}
*/
export function *genHeap(arr, n = arr.length) {
  if (n <= 1) yield arr.slice();
  else {
    for (let i = 0; i < n - 1; i++) {
      yield *heaps2(arr, n-1);
      if (n % 2 === 0) [arr[n-1], arr[i]] = [arr[i], arr[n-1]];
      else             [arr[n-1], arr[0]] = [arr[0], arr[n-1]];
    }
    yield *heaps2(arr, n-1);
  }
}

