"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    // types
    let n = 23;
    let b = false;
    let s = "Hello";
    let obj = {
        name: "hello",
        age: 23,
        skill: ["mern", "html"],
        address: { street: "123", house: "Howlader" },
    };
    let arr = [123, "q"];
    let arr2 = ["a", "n", "d"];
    // a function to make a sum
    const sum = (a, b) => {
        return a + b;
    };
    console.log(sum(1, 3)); // I can not send any parameter as other to number, cz in the sum function the aurguments are received as number
};
