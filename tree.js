class Node {
  constructor(data) {
    this.data = data
    this.parent = null
    this.children = []
  }
}

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

class Tree {
  constructor(data) {
    const node = new Node(data)
    this.root = node
  }

  traverseDF(callback) {
    (function recurse(currentNode) {
      console.log('a', currentNode)
      for(let i = 0; i < currentNode.children&&currentNode.children.length; i++) {
        recurse(currentNode.children[i])
      }
      // callback(currentNode)
    })(this.root)
  }

  traverseBF(callback) {
    const queue = new Queue()
    queue.enqueue(this.root)
    // let currentTree = queue.dequeue()
    console.log(queue)
  }
}


const tree = new Tree(1)
tree.root.children.push(new Node(2))
tree.root.children[0].parent = tree
tree.root.children.push(new Node(3))
tree.root.children[1].parent = tree
tree.root.children.push(new Node(4))
tree.root.children[2].parent = tree
tree.root.children[0].children.push(5)
tree.root.children[0].children[0].parent = tree.root.children[0]
tree.root.children[0].children.push(6)
tree.root.children[0].children[1].parent = tree.root.children[0]
tree.root.children[2].children.push(7)
tree.root.children[2].children[0].parent = tree.root.children[2]

// console.log(tree)

tree.traverseDF((node) => {
  console.log('node', node)
})

// tree.traverseBF((node) => {
//   // console.log('BF', node)
// })
