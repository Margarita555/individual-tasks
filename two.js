Function.prototype.myBind = function (context) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var fn = this;
    var callback = Symbol();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        context[callback] = fn;
        var result = context[callback].apply(context, rest.concat(args));
        delete context[callback];
        return result;
    };
};
Function.prototype.myCall = function (context) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var callback = Symbol();
    context[callback] = this;
    var result = context[callback].apply(context, args);
    delete context[callback];
    return result;
};
// interface Array<T> {
//   myMap<Input, Output>(callback: (arg: Input, i: number) => Output): Output[];
// }
Array.prototype.myMap = function (callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
    }
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result[i] = callback(this[i], i, this);
    }
    return result;
};
Array.prototype.myFilter = function (callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
    }
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
Array.prototype.myFind = function (callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
    }
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};
Array.prototype.myForEach = function (callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
    }
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
Array.prototype.myReduce = function (callback, acc) {
    if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
    }
    var accumulator = acc || 0;
    if (this.length === 0) {
        return accumulator;
    }
    for (var i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};
