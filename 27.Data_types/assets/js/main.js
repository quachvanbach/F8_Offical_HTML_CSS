// Number

console.log("Number:");


var a = 1;
var b = 2;
var c = 3;

console.log(a);
console.log(b);
console.log(c);

// String

var firstName = 'Quach';
var lastName = 'Bach';
var fullName = 'Quach Van Bach';

console.log('');
console.log('String:');
console.log('Họ: ', firstName);
console.log('Tên: ', lastName);
console.log('Họ và Tên: ', fullName);


// Boolean

var isSuccess = 1 < 2;
var isFalse = 1 > 2;

console.log('');
console.log('Boolean:');
console.log('1 < 2 : ', isSuccess);
console.log('1 > 2 : ', isFalse);


// Underfined

var myName;
var myAge;

console.log('');
console.log('Underfined:');
console.log(myName);
console.log(myAge);

// Null

var isNull = null

console.log('');
console.log('Null:');
console.log(isNull)

// Symbol

var id = Symbol('id');
var id2 = Symbol('id');

console.log('');
console.log('Symbol:');
console.log(id);
console.log(id);
console.log(id === id)

// Function

var myFunction = function () {
    console.log('Đây là Function tự định nghĩa. Code trong function này chỉ được thực thi khi ta gọi đến tên function này.')
}

console.log('');
console.log('Function');

myFunction()

// Object

// * Object


var myObject = {
    key: 'value',
    name: 'Bach',
    age: '27',
    myFunction: function () {
    }
}
console.log('');
console.log('*Object: ');


console.log('My Object: ', myObject)


// * Array


var myArray = [
    'Javascript',
    'PHP',
    'Ruby',
]


console.log('');
console.log('*Array: ');

console.log('My Array: ', myArray)