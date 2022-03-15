var TreeNode = /** @class */ (function () {
    function TreeNode(num) {
        this.value = num;
        this.left = null;
        this.right = null;
    }
    TreeNode.prototype.insert = function (num) {
        if (!this.value) {
            this.value = num;
            return;
        }
        if (num < this.value && this.left) {
            this.left.insert(num);
        }
        else if (num < this.value && this.left === null) {
            this.left = new TreeNode(num);
            return;
        }
        if (num > this.value && this.right) {
            this.right.insert(num);
        }
        else if (num > this.value && this.right === null) {
            this.right = new TreeNode(num);
            return;
        }
    };
    TreeNode.prototype.search = function (num) {
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
    };
    TreeNode.prototype["delete"] = function (num, currentNode) {
        var current = currentNode || this;
        if (num < current.value) {
            current.left = this["delete"](num, current.left);
            return current;
        }
        else if (num > current.value) {
            current.right = this["delete"](num, current.right);
            return current;
        }
        else {
            if (current.left === null && current.right === null) {
                current = null;
                return;
            }
            if (current.left === null) {
                return current.right;
            }
            if (current.right === null) {
                return current.left;
            }
            var replacedNode = current.right;
            while (replacedNode.left !== null) {
                replacedNode = replacedNode.left;
            }
            current.value = replacedNode.value;
            current.right = this["delete"](replacedNode.value, current.right);
            return current;
        }
    };
    return TreeNode;
}());
Array.prototype.bubbleSort = function (callback) {
    var _a;
    var isFlag = typeof callback !== "function";
    for (var i = this.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if ((callback && callback(this[j], this[j + 1])) ||
                (isFlag && this[j] > this[j + 1])) {
                _a = [this[j + 1], this[j]], this[j] = _a[0], this[j + 1] = _a[1];
            }
        }
    }
    return this;
};
Array.prototype.selectionSort = function (callback) {
    var _a;
    var isFlag = typeof callback !== "function";
    for (var i = 0; i < this.length - 1; i++) {
        var min = i;
        for (var j = 0; j < this.length; j++) {
            if ((callback && callback(this[j], this[i + 1])) ||
                (isFlag && this[j] > this[j + 1])) {
                min = j;
                _a = [this[min], this[i + 1]], this[i + 1] = _a[0], this[min] = _a[1];
            }
        }
    }
    return this;
};
