class A{
    func() {
        console.log("I am the parent class");
    }
}

// class D{
//     funcD(){
//         console.log("I am the second parent");
//     }
// }


class B extends A {
    funcB() {
        console.log("I am the child class B");
    }
}

class C extends A {
    funcC() {
        console.log("I am the child class C");
    }
}

let b = new B();
let c = new C();

b.func();
b.funcB();
c.func();