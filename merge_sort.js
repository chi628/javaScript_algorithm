// O(n logn)

// arr: [8, 9, 2, 5, 1]

function mergeSort(leftArr, rightArr) {
  let il = 0
  let ir = 0
  const res = []

  while(il < leftArr.length && ir < rightArr.length) {
    // 左邊陣列值較小
    if(leftArr[il] < rightArr[ir]) {
      res.push(leftArr[il])
      il++
    } else {
      res.push(rightArr[ir])
      ir++
    }
  }

  // 剩右邊陣列
  while(ir < rightArr.length) {
    res.push(rightArr[ir])
    ir++
  }

  // 剩左邊陣列
  while(il < leftArr.length) {
    res.push(leftArr[il])
    il++
  }

  return res
}

function divideArr (arr) {
  const leng = arr.length
  if (leng === 1) {
    return arr
  }

  const middle = Math.floor(leng / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle, leng)
  return mergeSort(divideArr(leftArr), divideArr(rightArr))

  // mergeSort 迴圈註記
  // 第一次會得到 [8, 9] & [2, 5, 1]
  // 從左至右執行，所以會先執行 divideArr([8, 9])，得到[8] & [9]，再執行一次 divideArr([8])，return [8]，接著執行 divideArr[9]，return [8]，執行 mergeSort([8], [9])，得到 res: [8, 9] >> 執行完內層函式
  // 接續執行 divideArr([2, 5, 1])，得到[2] & [5, 1]，再執行一次 divideArr([2])，return [2]，接著執行 divideArr[5, 1]，return [5] & [1]，再執行一次 divideArr([5])，return [5]，接著執行 divideArr[1]，return [1]，執行 mergeSort([5], [1])，得到 res: [1, 5]，回頭繼續執行 mergeSort([2], [1, 5])，得到 res: [1, 2, 5] >> 執行完內層函式
  // 回頭執行 mergeSort([8, 9], [1, 2, 5]) > [1, 2, 5, 8, 9]
}

divideArr([8, 9, 2, 5, 1])