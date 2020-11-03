'use strict'

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder(root){

    const output = [];
    function _preOrder(root) {
      
      //First, than the left, than the right
      if(!root){
        return;
      }

      output.push(root.value);
      _preOrder(root.left);
      _preOrder(root.right);
      
    }

    _preOrder(this.root);
    return output;
  }

  inOrder(root) {
    const output = [];
    function _inOrder(root) {
    let currentNode = root; //beginning

    //left First than the currentNod, than the right
  
      // we nove current node to the left if it exists;
      if (currentNode.left) {
        _inOrder(currentNode.left);
      }
  
      // processing of the node
      if (currentNode) {
        output.push(currentNode.value);
      }
  
      // we move current Node to the right if it exists;
      if (currentNode.right) {
        _inOrder(currentNode.right);
      }
    }    

    _inOrder(root)
      console.log(output);
  }

  postOrder(root) {


    const output = [];
    function _postOrder(root) {
    let currentNode = root; // our beginning node

    // process left First than the currentNod, than the right
  
      // we nove current node to the left if it exists;
      if (currentNode.left) {
        _postOrder(currentNode.left);
      }
  
      // we move current Node to the right if it exists;
      if (currentNode.right) {
        _postOrder(currentNode.right);
      }
  
      // processing of the node
      if (currentNode) {
        output.push(currentNode.value);
      }
    }
      _postOrder(root);
      console.log(output);
  }

}

class BinarySearchTree extends BinaryTree {
  // constructor (root) {
  //   super(root);
  //   this.size = 0;
  // }
  add(value) {

    let addNode = new Node(value);
    let currentNode = this.root;
    // console.log(currentNode);
    // if(addNode.value === currentNode.value) {
    //   console.error('Value must be unique');
    // }

    if(currentNode === null) {
      currentNode =  addNode;
    } else {
      _add(addNode, currentNode);
    }
    
    function _add(addNode, currentNode) {
      while(currentNode.value !== addNode.value) {
        if(addNode.value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = addNode;
            return;
          } else {
            currentNode =currentNode.left;
            _add(addNode, currentNode);
          }
        }  
        if(addNode.value > currentNode.value) {
          if(!currentNode.right) {
            currentNode.right = addNode;
            return;
          } else {
            currentNode = currentNode.right;
            _add(addNode, currentNode);
          }
        }
      }
    }
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

const SearchTree = new BinarySearchTree();
SearchTree.add(2);
SearchTree.add(5);
SearchTree.add(1);
// SearchTree.add(3);
// SearchTree.add(4);
console.log(SearchTree)
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