/**
 * Binary search is an optimized O(log n) search on sorted arrays. It is also known as a "half-interval search",
 * "logarithmic search", or "binary chop" according to https://en.wikipedia.org/wiki/Binary_search_algorithm
 * @param {Array} sorted
 * @param {number,string} value any value that uses strict equality for comparison
 * @param {function} value any value that uses strict equality for comparison
 * @param {number=0} start
 * @param {number=} end
 * @returns {number}
 */
export const binarySearch = (sorted, value, start = 0, end = sorted.length - 1) => {
  if (end >= start) {
    // Same as Math.floor((finish - start)/2)
    const mid = start + Math.floor((end - start) / 2);

    if(sorted[mid] === value) {
      return mid;
    }
    return (
      sorted[mid] > value
        ? binarySearch(sorted, value, start, mid-1)
        : binarySearch(sorted, value, mid+1, end)
    );
  }
  return -1;
};

export default binarySearch;
