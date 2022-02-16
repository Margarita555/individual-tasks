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
    this._insertNode(this.value, node);
  }

  _insertNode(parent, node) {
    if (node.value < parent.value && parent.left === null) {
      parent.left = node;
      return;
    }
    if (node.value < parent.value) {
      this._insertNode(parent.left, node);
    }
    if (node.value > parent.value && parent.right === null) {
      parent.right = node;
      return;
    }
    if (node.value > parent.value) {
      this._insertNode(parent.right, node);
    }
  }

  search(num) {
    if (!this.value) {
      return false;
    }
    let value = this.value;

    while (value) {
      if (num < value.value) {
        value = value.left;
      } else if (num > value.value) {
        value = value.right;
      } else if (value.value === num) {
        return value;
      }
    }
  }

  delete(num) {
    let node = { current: this.value, parent: null };
    while (node.current.value) {
      if (num < node.current.value) {
        node.parent = node.current;
        node.current = node.current.left;
      } else if (num > node.current.value) {
        node.parent = node.current;
        node.current = node.current.right;
      } else if (node.current.value === num) {
        break;
      }
    }

    let current = node.current;
    let parent = node.parent;

    if (!current.left && !current.right) {
      this._deleteNoChildNode.call(this, current, parent);
      return;
    }
    if (!current.left || !current.right) {
      this._deleteOneChildNode.call(this, current, parent);
      return;
    }
    if (current.left || !current.right) {
      this._deleteTwoChildrenNode.call(this, current, parent);
    }
  }

  _deleteNoChildNode(current, parent) {
    if (!parent) {
      this.value = null;
      return;
    }
    if (parent.left === current) {
      parent.left = null;
      return;
    }
    if (parent.right === current) {
      parent.right = null;
      return;
    }
  }

  _deleteOneChildNode(current, parent) {
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
    if (parent.right === current) {
      parent.right = replacedNode;
    }
  }

  _deleteTwoChildrenNode(current, parent) {
    let replacedNode = current.left;
    let replacedNodeParent = current;
    if (replacedNode.right) {
      while (replacedNode.right) {
        replacedNodeParent = replacedNode;
        replacedNode = replacedNode.right;
      }
    }
    this._deleteOneChildNode.call(this, replacedNode, replacedNodeParent);
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
}
const tree = new TreeNode();
tree.insert(5);
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(12);
tree.insert(9);
// console.log(tree.search(3));
tree.delete(10);
// tree.delete(12);
// tree.delete(9);
// tree.delete(3);
tree.delete(2);
// tree.delete(5);
console.log(tree);
/* ======================= Task 2 ==========================
 Написать сортировку двумя различными методами (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)
 */
// function bubbleSort(row) {
//   for (let i = row.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (row[j] > row[j + 1]) {
//         let temp = row[j];
//         row[j] = row[j + 1];
//         row[j + 1] = temp;
//       }
//     }
//   }
//   return row;
// }

function bubbleSort(row) {
  for (let i = 0; i < row.length - 1; i++) {
    if (typeof row[i] === "number") {
      for (let key of row) {
        if (row[i] > row[i + 1]) {
          [row[i], row[i + 1]] = [row[i + 1], row[i]];
        }
      }
    } else if (typeof row[i] === "object") {
      for (let key in row[i]) {
        if (row[i][key] > row[i + 1][key]) {
          [row[i], row[i + 1]] = [row[i + 1], row[i]];
        }
      }
    }
  }
  return row;
}

// function selectionSort(row) {
//   for (let i = 0; i < row.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < row.length; j++) {
//       if (row[j] < row[min]) {
//         min = j;
//       }
//       if (min !== i) {
//         [row[i], row[min]] = [row[min], row[i]];
//       }
//     }
//   }
//   return row;
// }
function selectionSort(row) {
  console.log(row);
  for (let i = 0; i < row.length; i++) {
    let min = 0;
    for (let key in row[i]) {
      // console.log(row[i][key]);
      // console.log(row[min][key], i);
      if (row[i][key] < row[min][key]) {
        console.log("g");
        min = i;
        console.log(row[i], row[min], i);
        [row[i], row[min]] = [row[min], row[i]];
      }
      // if (min !== i) {

      // }
    }
  }
  return row;
}
let arr = [4, 1, 22, 34, 7, 5, 88, 6, 9, 3, 12, 2];
let a = [{ a: 10 }, { a: -1 }, { a: 7 }];
// console.log(bubbleSort(a));
// console.log(bubbleSort(arr));

// console.log(selectionSort(arr));
console.log(selectionSort(a));
