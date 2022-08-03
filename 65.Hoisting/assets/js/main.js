// Hoisting: Đưa khai báo lên đầu phạm vi

// Với từ khoá var:

console.log(age) //==> undefined

var age = 16 //==> Với từ khoá var. Khai báo sẽ hoisted lên đầu. Nhưng vì biến age tại dòng số 5 chưa được gán giá trị nên lệnh console.log(age) có kết quả là undefined.

// Với declaration function:

console.log(sum(6, 9)); //==> 15

function sum(a, b) {
    return a + b
} // ==> Với function ta có thể khai gọi trước mà khai báo sau mà không làm thay đổi kết quả của function.


// Với từ khoá let, const:

console.log(fullName) // Uncaught ReferenceError: Cannot access 'fullName' before initialization.
let fullName = "Quach Van Bach" //==> Với từ khoá let, const khi được hoisted nhưng không được tạo giá trị, và được đưa vào vùng Temporal Dead Zone. Nên ta chỉ sử dụng được sau khi đã khai báo.


const counter = makeCounter();

console.log(counter());

function makeCounter() {
    let counter = 0;

    return increase

    function increase() {
        return ++counter; //==> Function được hoisted lên đầu phạm vi nên có thể chạy sau khi return function đó
    }
}