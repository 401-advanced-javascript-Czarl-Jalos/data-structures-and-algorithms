const { Node } = require('./tree.js');
const { BinaryTree } = require('./tree.js');
const { BinarySearchTree } = require('./tree.js');

describe('Binary Tree tests', () => {
  it('can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();

  })

  it('Can successfully instantiate a tree with a single root node', () => {

    // const Jai = new Node('Jai');
    const tree = new BinarySearchTree();
    tree.add(1);
    expect(tree.root.value).toEqual(1);
  })


  it('Can successfully add a left child and right child to a single root node', () => {
    const Venice = new Node('Venice');
    const Juliet = new Node('Juliet');
    const Joann = new Node('Joann', Venice, Juliet);
    const tree = new BinaryTree(Joann);

    expect(tree.root.right.value).toBe('Juliet');
    expect(tree.root.left.value).toBe('Venice');
  })


  it('Can successfully return a collection from a preorder traversal', () => {

    const SearchTree = new BinarySearchTree();

    SearchTree.add(10);
    SearchTree.add(11);
    SearchTree.add(9);
    SearchTree.add(12);
    expect(SearchTree.preOrder(SearchTree.root)).toEqual([ 10, 9, 11, 12 ]);
  })

  it('Can successfully return a collection from an inorder traversal', () => {
    const SearchTree = new BinarySearchTree();

    SearchTree.add(10);
    SearchTree.add(11);
    SearchTree.add(9);
    SearchTree.add(12);
    expect(SearchTree.inOrder(SearchTree.root)).toEqual([ 9, 10, 11, 12 ]);
  })


  it('Can successfully return a collection from a postorder traversal', () => {
    const SearchTree = new BinarySearchTree();

    SearchTree.add(10);
    SearchTree.add(11);
    SearchTree.add(9);
    SearchTree.add(12);
    expect(SearchTree.postOrder(SearchTree.root)).toEqual([ 9, 12, 11, 10 ]);
  })

  it('Can successfully return a the maximun value in stored in the tree', () => {
    const SearchTree = new BinarySearchTree();

    SearchTree.add(10);
    SearchTree.add(11);
    SearchTree.add(9);
    SearchTree.add(12);
    expect(SearchTree.findMaximumValue(SearchTree.root)).toEqual(12);  
  })
});