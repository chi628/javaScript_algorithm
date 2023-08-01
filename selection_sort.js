// O(n²) 
// 每輪比較完才交換位置 > 記錄最小值 index，結束後將最小值的位置與初始值交換

// arr1 = [8, 9, 2, 5, 1]
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = Infinity
    let minIndex = 0
    for(let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  console.log(arr)
}

selectionSort([8, 9, 2, 5, 1])