## Aug 27<sup>th</sup>
## Trees

## Common Terminology

|    **Term**    | **Definition**  |
| -------------- | ----------- |
| node           | individual item/data that makes up the data structure. **has 3 things**: left child, right child, value (or "data", something that has its payload) |
| root           | the first/top Node in the tree |
| left child     | node that is positioned to the left of a root or node  |
| right child    | node that is positioned to the right of a root or node |
| edge           | the link between a parent and child node |
| leaf           | node that does not contain any children |
| height         | determined by the number of edges from the root of the bottommost node |

## Traversals
- *Depth First*
  - prioritizes going through the depth (which is the height) of tree first
  - **pre-order**: root > left > right
  - **in-order**: left > root > right
  - **Post-order**: left > right > root
  - use recursion, rely on **call stack**
    - when we complete a function call, we pop it off the stack and are able to continue execution through previous function call
  - biggest different between these three is **when you are looking at the root node**
- *Breadth First*
  - goes through each level node by node
  - use a **queue** (instead of recursion with call stack)

## Binary Trees
- Restrict the number of children to two (left and right)
- No sorting order, nodes can be added wherever there is space (aka not two children yet)
  - one strategy is to fill all child nodes top down (use breadth traversal to find first node that doesnt have 2 chid nodes and insert)
  - **Big O time** is O(n)
  - **Big O space** is O(w) where w is width of tree
  - "Perfect" binary tree has max width of **2^(h-1)** where h is height of tree, and height is **log n** where n is number of nodes

## Binary Search Trees
- You will never find a value on the left that is bigger than its parent
  - any value on the right will be bigger than its level match on the left
- Tree with structure, values smaller than root are placed to the left and larger than root to the right
- Can search by comparing node youre searching for against root of tree/sub-tree
  - smaller? traverse left
  - larger? traverse right
  - use **while** loop
  - **Big O time** is O(height)
  - Perfect tree has height log(n), unbalanced has height n
  - **Big O space** is O(1), not allocating addtl space while searching

### Resources:
- https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html## Aug 27<sup>th</sup>
## Trees

## Common Terminology

|    **Term**    | **Definition**  |
| -------------- | ----------- |
| node           | individual item/data that makes up the data structure. **has 3 things**: left child, right child, value (or "data", something that has its payload) |
| root           | the first/top Node in the tree |
| left child     | node that is positioned to the left of a root or node  |
| right child    | node that is positioned to the right of a root or node |
| edge           | the link between a parent and child node |
| leaf           | node that does not contain any children |
| height         | determined by the number of edges from the root of the bottommost node |

## Traversals
- *Depth First*
  - prioritizes going through the depth (which is the height) of tree first
  - **pre-order**: root > left > right
  - **in-order**: left > root > right
  - **Post-order**: left > right > root
  - use recursion, rely on **call stack**
    - when we complete a function call, we pop it off the stack and are able to continue execution through previous function call
  - biggest different between these three is **when you are looking at the root node**
- *Breadth First*
  - goes through each level node by node
  - use a **queue** (instead of recursion with call stack)

## Binary Trees
- Restrict the number of children to two (left and right)
- No sorting order, nodes can be added wherever there is space (aka not two children yet)
  - one strategy is to fill all child nodes top down (use breadth traversal to find first node that doesnt have 2 chid nodes and insert)
  - **Big O time** is O(n)
  - **Big O space** is O(w) where w is width of tree
  - "Perfect" binary tree has max width of **2^(h-1)** where h is height of tree, and height is **log n** where n is number of nodes

## Binary Search Trees
- You will never find a value on the left that is bigger than its parent
  - any value on the right will be bigger than its level match on the left
- Tree with structure, values smaller than root are placed to the left and larger than root to the right
- Can search by comparing node youre searching for against root of tree/sub-tree
  - smaller? traverse left
  - larger? traverse right
  - use **while** loop
  - **Big O time** is O(height)
  - Perfect tree has height log(n), unbalanced has height n
  - **Big O space** is O(1), not allocating addtl space while searching

### Resources:
- https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html