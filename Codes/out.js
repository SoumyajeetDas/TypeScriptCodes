var Mensurations;
(function (Mensurations) {
    Mensurations.student = "Soumyajeet";
    var Quadrilateral = /** @class */ (function () {
        function Quadrilateral(width, height) {
            this.width = width;
            this.height = height;
        }
        Quadrilateral.prototype.area = function () {
            return this.width * this.height;
        };
        return Quadrilateral;
    }());
    Mensurations.Quadrilateral = Quadrilateral;
    Mensurations.obj = {
        Name: "Soumyajeet",
        Age: 20
    };
    Mensurations.arr = [20, 30, 40];
})(Mensurations || (Mensurations = {}));
/// <reference path="./namespacecheck.ts"/>
var obj = new Mensurations.Quadrilateral(2, 5);
console.log(Mensurations.obj.Age);
console.log(Mensurations.student);
Mensurations.arr.forEach(function (n) {
    console.log(n);
});
console.log("Area of rectangle = ".concat(obj.area()));
