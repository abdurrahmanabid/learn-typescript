"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    class Dog {
        constructor(name) {
            this.name = name;
        }
    }
    const dog = new Dog('Tom');
    // console.log(dog.name); 
    class DogProperties extends Dog {
        constructor(age, name) {
            super(name);
            this.age = age;
        }
        full() {
            console.log(this.name, this.age);
        }
    }
    let g = new DogProperties(123, "Tom");
    g.full();
};
