// 後進先出 (LIFO)
class Stack {
  constructor() {
    this.list = []
  }
  push(el) {
    this.list.push(el)
  }
  pop() {
    return this.list.pop()
  }
  top() {
    return this.list[this.list.length - 1]
  }
  isEmpty() {
    return this.list.length === 0
  }
  clear() {
    this.list = []
  }
  size() {
    return this.list.length
  }
}

let stack = new Stack()
stack.push('element 1')

console.log(stack, stack.size())