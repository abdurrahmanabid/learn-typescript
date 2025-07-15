"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    // this keyword in a object
    const obj = {
        name: "Faruk Ahmed",
        age: 32,
        person: function () {
            console.log(this.name, this.age);
        },
    };
    obj.person();
    ////// In class
    class A {
        constructor(a) {
            this.xyz = 20;
            this.a = a;
            let xyz = 40;
            console.log(xyz); //40
            console.log(this.xyz); //20
            console.log(a); // 29
        }
    }
    const o = new A(29);
    // scope 
    {
        let x = 20;
    }
    // console.log("x = ",x);      // can not access the x , cz it son in the global scope its in block scope
    {
        foo(); // log foo
        function foo() {
            console.log("foo");
        }
    }
    // console.log(foo());      can not get the foo() :::: Block scope
};
