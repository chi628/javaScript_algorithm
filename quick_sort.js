// O(n logn)

// arr: [8, 9, 2, 5, 1]
function quickSort(arr) {
  function sort(arr, start, end) {
    let pivot = arr[start]
    let lastPivotIndex = start
    for(let i = end; i > start; i--) {
      if (arr[i + lastPivotIndex] < pivot) {
        // arr[i] 要移到 pivot 的左邊
        const tmpEl = arr[i+lastPivotIndex]
        arr.splice(i + lastPivotIndex,1)
        arr.splice(lastPivotIndex, 0, tmpEl)
        lastPivotIndex++
      }
    }

    return lastPivotIndex
  }

  function _quickSort(arr, start, end) {
    // if(start >= end) return arr

    const middle = sort(arr, start, end)
    _quickSort(arr, start, middle - 1)
    _quickSort(arr, middle, end)
    console.log(arr)
  }

  return _quickSort(arr, 0, arr.length-1)
}

quickSort([8, 9, 2, 5, 1])

// // start > pivot 的 index
// // start + 1 ~ end 檢查元素與 pivot 之間的大小關係
// // 

// // 資料結構：陣列、物件, Map, Set
// // linked-list, Queue, Stack, Hash Table, Tree


// function quickSort(arr) {
//   const swap = (array, i , j) => {
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   const partition = (array, start, end) => {
//     let splitIndex = start + 1;
//     // 1

//     console.log('splitindex', splitIndex)
//     for (let i = start + 1; i <= end; i++) {
//       console.log('i', i, array[i])
//       if (array[i] < array[start]) {
//         swap(array, i, splitIndex);
//         splitIndex++;
//         // 2
//         // 3
//         // 4
//       }
//     }
  
//     // 記得把 pivot 跟最後一個比它小的元素互換
//     swap(array, start, splitIndex - 1);
//     return splitIndex - 1;
//   }
//   const _quickSort = (array, start, end) => {
//     if (start >= end) return array;
  
//     // 在 partition 裡面調整數列，並且回傳 pivot 的 index
//     const middle = partition(array, start, end);
//     console.log(start,end, middle)
//     _quickSort(array, start, middle - 1);
//     _quickSort(array, middle + 1, end);
//     return array;
//   };
//   return _quickSort(arr, 0, arr.length - 1);
// }

// quickSort([8, 9, 2, 5, 1])