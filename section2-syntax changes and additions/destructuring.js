let numbers = [1,2,3];

let [a,b,c,d] = numbers

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d) //undefined
// console.log(numbers)

let [e,...f] = numbers
// console.log(e)
// console.log(f) //[2,3]



// let numbers2 = [1,2,"3"];
// let [aa,...bb] = numbers2

// console.log(typeof bb[1])
// console.log(bb[1])

// console.log(bb)



let numbers3 = [1,2,"3"];
let [aaa ='Default', bbb, ccc,ddd=1] = numbers3

let [test1, ...test] = numbers3
// console.log(ddd)
// console.log("test",test)

let aaaa = 5;
let bbbb = 15;

[bbbb,aaaa] = [aaaa, bbbb];
// console.log(aaaaa)
// console.log(bbbbb)

let numbers4 = [1,2,3]

let [aaaaa,,ccccc] = numbers4;
console.log(aaaaa)
console.log(ccccc)

console.log(numbers4)