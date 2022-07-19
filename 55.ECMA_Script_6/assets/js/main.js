
// *** Let, const ***
// var / let, const:
//- scope: phạm vi truy cập. Trong 1 khối code:
{
    var courses = 'Javascript'
    let courses1 = 'PHP'
    const courses2 = 'NodeJS'
}
// console.log(courses);   // 'Javascript'
// console.log(courses1); // courses1 is not defined
// console.log(courses2); // courses2 is not defined

//- hosting: đưa lên đầu. đặt biến với var thì ta có thể truyền giá trị xong mới đặt biến. Ví dụ
// a = 1;
// var a;
// console.log(a);

// Với let và const se xảy ra lỗi:
// b = 2;
// let b;
// console.log(b);

// c = 3;
//const c; xảy ra lỗi
//console.log(c)

// const / var, let: assignment: với var và let thì ta có thể gán lại giá trị cho biến 1 hoặc nhều lần. Còn với const thì không thể gán lại giá trị cho biến lần thứ 2 trở đi
// var x = 1;
// x = 10;
// console.log(x)

// let y = 10;
// y = 100;
// console.log(y)

// const z = 100;
// z = 1000;
// console.log(z) //Assignment to constant variable.

/*** Code thuần: var.
 * Babel: const, let.
 * -Khi định nghĩa biến không cần gán lại giá trị thì dùng const.
 * -Khi định nghĩa biến cần gán lại giá trị thì dùng let
 */

/**********************************************************/

// *** Template literals ***
const theCourse = 'Javascript';
const description = 'Course name';
console.log(`${description} ${theCourse}`);

// *** Multi-line String ***
const line = `Line 1
Line 2
Line 3
Line 4`
console.log(line)

/**********************************************************/

// *** Arrow function ***
// Với các hàm cần xử lý bằng khối code:
const log = (log) => {
    console.log(log)
}
log('Message...');

// Với các hàm đơn giản, trả về ngay return:
const sum = (a, b) => a + b;
console.log(sum(1, 2))

// Return ngay 1 object:
const numbers = (a, b) => ({ a: a, b: b });
console.log(numbers(3, 4));

// Với các hàm có 1 tham số truyền vào:
const fullName = name => console.log(name);
fullName('Quach Van Bach')

// Đặc tính của Arrow function:
const course = {
    name: 'Javascript',
    getName: () => {
        return this; // ==> undefined. Arrow function không có context. (this)
    }

};
console.log(course.name);

// Arrow function không thể làm constructor.
// const Course = (name, price) => {
//     this.name = name;
//     this.price = price;
// }
// const jsCourse  = new Course('Javascript', 1000)
// console.log(jsCourse); // Course is not a constructor


// Classes:
// Cách viết thông thường:
// function Course(name, price) {
//     this.name = name;
//     this.price = price;
//     this.getName = function () {
//         return this.name;
//     };
//     getName() {
//         return this.name;
//     }
// }

// Sử dụng class để tạo constructor:
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.getName = function () {
            return this.name;
        };
    };
    getName() {
        return this.name;
    }
}

var phpCourse = new Course('PHP', 1000);
var jsCourse = new Course('Javascript', 1000);
console.log(phpCourse);
console.log(jsCourse);

/****************************************************/
// ***Default parameter values ***
function myNameIs(name = 'Quach Van Bach') {
    console.log(name);
}
myNameIs()
myNameIs('Quach Dai Ka')

// *** Enhanced object literals ***
/*
- Định nghĩa key: value cho object.
- Định nghĩa method cho object. 
- Định nghĩa key cho object dưới dạng biến.
*/

var name = 'Javascript';
var price = 1000;

var course1 = {
    name,                   //name: name
    price,                  //price: price ==>  Định nghĩa key: value cho object
    getName() {                                                  //     getName: function() {
        return name;        // ==> Định nghĩa method cho object.        return name;
    }                                                            //     }
}
console.log(course1);

var fieldName = 'name'
var fieldPrice = 'price'

const course2 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000         // ==> Định nghĩa key cho object dưới dạng biến.
}

console.log(course2);

/****************************************************/

// *** Distructuring: phân rã, lấy ra phần tử còn lại (...) ***
// Áp dụng với mảng:
var array = ['Javascript', 'PHP', 'Ruby']

var [a, b, c] = array;

var [a, ...rest] = array // ==> toán tử rest(...). Lấy ra các phần tử còn lại. Sử dụng khi kết hợp với distructuring

console.log(a, b, c);
console.log(rest)


// Áp dụng với Object:
var myCourse = {
    name: 'Javascript',
    price: 1000,
    url: 'http://link-khoa-hoc.com'
}

var { name, price, url } = myCourse;
var { name, ...rest } = myCourse;

console.log(name, price, url);
console.log(rest);

// Trường hợp đặc biệt: 2 object lồng nhau:
var courseInfo = {
    name: 'Javascript',
    price: 1000,
    url: 'http://link-khoa-hoc.com',
    user: {
        name: 'Quach Van Bach',
        class: 'Front-end'
    }
}

var { name: courseName, user: { name: userName }, descriptions = 'Default description' } = courseInfo;

console.log(courseName);
console.log(userName);
console.log(descriptions);

// Áp dụng với tham số trong hàm:
function newCourse({ name, price, ...rest }) {
    console.log(name);
    console.log(price);
    console.log(rest);
}
newCourse({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
})

// Tạo 1 function giống với console.log()
function logger(...params) {
    console.log(params);
}
console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));



/****************************************************/


// *** Spread: toán tử dải (...) ***

// Áp dụng nối mảng.
var array1 = ['Javascript', 'Ruby', 'PHP']
var array2 = ['ReactJS', 'Dart']

var array3 = [...array1, ...array2];
console.log(array3);

// Áp dụng nối object.
var obj1 = {
    name: 'Javascript'
}
var obj2 = {
    price: 1000
}

var obj3 = { ...obj1, ...obj2 }
console.log(obj3);

// Áp dụng với các đối số được truyền vào trong hàm:
var arr = ['Javascript', 'PHP', 'Ruby']

function connArr(...rest) {   // ==> trong tham số là rest
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
connArr(...arr);             // ==> trong đối số là spread

/****************************************************/

// *** Tagged template literals ***
// Áp dụng để highlight để css:

function myInfo([first, ...string], ...value) {
    return value.reduce((accument, currentValue) => [...accument, `<span>${currentValue}</span>`, string.shift()], [first])//.join('')
}

var myName = 'Quach Van Bach'
var myAddress = 'Hai Duong'

const html = myInfo`Toi ten ${myName}, toi den tu ${myAddress}!`
console.log(html)


/****************************************************/

// *** Optional chaining : Kiểm tra xem 1 key nào đó có tồn tại hay không.
// ** Cú pháp:
// * obj.value?.property
// * obj.value?.[expression]
// * obj.array?.[index]
// * obj.function.?(argument)
// *

// Example 1

const object = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat1: {
            name: 'Dinah 2',
            cat2: {
                name: 'Dinah 3',
                cat3: {
                    name: 'Dinah 4',
                }
            }
        }
    }
}

if (object?.cat?.cat1?.cat2?.cat3) {
    console.log(object.cat.cat1.cat2.cat3.name)
}


// Example 2

var myObject = {
    getName(value) {
        // console.log(value)
    }
}

myObject.getName?.(123)
