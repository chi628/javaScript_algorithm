// O(n²) 
// 兩兩比較，如果前者比後者大，就交換位置，否則不動。
// arr1 = [8, 9, 2, 5, 1]
function bubbbleSort(items) {
  let count = items.length - 1
  
  while(count > 0) {
    // 最後一個不比較，所以長度減 1
    for(let i = 0; i < items.length - 1; i++) {
      // 0
      // 1
      // 2
      // 3
      if(items[i] > items[i+1]) {
        [items[i], items[i + 1]] = [items[i+1], items[i]]
      }
    }
    count--
  }

  console.log(items)
}

bubbbleSort([8, 9, 2, 5, 1])