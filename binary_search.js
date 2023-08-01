// O(log n)
// 需為排序好的數列

// [a, b, c, d, e]
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length
  let middle = 0

  while(start <= end) {
    middle = Math.floor((start + end) / 2)

    if (target < arr[middle]) {
      end = middle - 1
    } else if (target > arr[middle]) {
      start = middle + 1
    } else {
      return middle
    }
  }

  return -1
}
