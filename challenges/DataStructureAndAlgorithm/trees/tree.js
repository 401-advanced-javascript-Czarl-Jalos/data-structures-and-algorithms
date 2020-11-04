'use strict'

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

}

let outPutPre = [];
let outPutIn = [];
let outPutPost = [];
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  

  preOrder(root){


    let currentNode = root; // our beginning node

    // process Current First, than the left, than the right

    // processing of the node
    if (currentNode) {
      outPutPre.push(currentNode.value);
    }

    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.preOrder(currentNode.left);
    }

    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.preOrder(currentNode.right);
    }
    return outPutPre;
  }

  inOrder(root) {
    
    let currentNode = root; //beginning

    //left First than the currentNod, than the right
  
      // we nove current node to the left if it exists;
      if (currentNode.left) {
        this.inOrder(currentNode.left);
      }
  
      // processing of the node
      if (currentNode) {
        outPutIn.push(currentNode.value);
      }
  
      // we move current Node to the right if it exists;
      if (currentNode.right) {
        this.inOrder(currentNode.right);
      }
       
    return outPutIn;
  }

  postOrder(root) {

    let currentNode = root; // our beginning node

    // process left First than the currentNod, than the right
  
      // we nove current node to the left if it exists;
      if (currentNode.left) {
        this.postOrder(currentNode.left);
      }
  
      // we move current Node to the right if it exists;
      if (currentNode.right) {
        this.postOrder(currentNode.right);
      }
  
      // processing of the node
      if (currentNode) {
        outPutPost.push(currentNode.value);
      }
 
    return outPutPost;
  }
  
  findMaximumValue() {
    if (!this.root) {
      throw new RangeError('Tree is empty!');
    }

    let max = this.root.value;

    function _findMaximumValue(root) {
      if (!root) {
        return;
      }

      if (root.value > max) {
        max = root.value;
      }

      _findMaximumValue(root.left);
      _findMaximumValue(root.right);
    }

    _findMaximumValue(this.root);
    return max;
  }

}

class BinarySearchTree extends BinaryTree {
  // constructor (root) {
  //   super(root);
  //   this.size = 0;
  // }
  add(value){
    // let currentNode = root;
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    } 
    //trial
    else{
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode){
    if(newNode.value < node.value){
      if(node.left === null){
        node.left = newNode;
      } else{
        this.insertNode(node.left, newNode);
      }
    } else{
      if(node.right === null){
        node.right = newNode;
      } else{
        this.insertNode(node.right, newNode)
      }
    }
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if(currentNode.value === value) {
        return true;
      }

      if(currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}


// const tree = new BinaryTree();
const Node2 = new Node(2);
// const Node3 = new Node(3);
// const Node4 = new Node(4)
// const Node5 = new Node(5);
// const Nodex = new Node(Node2, Node4, Node5 ); 
// const Node1 = new Node(1, new Node(Node2, Node4, Node5), Node3);
// const Tree = new BinaryTree(Node1);

// const SearchTree = new BinarySearchTree();
// SearchTree.add(2);
// SearchTree.add(5);
// SearchTree.add(1);
// // SearchTree.add(3);
// // SearchTree.add(4);
// console.log(SearchTree)
// tree.root = Node1;

// console.log(Tree);



// console.log(tree);
// Tree.preOrder(Tree.root);
// tree.inOrder(tree.root);
// tree.postOrder(tree.root);


module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};