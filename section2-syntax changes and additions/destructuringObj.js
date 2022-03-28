let obj = {
    name: 'Max',
    age: 27,
    greet: function () {
        console.log('Hello There!');
    }

};

// these names have to match
let { name, greet:hello} = obj

// console.log(greet())
hello()
// console.log(name)