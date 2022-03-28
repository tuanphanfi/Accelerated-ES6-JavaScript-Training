class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello ${this.name} and I am ${this.age}`)
    }
}


let person = new Person('Max');

// person.greet()


class Max extends Person {
    constructor(age) {
        super('Max'); //it calls parent constructor
        this.age = age
    }

    greet() {
        console.log('Hello')
    }

    greetTwice() {
        super.greet()
        super.greet()
    }

}

let max = new Max(27)
// inheritance

// max.greet()
max.greetTwice()
// max.greet()