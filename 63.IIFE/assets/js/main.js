// IIFE: Immediately Invoked Function Expression: Function được gọi ngay


// Cách viết: Bắt buộc phải thêm 1 dấu chấm phẩy trước 1 IIFE.
(function () {
    console.log("Immediately Invoked Function Expression")
})(); // ==> bắt buộc phải có 1 dấu chấm phẩy

(() => {
    console.log('Immediately Invoked Function Expression!')
})(); // ==> bắt buộc phải có 1 dấu chấm phẩy

(function (iife) {
    console.log('IIFE là: ' + iife)
})('Immediately Invoked Function Expression.'); // ==> bắt buộc phải có 1 dấu chấm phẩy


// IIFE là 1 hàm "private"
(function myName(name) {
    console.log('my name is: ' + name)
})();
if (typeof myName === 'undefined') {
    console.log('Không thể gọi hàm IIFE bên ngoài phạm vi')
}


// Có thể gọi trong đệ quy:
let i = 0;

(function myFunction() {
    i++;
    console.log(i);
    if (i < 10) {
        myFunction();
    }
})();

// Ví dụ 1 ứng dụng đơn giản sử dụng IIFE

const app = (function () {
    const cars = [];
    return {
        getAll(){
            return cars;
        },
        get(index) {
            return cars[index];
        },
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice[index, 1];
        }

    }
})()
