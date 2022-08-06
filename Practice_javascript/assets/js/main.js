/* 
*** Làm việc với mảng Phần 1:
1. toString
2. join
3. pop
4. push
5.shift
6. unshift
7. splice
8. concat
9. clice
*/

var language1 = [
    'Javascript',
    'PHP',
    'Ruby',
    'NodeJS'
]

var language2 = [
    'Dart',
    'C sharp',
    'C++',
    'Pascal',
]


console.group('toString: Chuyển đổi một mảng thành một chuỗi và trả về kết quả:')
console.log('toString: ', language1.toString()); //==> Javascript,PHP,Ruby,NodeJS
console.groupEnd();
console.log('')


console.group('2. join: Nối tất cả các phần tử của một mảng thành một chuỗi có thể đặt ký tự nối chuỗi')
console.log('join: ', language1.join(' - ')) //==> Javascript-PHP-Ruby-NodeJS
console.groupEnd();
console.log('')


console.group('3. pop: Loại bỏ phần tử cuối cùng của một mảng và trả về phần tử đó. Khi mảng không còn phần từ thì trả về undefined')
console.log('pop: ', language1.pop()) //==> NodeJS
console.log('language1: ', language1) //==> ['Javascript', 'PHP', 'Ruby']
console.groupEnd();
console.log('')


console.group('4. push: Thêm các phần tử mới vào cuối một mảng và trả về độ dài mới.')
console.log('push', language1.push('NodeJS')) //==> 4
console.log('language1: ', language1) //==> ['Javascript', 'PHP', 'Ruby', 'NodeJS']
console.groupEnd();
console.log('')


console.group('5. shift: Loại bỏ phần tử đầu tiên của một mảng và trả về phần tử đó. Khi mảng không còn phần từ thì trả về undefined')
console.log('shift', language1.shift()) //==> Javascript
console.log('language1: ', language1) //==> ['PHP', 'Ruby', 'NodeJS']
console.groupEnd();
console.log('')


console.group('6. unshift: Thêm các phần tử mới vào đầu một mảng và trả về độ dài mới.')
console.log('unshift', language1.unshift('Javascript')) //==> 4
console.log('language1: ', language1) //==> ['Javascript', 'PHP', 'Ruby', 'NodeJS']
console.groupEnd();
console.log('')


console.group('7. splice: Thêm / Xóa các phần tử khỏi một mảng.')

console.group('Xoá: language1.splice(`index`, `số phần tử muốn xoá`)')
language1.splice(2, 2)
console.log('language1: ', language1) //==> ['Javascript', 'PHP']
console.groupEnd();


console.group('Thêm: language1.splice(`index`, 0, `số phần tử muốn thêm`)')
language1.splice(2, 0, 'Ruby', 'NodeJS')
console.log('language1: ', language1) //==> ['Javascript', 'PHP', 'Ruby', 'NodeJS']
console.groupEnd()
console.groupEnd();
console.log('')


console.group('8. concat: Nối các mảng và trả về một mảng với các mảng đã nối')
var language = language1.concat(language2)
console.log(language) //==> ['Javascript', 'PHP', 'Ruby', 'NodeJS', 'Dart', 'C sharp', 'C++', 'Pascal']
console.groupEnd();
console.log('')


console.group('9. slice: Chọn một phần của mảng và trả về mảng mới chứa các phần tử được chọn. dùng copy mảng hoặc phần tử trong mảng.')

console.group('language1.slice(\`vị trí bắt đầu`,`vị trí kết thúc`) ==> vị trí ở đây tính là ở đầu của phần tử')
console.log(language1.slice(1, 3)) //==> ['PHP', 'Ruby']

console.log(language1.slice(0)) //==> ['Javascript', 'PHP', 'Ruby', 'NodeJS']
console.groupEnd()


console.group('vị trí có thể truyền vào giá trị âm.')
console.log(language1.slice(-3, -2)) //==> ['PHP']
console.groupEnd()
console.groupEnd();
console.log('')

/* 
*** Làm việc với mảng Phần 2:
1. forEach()
2. every()
3. some()
4. find()
5. filter()
6. map()
7. reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0,
    },
    {
        id: 2,
        name: 'HTML - CSS',
        coin: 10,
    },
    {
        id: 3,
        name: 'C sharp',
        coin: 100,
    },
    {
        id: 4,
        name: 'C++',
        coin: 10,
    },
    {
        id: 5,
        name: 'PHP',
        coin: 50,
    },
    {
        id: 6,
        name: 'NodeJS',
        coin: 200,
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 8,
        name: 'Pascal',
        coin: 0,
    },
    {
        id: 9,
        name: 'HTML - CSS',
        coin: 10,
    },
]


console.group('forEach(): Duyệt qua từng phần tử trong mảng')
courses.forEach((course, index) => {
    console.log(index, course)
})
console.groupEnd()
console.log('')

console.group('every: Kiểm tra xem tất cả phần tử trong mảng có thoả mãn điều kiện gì đó hay không ==> boolean')
var everyIsFree = courses.every((course) => {
    return course.coin === 0;
})
console.log('Tất cả các khoá học đều là miễn phí: ', everyIsFree)
console.groupEnd()
console.log('')


console.group('some: Kiểm tra xem có bất kỳ phần tử nào trong mảng có thoả mãn điều kiện gì đó hay không')
var someisFree = courses.some((course) => {
    return course.coin === 0
})
console.log('Có ít nhất 1 khoá học là miễn phí: ', someisFree)
console.groupEnd()
console.log('')


console.group('find: Trả về giá trị của phần tử đầu tiên trong mảng thoã mãn điều kiệu')
var findJS = courses.find((course) => {
    return course.name === 'HTML - CSS'
})
console.log(findJS)
console.groupEnd()
console.log('')


console.group('filter:')
var filterJS = courses.filter((course, index) => {
    return course.name = 'HTML - CSS'
})
console.log(filterJS)
console.groupEnd()
console.log('')


console.group('map:')
courses.forEach((course, index) => {

})
console.groupEnd()
console.log('')


console.group('reduce:')
courses.forEach((course, index) => {

})
console.groupEnd()