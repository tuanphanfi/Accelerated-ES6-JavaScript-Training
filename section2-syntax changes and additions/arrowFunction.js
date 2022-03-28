// setTimeout(() => console.log('Hello'), 1000)

var button = document.querySelector('button')

var fn2 = () => console.log(this)

function fn(){
    console.log(this)
}

button.addEventListener('click', fn2)

// fn and fn2 is huge difference lmao.
// nghien cuu this in javascript