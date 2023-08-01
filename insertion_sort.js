// O(n²) 
// 當前值跟前面的值比較，不理會後面的

// arr1 = [8, 9, 2, 5, 1] // length: 5
// i: 0, currentIndex: 1
// 8 < 9 > [8, 9, 2, 5, 1]
// ========================
// i: 1, currentIndex: 2
// j: 2 > arr[2]: 2 < arr[1]: 9 > [8, 2, 9, 5, 1]
// j: 1 > arr[1]: 2 < arr[0]: 8 > [2, 8, 9, 5, 1]
// ========================
// i: 2, currentIndex: 3
// j: 3 > arr[3]: 5 < arr[2]: 9 > [2, 8, 5, 9, 1]
// j: 2 > arr[2]: 5 < arr[1]: 8 > [2, 5, 8, 9, 1]
// j: 1 > arr[1]: 5 < arr[0]: 2 >>> 不成立 > [2, 5, 8, 9, 1]

function insertionSort(arr) {
  let currentIndex = 1
  for(let i = 0; i < arr.length; i++) {
  for(j = currentIndex; j > 0; j--) {
    if(arr[j] < arr[j-1]) {
      // swap
      [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
    }
  }
   currentIndex++
  }
  console.log(arr)
}

insertionSort([8, 9, 2, 5, 1])