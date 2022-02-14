/* ======================= Task 1 ==========================
 Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению)
 */
class Node {
  constructor(num) {
    this.number = num;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(num) {
    const newNode = new Node(num);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    function insertRecursion(currentNode) {
      if (num < currentNode.number) {
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
  }

  delete(num) {
    function searchRecursion(currentNode, parentNode) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.number === num) {
        return { current: currentNode, parent: parentNode };
      } else if (num < currentNode.number) {
        return searchRecursion(currentNode.left, currentNode);
      } else {
        return searchRecursion(currentNode.right, currentNode);
      }
    }

    function deleteNoChildNode(current, parent) {
      if (!parent) {
        this.root = null;
      }
      if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    function deleteOneChildNode(current, parent) {
      let replacedNode = null;
      if (!current.left) {
        replacedNode = current.right;
      } else {
        replacedNode = current.left;
      }
      if (!parent) {
        this.root = replacedNode;
      } else if (parent.left === current) {
        parent.left = replacedNode;
      } else {
        parent.right = replacedNode;
      }
    }

    function deleteTwoChildrenNode(current, parent) {
      console.log("d");
      let replacedNode = current.left;
      let replacedNodeParent = current;
      console.log(replacedNode);
      if (replacedNode.right) {
        while (replacedNode.right) {
          replacedNodeParent = replacedNode;
          replacedNode = replacedNode.right;
        }
      }
      // console.log(replacedNode);
      deleteOneChildNode.call(this, replacedNode, replacedNodeParent);
      if (!parent) {
        // console.log("w");
        replacedNode.left = current.left;
        replacedNode.right = current.right;

        this.root = replacedNode;
      } else {
        console.log("y");
        if (parent.left === current) {
          // replacedNode.left = current.right;
          replacedNode.right = current.right;

          parent.left = replacedNode;
        } else {
          console.log("s");
          console.log(parent.right);

          // replacedNode.left = current.right;
          replacedNode.right = current.right;
          parent.right = replacedNode;
        }
      }
    }

    let result = searchRecursion(this.root);
    let current = result.current;
    let parent = result.parent;
    // console.log(current);
    // console.log(parent);

    if (!current.left && !current.right) {
      // console.log("a");
      deleteNoChildNode(current, parent);
    } else if (!current.left || !current.right) {
      // console.log("b");
      deleteOneChildNode.call(this, current, parent);
    } else {
      console.log("c");
      deleteTwoChildrenNode.call(this, current, parent);
    }
  }

  search(num) {
    function searchRecursion(currentNode) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.number === num) {
        return currentNode;
      } else if (num < currentNode.number) {
        return searchRecursion(currentNode.left);
      } else {
        return searchRecursion(currentNode.right);
      }
    }
    return searchRecursion(this.root);
  }
}

let binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(1);
binaryTree.insert(10);
binaryTree.insert(12);
binaryTree.insert(9);
console.log(binaryTree);
// console.log(binaryTree.search(12));
// binaryTree.delete(9);
// binaryTree.delete(12);
binaryTree.delete(2);
// binaryTree.delete(10);
// binaryTree.delete(5);

/* ======================= Task 2 ==========================
 Написать сортировку двумя различными методами (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)
 */
// let arr = [4, 1, 22, 34, 7, 5, 88, 6, 9, 3, 12, 2];

function mySort(array) {
  let arr = array;

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(mySort(arr));
// let ar = [4, 1, 22, 34, 7, 5, 88, 6, 9, 3, 12, 2];
function mySort2(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }

      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  }
  return arr;
}
// console.log(mySort2(ar))
