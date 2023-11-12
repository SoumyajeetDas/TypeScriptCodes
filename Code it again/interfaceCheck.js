"use strict";
exports.__esModule = true;
var user = {
    _id: "1",
    name: "Soumyajeet",
    email: "@outloook",
    userId: 2,
    startTrial: function () {
        return "Hello";
    },
    getCoupon: function (c, v) {
        return c;
    }
};
var adminuser = {
    _id: "1",
    name: "Soumyajeet",
    email: "@outloook",
    userId: 2,
    role: "Learner",
    startTrial: function () {
        return "Hello";
    },
    getCoupon: function (c, v) {
        return c;
    }
};
console.log(user.getCoupon("1st Coupon", 3));
console.log(adminuser.startTrial());
