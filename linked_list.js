// 不必以連續的空間來儲存元素，由多個節點(nodes)組合而成
// node: el(資料) + next(連結欄位)
// list: head, length


class LinkedListNode {
  constructor(el) {
    this.el = el
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 從尾部增加一個 node
  append(el) {
    let newNode = new LinkedListNode(el)

    // 沒有任何元素元素
    if(this.head === null) {
      this.head = newNode
    } else {
      // list 不為空時
      let current = this.head

      while(current.next !== null) {
        current = current.next
      }
      // 當 current.next 是 null，表示找到最後一個元素了
      current.next = newNode
    }

    this.length++
  }

  // 從特定位置增加一個 node
  insert(position, el) {
    if(position < 0 || position > this.length) {
      return
    }

    let newNode = new LinkedListNode(el)
    let current = this.head

    // 從最前面加入
    if(position === 0) {
      newNode.next = current
      this.head = newNode
    } else {
      let index = 0
      let previous

      while(index !== position) {
        index++
        previous = current
        current = current.next
      }

      newNode.next = current
      previous.next = newNode
    }

    this.length++
  }

  //  刪除特定位置的 node
  removeAt(position) {
    if(position < 0 || position > this.length) {
      return
    }
    let current = this.head

    if(position === 0) {
      this.head = current.next
    } else {
      let index = 0
      let previous

      // 2
      while(index !== position) {
        index++
        previous = current
        current = previous.next
      }
      previous.next = current.next
    }

    this.length--
  }

  // 回傳此 node 是否存在，不存在回傳 -1
  indexOf(el) {
    let newNode = new LinkedListNode(el)
    let index = -1
    let current = this.head

    while(current !== null) {
      if(current.el === el) {
        return index
      }
      current = current.next
    }

    return -1
  }

  // 移除某個 node
  remove(el) {
    return this.removeAt(this.indexOf(el)) 
  }

  toString() {
    let str = ''
    let current = this.head

    while(current !== null) {
      str += current.el
      current = current.next
    }

    return str
  }

  size() {
    return this.length
  }
}

// double linkedList
