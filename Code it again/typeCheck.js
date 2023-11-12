"use strict";
exports.__esModule = true;
var user = {
    _id: "1",
    email: "@outloook",
    userId: 2,
    startTrial: function () {
        return "Hello";
    },
    getCoupon: function (c, v) {
        return c;
    }
};
console.log(user.getCoupon("1st Coupon", 3));
function upperCase(word) {
    return word.toUpperCase();
}
var modifying = function (func) {
    console.log(func.upperCase("hello"));
};
modifying({ upperCase: upperCase });
