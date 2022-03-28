class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}

let person = new Person('Max');

person.greet()

// inheritance