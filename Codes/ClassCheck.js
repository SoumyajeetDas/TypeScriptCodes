var Classes;
(function (Classes) {
    var A = /** @class */ (function () {
        function A(name, value) {
            this.name = name;
            this.value = value;
        }
        A.prototype.greet = function () {
            console.log("This is ".concat(this.name, " with value = ").concat(this.value));
        };
        return A;
    }());
    Classes.A = A;
    ;
})(Classes || (Classes = {}));
var object = new Classes.A('Soumyajeet', 20);
object.greet();
console.log(object.value);
object.value = 2;
