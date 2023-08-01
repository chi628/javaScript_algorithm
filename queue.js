// 先進先出(FIFO)
class Queue {
  constructor () {
    this.list = []
  }
  enqueue(el) {
    this.list.push(el)
  }
  dequeue() {
    this.list.shift()
  }
  front() {
    return this.list[0]
  }
  clear() {
    this.list = []
  }
  size() {
    return this.list.length
  }
}

let queue = new Queue()
queue.enqueue('element 1')
queue.enqueue('element 2')
queue.enqueue('element 3')
console.log(queue)
queue.dequeue()
console.log(queue)

// enqueue(ele):  從後面插入一個元素
// dequeue(): 從前面移除元素
// front():  return 最前面的值
// clear(): 清空 Queue 裡的所有元素
// size(): return 長度

// 優先佇列
class PriorityQueue extends Queue {
  constructor() {
    this.priority = Infinity
  }
}

// 環狀佇列
class CircleQueue { 
  
}