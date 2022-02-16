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

    let currentNode = this.value;

    while (currentNode) {
    if (num < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
        return;
      }
      currentNode = currentNode.left;
    } else {
      if (currentNode.right === null) {
        currentNode.right = node;
        return;
      }
      currentNode = currentNode.right;
    }
  }
 }

 search(num){
      if (!this.value) {
      return false;
    }
    let varifiableValue = this.value;

    while(varifiableValue){
      if (num < varifiableValue.value){
        varifiableValue = varifiableValue.left;
      } else if (num > varifiableValue.value){
        varifiableValue = varifiableValue.right;
      } else if (varifiableValue.value === num){
        return varifiableValue;
      }
    }
 }
  
  delete(num) {
    let searchNode = {current: this.value, parent: null}
    while(searchNode.current.value){
      if (num < searchNode.current.value){
        searchNode.parent = searchNode.current;
        searchNode.current = searchNode.current.left;
      } else if (num > searchNode.current.value){
        searchNode.parent = searchNode.current;
        searchNode.current = searchNode.current.right;
      } else if (searchNode.current.value === num){
        break;
      }
    }
 
    let current = searchNode.current;
    let parent = searchNode.parent;
 
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

    function deleteNoChildNode(current, parent) {
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
        return
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
