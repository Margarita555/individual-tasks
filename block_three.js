/* ======================= Task 1 ==========================
 Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению)
 */

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(num) {
    const newNode = {
      number: num,
      left: null,
      right: null,
    }
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
        this.root = replacedNode;
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

    let result = searchRecursion(this.root);
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
