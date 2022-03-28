let name = 'Anna'
let age = 25

let ageField = "age"

let obj = {
    name,
    [ageField]: 28,
    "greet me"(){
        console.log('Hello ' + this.name + ', ' + this.age)
    }
}

console.log(obj[ageField])

obj["greet me"]()