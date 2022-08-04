'use strict'

// Call() là 1 method trong Function constructor.

// Ví dụ 1: Gọi hàm với call() method

function random() {
    console.log(Math.random())
}
random.call() // = random()


// Ví dụ 2: Gọi hàm với call() được bind this

const teacher = {
    firstName: "Minh",
    lastName: "Thu",
}


const student = {

    firstName: "Minh",
    lastName: "Thảo",
    getFullName() {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

// Dùng call() truyền đối số là đối tượng bind(). Đối tượng được bind sẽ mượn hàm của đối tượng gọi đến method đó để chạy.

student.getFullName.call(teacher) //==> Minh Thu

// * Trong strict mode vẫn có thí nếu được bind.

this.firstName = 'Quach'
this.lastName = 'Bach'
function showFullName() {
    console.log(`${this.firstName} ${this.lastName}`)
}

// showFullName() //==> Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
showFullName.call(this) //==> Quach Bach


// Ví dụ 3: Thể hiện tính kế thừa trong lập trình hướng đối tượng 

function Animal(name, weight) {
    this.name = name,
        this.weight = weight
}

function Chicken(name, weight, legs) {
    console.log(this)
    Animal.call(this, name, weight);
    this.legs = legs
}

const chicken = new Chicken('ChicKen', 3, 2)
console.log(chicken)


// Mượn hàm (function borrowing) thêm ví dụ với arguments.
// Mượn phương thức của Array, bind this = arguments và chạy trên đối tượng arguments.
function logger() {
    Array.prototype.forEach.call(arguments, number => {
        console.log(number)
    })
}

logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function log2() {
    const arr = Array.prototype.slice.call(arguments); //==> convert arguments to array.
    arr.forEach(number => console.log(number));
}

log2(1, 2, 3, 4, 5, 6, 7, 8)


//  Các cách convert arguments sang array:
function convert() {
    const arr = Array.from(arguments);
    const array = [...arguments];
    console.log(arr)
    console.log(array)
}

convert(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);