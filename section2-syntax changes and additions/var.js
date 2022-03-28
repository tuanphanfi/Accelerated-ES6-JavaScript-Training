// age = 27
// console.log(age)


// var age //ok

// age2 = 27
// console.log(age2)


// let age2 // not ok

// because var is hoisting. everything is declared by var will automatically be rearrange at top. 

console.log('-----testing function')

let age;
function doSmth(){
    age = 27;
}
doSmth();

console.log("age",age)
