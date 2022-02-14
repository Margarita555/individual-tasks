/* ======================= Task 1 ==========================
 Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению)
 */
class Node {
  constructor(num) {
    this.number = num;
    this.left = null;
    this.right = null;
    this.parent = null;
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
          currentNode.left.parent = currentNode;
        }
      } else {
        if (currentNode.right) {
          insertRecursion(currentNode.right);
        } else {
          currentNode.right = newNode;
          currentNode.right.parent = currentNode;
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

    function deleteNoChildNode(current) {
      if (!current.parent) {
        this.root = null;
      }
      if (current.parent.left === current) {
        current.parent.left = null;
      } else {
        current.parent.right = null;
      }
    }

    function deleteOneChildNode(current) {
      let replacedNode = null;
      if (!current.left) {
        replacedNode = current.right;
      } else {
        replacedNode = current.left;
      }
      if (!current.parent) {
        replacedNode.parent = null;
        this.root = replacedNode;
        
      } else if (current.parent.left === current) {
        replacedNode.parent = current.parent;
        current.parent.left = replacedNode;
      } else {
        replacedNode.parent = current.parent;
        current.parent.right = replacedNode;
      }
    }

    // function deleteTwoChildrenNode(current) {
    //   let replacedNode = current.left;
    //   if (replacedNode.right) {
    //     while (replacedNode.right) {
    //       replacedNode = replacedNode.right;
    //     }
    //   }
    //   console.log(replacedNode)
    //   deleteOneChildNode(replacedNode);
    //   if (!current.parent) {
    //     replacedNode.left = current.left;
    //     replacedNode.right = current.right;
    //     replacedNode.parent = null;
    //     this.root = replacedNode;
    //   } else {
    //     if (current.parent.left === current) {
    //       replacedNode.left = current.right;
    //       replacedNode.right = current.right;
    //       replacedNode.parent = current;
    //       current.parent.left = replacedNode;
    //     } else {
    //       replacedNode.left = current.right;
    //       replacedNode.right = current.right;
    //       replacedNode.parent = current;
    //       current.parent.right = replacedNode;
    //     }
    //   }
    // }
    function deleteTwoChildrenNode(current) {
      let replacedNode = null;
      if( current.number < this.root.number){
        replacedNode = current.right;
         if (replacedNode.right) {
        while (replacedNode.right) {
          replacedNode = replacedNode.right;
        }
      }
      } else { 
        replacedNode = current.left;
        if (replacedNode.right) {
          while (replacedNode.right) {
            replacedNode = replacedNode.right;
          }
        }
      }
      
     
      console.log(replacedNode)
      // deleteOneChildNode(replacedNode);
      if (!current.parent) {
        replacedNode.left = current.left;
        replacedNode.right = current.right;
        replacedNode.parent = null;
        this.root = replacedNode;
      } else {
        if (current.parent.left === current) {
          replacedNode.left = current.right;
          replacedNode.right = current.right;
          replacedNode.parent = current;
          current.parent.left = replacedNode;
          // deleteOneChildNode(replacedNode);
        } else {
          replacedNode.left = current.right;
          replacedNode.right = current.right;
          replacedNode.parent = current;
          current.parent.right = replacedNode;
        }
      }
    }  

    let result = searchRecursion(this.root);
    let current = result.current;

    if (!current.left && !current.right) {
      deleteNoChildNode(current);
    } else if (!current.left || !current.right) {
      deleteOneChildNode.call(this, current);
    } else {
      deleteTwoChildrenNode.call(this, current);
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
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      
      if(min !== i) {
         [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  }
  return arr;
}
// console.log(mySort2(ar))

