/* ======================= Task 1 ==========================
 Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению)
 */
class TreeNode {
  constructor(num) {
    this.value = num;
    this.left = null;
    this.right = null;
  }

  insert(num) {
    const node = new TreeNode(num);
    if (!this.value) {
      this.value = node;
      // delete this.value;
      return;
    }

    function insertNode(currentNode) {
      if (num < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          return;
        }
        insertNode(currentNode.left);
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
          return;
        }
        insertNode(currentNode.right);
      }
    }
    insertNode(this.value);
  }
  //   function insertNode(currentNode) {
  //     if (num < currentNode.value) {
  //       if (currentNode.left) {
  //         insertNode(currentNode.left);
  //       } else {
  //         currentNode.left = node;
  //       }
  //     } else {
  //       if (currentNode.right) {
  //         insertNode(currentNode.right);
  //       } else {
  //         currentNode.right = node;
  //       }
  //     }
  //   }
  //   insertNode(this.value);
  // }

  search(num) {
    function searchNode(currentNode) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.value === num) {
        return currentNode;
      }
      if (num < currentNode.value) {
        return searchNode(currentNode.left);
      }
      return searchNode(currentNode.right);
    }
    return searchNode(this.value);
  }

  delete(num) {
    function searchNode(currentNode, parentNode) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.value === num) {
        return { current: currentNode, parent: parentNode };
      } else if (num < currentNode.value) {
        return searchNode(currentNode.left, currentNode);
      } else {
        return searchNode(currentNode.right, currentNode);
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
        this.value = replacedNode;
      } else if (parent.left === current) {
        parent.left = replacedNode;
      } else {
        parent.right = replacedNode;
      }
    }

    function deleteTwoChildrenNode(current, parent) {
      let replacedNode = current.left;
      let replacedNodeParent = current;
      if (replacedNode.right) {
        while (replacedNode.right) {
          replacedNodeParent = replacedNode;
          replacedNode = replacedNode.right;
        }
      }
      deleteOneChildNode.call(this, replacedNode, replacedNodeParent);
      if (!parent) {
        replacedNode.left = current.left;
        replacedNode.right = current.right;
        this.value = replacedNode;
      } else {
        if (parent.left === current) {
          replacedNode.left = current.left;
          replacedNode.right = current.right;
          parent.left = replacedNode;
        } else {
          replacedNode.left = current.left;
          replacedNode.right = current.right;
          parent.right = replacedNode;
        }
      }
    }
    let result = searchNode(this.value);
    let current = result.current;
    let parent = result.parent;

    if (!current.left && !current.right) {
      deleteNoChildNode(current, parent);
    } else if (!current.left || !current.right) {
      deleteOneChildNode.call(this, current, parent);
    } else {
      deleteTwoChildrenNode.call(this, current, parent);
    }
  }
}
const tree = new TreeNode();
tree.insert(5);
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(12);
tree.insert(9);
console.log(tree.search(10));
// tree.delete(10);
// tree.delete(12);
// tree.delete(9);
// tree.delete(2);
// tree.delete(5);
console.log(tree);
/* ======================= Task 2 ==========================
 Написать сортировку двумя различными методами (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)
 */
function bubbleSort(arr) {
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

function selectionSort(arr) {
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
