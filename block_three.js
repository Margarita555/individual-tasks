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
   if(num < this.value && this.left){
     this.left.insert(num);
   } else if (num < this.value && this.left === null){
     this.left = new TreeNode(num);
     return;
   }
   if (num > this.value && this.right){
    this.right.insert(num);
   } else if (num > this.value && this.right === null){
    this.right = new TreeNode(num);
    return;
   }
  }

  search(num){
           if (this.value === null) {
          return null;
        }
        if (this.value === num) {
          return this.value;
        } 
        if(num < this.value){
          return this.left.search(num);
        }
        return this.right.search(num);
  }

  // delete(num) {
  //   let current = this;
  //   let parent = null;
  //   // console.log(current)
  //   while(current) {
  //     if (num < current.value){
  //       parent = current;
  //       current = current.left
  //     } else if (num > current.value){
  //       parent = current;
  //       current = current.right;
  //     } else if (num === current.value){
  //       // console.log(current.value)
  //       if (current.right === null) {
  //         if (parent === null) {
  //           this.value = current.left;
  //         } else {
  //           //if parent > current value, make current left child a child of parent
  //           if (current.value < parent.value) {
  //             parent.left = current.left;

  //             //if parent < current value, make left child a right child of parent
  //           } else if (current.value > parent.value) {
  //             parent.right = current.left;
  //           }
  //         }
  //         //2: Right child which doesnt have a left child
  //       } else if (current.right.left === null) {
  //         current.right.left = current.left;
  //         if (parent === null) {
  //           this.value = current.right;
  //         } else {
  //           //if parent > current, make right child of the left the parent
  //           if (current.value < parent.value) {
  //             parent.left = current.right;

  //             //if parent < current, make right child a right child of the parent
  //           } else if (current.value > parent.value) {
  //             parent.right = current.right;
  //           }
  //         }

  //         //3: Right child that has a left child
  //       } else {
  //         //Find the Right child's left most child
  //         let leftLast = current.right.left;
  //         let leftLastParent = current.right;
  //         while (leftLast.left) {
  //           leftLastParent = leftLast;
  //           leftLast = leftLast.left;
  //         }
  //         //Parent's left subtree is now leftmost's right subtree
  //         leftLastParent.left = leftLast.right;
  //         leftLast.left = current.left;
  //         leftLast.right = current.right;

  //         if (parent === null) {
  //           this.value = leftLast;
  //         } else {
  //           if (current.value < parent.value) {
  //             parent.left = leftLast;
  //           } else if (current.value > parent.value) {
  //             parent.right = leftLast;
  //           }
  //         }
  //       }
  //       return true;
  //     }
  //   }
  // }
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
// tree.delete(10);
// tree.delete(12);
// tree.delete(9);
// tree.delete(3);
// tree.delete(2);
// tree.delete(5);
console.log(tree);
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
