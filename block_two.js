/* ======================= Task 1 ==========================
 Написать свою реализацию функций bind, call
 */
Function.prototype.myBind = function (context, ...rest) {
  let fn = this;
  const callback = Symbol();
  return function (...args) {
    context[callback] = fn;
    const result = context[callback](...rest.concat(args));
    delete context[callback];
    return result;
  };
};

Function.prototype.myCall = function (context, ...args) {
  const callback = Symbol();
  context[callback] = this;
  const result = context[callback](...args);
  delete context[callback];
  return result;
};

/* ======================= Task 2 ==========================
 Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach.
 */
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  if (this === "null") {
    throw new Error("The array is invalid");
  }

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myReduce = function (callback, acc) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  let accumulator = acc || 0;

  if (this.length === 0) {
    return accumulator;
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

class BinaryTree2 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    function insertRecursion(currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          insertRecursion(currentNode.left);
        } else {
          currentNode.left = newNode;
        }
      } else {
        if (currentNode.right) {
          insertRecursion(currentNode.right);
        } else {
          currentNode.right = newNode;
        }
      }
    }
    insertRecursion(this.root);
    // let tree = this.root;

    // while (true) {
    //   if (value < tree.value) {
    //     if (!tree.left) {
    //       tree.left = newNode;
    //       return this;
    //     }
    //     tree = tree.left;
    //   } else {
    //     if (!tree.right) {
    //       tree.right = newNode;
    //       return this;
    //     }
    //     tree = tree.right;
    //   }
    // }
    // return this;
  }

  search(value) {
    function searchRecursion(currentNode) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.value === value) {
        return currentNode;
      } else if (value < currentNode.value) {
        return searchRecursion(currentNode.left);
      } else {
        return searchRecursion(currentNode.right);
      }
    }
    return searchRecursion(this.root);
  }
  // search(value) {
  //   if (!this.root) {
  //     return false;
  //   }
  //   let tree = this.root;

  //   while (tree) {
  //     if (value < tree.value) {
  //       tree = tree.left;
  //     } else if (value > tree.value) {
  //       tree = tree.right;
  //     } else if (tree.value === value) {
  //       return tree;
  //     }
  //   }

  //   return false;
  // }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a Match!
        //Option 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //Find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

// const tree = new BinaryTree2();

// tree.insert(5);
// tree.insert(2);
// tree.insert(3);
// tree.insert(1);
// tree.insert(10);
// tree.insert(12);
// tree.insert(9);
// console.log(tree.search(10));
// tree.lookup(10);
// tree.remove(12);
// tree.remove(9);
// tree.remove(2);
// console.log(tree);

// binaryTree.delete(9);
// binaryTree.delete(2);
// binaryTree.delete(10);
// binaryTree.delete(5);
