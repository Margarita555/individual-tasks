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

  search(num) {
    function searchNode(currentNode) {
      if (currentNode === null) {
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
      if (currentNode === null) {
        return null;
      }
      if (currentNode.value === num) {
        return { current: currentNode, parent: parentNode };
      } 
      if (num < currentNode.value) {
        return searchNode(currentNode.left, currentNode);
      } 
      return searchNode(currentNode.right, currentNode);
    }

    function deleteNoChildNode(current, parent) {
      if (!parent) {
        this.value = null;
        return;
      }
      if (parent.left === current) {
        parent.left = null;
        return;
      } 
      if (parent.left === current) {
        parent.right = null;
      }
    }

    function deleteOneChildNode(current, parent) {
      let replacedNode = null;
      if (current.left === null) {
        replacedNode = current.right;
      } else {
        replacedNode = current.left;
      }
      if (!parent) {
        this.value = replacedNode;
        return;
      }
      if (parent.left === current) {
        parent.left = replacedNode;
        return;
      }
      if (parent.right === current){
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
      replacedNode.left = current.left;
      replacedNode.right = current.right;
   
      if (!parent) {
        this.value = replacedNode;
        return;
      }
      if (parent.left === current) {
          parent.left = replacedNode;
          return;
      } 
      if (parent.right === current) {
          parent.right = replacedNode;
      } 
    }
    let result = searchNode(this.value);
    let current = result.current;
    let parent = result.parent;

    if (!current.left && !current.right) {
      deleteNoChildNode.call(this,current, parent);
      return;
    }
    if (!current.left || !current.right) {
      deleteOneChildNode.call(this, current, parent);
      return;
    }
     if (current.left || !current.right) {
      deleteTwoChildrenNode.call(this, current, parent);
    }
  }
}

/* ======================= Task 2 ==========================
 Написать сортировку двумя различными методами (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)
 */
function bubbleSort(row) {
  for (let i = row.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (row[j] > row[j + 1]) {
        let temp = row[j];
        row[j] = row[j + 1];
        row[j + 1] = temp;
      }
    }
  }
  return row;
}

function selectionSort(row) {
  for (let i = 0; i < row.length; i++) {
    let min = i;
    for (let j = i + 1; j < row.length; j++) {
      if (row[j] < row[min]) {
        min = j;
      }

      if (min !== i) {
        [row[i], row[min]] = [row[min], row[i]];
      }
    }
  }
  return row;
}
