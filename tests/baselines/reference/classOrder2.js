//// [classOrder2.ts]

class A extends B {

  foo() { this.bar(); }

}

class B {

  bar() { }

}


var a = new A();

a.foo();



//// [classOrder2.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.foo = function () { this.bar(); };
    return A;
}(B));
var B = (function () {
    function B() {
    }
    B.prototype.bar = function () { };
    return B;
}());
var a = new A();
a.foo();
