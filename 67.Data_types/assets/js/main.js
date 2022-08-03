// Values type & Reference types: Kiểu tham trị và kiểu tham chiếu

/*
*** Values type ( Primary data types)
- String
- Number
- Boolean
- BigInt
- Symbol
- undefined
- null
*/

/*
*** Reference type ( Non-primary data types)
- Object
- Array
- Function
*/


// *** Data type with functions
// - Value types: Kiểu tham trị: Với kiểu tham trị. Giá trị sẽ được lưu trực tiếp vào ô nhớ và gán ngược lại cho biến.
let a = 1;
let b = a;

a = 2;
console.log(b); //==> b = 1

// - Reference types: Kiểu tham chiếu: Với kiểu tham chiếu. Giá trị sẽ được lưu vào ô nhớ và sau đó trả lại địa chỉ của ô nhớ đó gán ngược lại cho biến.
let x = { car: 'BMW' }
let y = x

x.car = 'Rollroyce'
console.log(y) //==> y = {car: 'Rollroyce'}

// Với trường hợp gán object mới cho biến thì sẽ tạo ra 1 vùng nhớ mới và lưu giá trị tại thời điểm mới.
x = {
    car: 'Rollroyce',
    name: 'Phantom VIII'
}

console.log(x) //==> x = {car: 'Rollroyce', name: 'Phantom VIII'}

// Chú ý: Với mỗi 1 object, array hoặc function được tạo ra thì sẽ có 1 vùng nhớ mới được tạo ra

