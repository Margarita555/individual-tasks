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

/* ======================= Task 2 ==========================
 Написать сортировку двумя различными методами (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)
 */
 Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    if (typeof this[i] === "number") {
      for (let key of this) {
        if (key > this[i + 1]) {
          [this[this.indexOf(key)], this[i + 1]] = [this[i + 1], this[this.indexOf(key)]];
        }
      }
    } else if (typeof this[i] === "object") {
      for (let key in this[i]) {
        if (this[i][key] > this[i + 1][key]) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }
  }
  return this;
};

Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length-1; i++) {
    let min = i;
    if (typeof this[i] === "number") {
      for (let key of this) {  
        if (key > this[i+1]) {
        min = this.indexOf(key);
        [this[i+1], this[min]] = [this[min], this[i+1]];
      }
    }
  } else if (typeof this[i] === "object") {
    for (let key in this[i]) {
      if (this[min][key] > this[i+1][key]) {
        min = i;
        [this[i+1], this[min]] = [this[min], this[i+1]];
      }
    }
  }
 }
  return this;
};
