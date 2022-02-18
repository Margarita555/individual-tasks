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
    if (!this.value) {
      this.value = num;
      return;
    }
    if (num < this.value && this.left) {
      this.left.insert(num);
    } else if (num < this.value && this.left === null) {
      this.left = new TreeNode(num);
      return;
    }
    if (num > this.value && this.right) {
      this.right.insert(num);
    } else if (num > this.value && this.right === null) {
      this.right = new TreeNode(num);
      return;
    }
  }

  search(num) {
    if (this.value === null) {
      return null;
    }
    if (this.value === num) {
      return this.value;
    }
    if (num < this.value) {
      return this.left.search(num);
    }
    return this.right.search(num);
  }

  delete(num, current, parent) {
    if ( num < this.value && current){
      parent = current;
      current = current.left;
       this.left.delete(num, current, parent);
    } else if (num < this.value && !current){
      parent = null;
      current = this;
      this.delete(num, current, parent);
    }
   if ( num > this.value && current){
      parent = current;
      current = current.right;
      this.right.delete(num, current, parent);
    } else if (num > this.value && !current){
      parent = null;
      current = this;
      this.delete(num, current, parent);
    }
    else if ( num === this.value){
    if (current.right === null) {
      if (parent === null) {
        this.value = current.left;
      } else {
        if (current.value < parent.value) {
          parent.left = current.left;
        } else if (current.value > parent.value) {
          parent.right = current.left;
        }
      }
    } else if (current.right.left === null) {
      current.right.left = current.left;
      if (parent === null) {
        this.value = current.right;
      } else {
        if (current.value < parent.value) {
          parent.left = current.right;
        } else if (current.value > parent.value) {
          parent.right = current.right;
        }
      }
    } else {
      let leftLast = current.right.left;
      let leftLastParent = current.right;
      while (leftLast.left) {
        leftLastParent = leftLast;
        leftLast = leftLast.left;
      }
      leftLastParent.left = leftLast.right;
      leftLast.left = current.left;
      leftLast.right = current.right;
      if (parent === null) {
        this.value = leftLast;
      } else {
        if (current.value < parent.value) {
          parent.left = leftLast;
        } else if (current.value > parent.value) {
          parent.right = leftLast;
        }
      }
     }
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
          [this[this.indexOf(key)], this[i + 1]] = [
            this[i + 1],
            this[this.indexOf(key)],
          ];
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
  for (let i = 0; i < this.length - 1; i++) {
    let min = i;
    if (typeof this[i] === "number") {
      for (let key of this) {
        if (key > this[i + 1]) {
          min = this.indexOf(key);
          [this[i + 1], this[min]] = [this[min], this[i + 1]];
        }
      }
    } else if (typeof this[i] === "object") {
      for (let key in this[i]) {
        if (this[min][key] > this[i + 1][key]) {
          min = i;
          [this[i + 1], this[min]] = [this[min], this[i + 1]];
        }
      }
    }
  }
  return this;
};
