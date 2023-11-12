"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function check(x) {
    return x;
}
console.log(check([0, 1, 2]));
console.log(check(["Soumya", "Das"]));
function check3(x, y) {
    if (y > 2)
        return x;
    else
        return __spreadArray(__spreadArray([], x, true), x, true);
}
console.log(check3([0, 1, 2], 4));
console.log(check3(["Soumya", "Das"], 1));
var check1 = function (x) {
    return x[2];
};
console.log(check1([0, 1, 2, 3, 4]));
console.log(check1(["Soumya", "Das", 'Khokha', 'Boka']));
var check2 = function (x, y) {
    if (y > 2) {
        return x[1];
    }
    else
        return x[2];
};
console.log(check2([0, 1, 2, 3, 4], 4));
console.log(check2(["Soumya", "Das", 'Khokha', 'Boka'], 1));
function checking(user) {
    return user;
}
console.log(checking({ name: "John", age: 20 }));
