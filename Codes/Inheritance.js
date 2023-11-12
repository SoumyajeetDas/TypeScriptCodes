var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var rectangle = /** @class */ (function () {
    function rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    rectangle.prototype.area = function () {
        console.log("Width: ".concat(this.width, " Height: ").concat(this.height));
        return (this.width * this.height);
    };
    rectangle.prototype.rectanglefunction = function () {
        console.log("Hi I am rectangle");
    };
    return rectangle;
}());
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(width) {
        var _this = _super.call(this, width, width) || this;
        // console.log("Super Width : "+super.width);
        _super.prototype.rectanglefunction.call(_this);
        return _this;
    }
    return square;
}(rectangle));
var r = new rectangle(2, 5);
console.log("Area of rectangle is ".concat(r.area()));
var s = new square(2);
console.log("Area of square is ".concat(s.area()));
