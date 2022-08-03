// 'use strict';


// strict mode: chế độ nghiêm ngặt. Bắt các lỗi dó sơ suất, không mong muốn
// *** Cách sử dụng strict mode
// - Thêm "use strict" vào đầu file js.
// - Thêm "use strict" vào đầu thẻ <script></script>.
// - Thêm "use strict" vào đầu phạm vi hàm.

// *** Tác dụng của strict mode:

// - Khi không có từ khoá khai báo biến:
fullName = 'Quach Van Bach'
function ageFunc() {
    age = 27;
}
ageFunc();
console.log(fullName);
console.log(age);

// - Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false.
// 2 cách khai báo thuộc tính writable: false
// Cách 1:
const student = Object.freeze({
    fullName: 'Quach Van Bach'
})

student.fullName = "Quach Dai Duy"

console.log(student.fullName);

// Cách 2:
const myCar = {};
Object.defineProperty(myCar, 'nameCar', {
    value: 'BMW',
    writable: true,
})

myCar.nameCar = 'Rollroyce'

console.log(myCar.nameCar);

// - Báo lỗi khi hàm có tham số trùng tên.
function sum(a, a) {
    return a + a
}

console.log(sum(6, 9));

// - Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block.

{
    function course(course) {
        return course = "Javascript"
    }
}


console.log(course());


// - Báo lỗi tên biến, tên hàm trùng với từ khoá "nhạy cảm" của ngôn ngữ.
