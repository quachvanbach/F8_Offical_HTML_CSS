// Object trong Javascript

var myInfo = {
    'full-name': 'Quach Bach',
    age: 18,
    address: 'Thanh Ha, hai Duong',
}

console.log(myInfo);

// Thêm phần tử sau khi tạo object

myInfo.email = 'bachqv.net@gmail.com';
myInfo['phone-number'] = '0971882842';

// Lấy ra value
console.log(myInfo.address);
console.log(myInfo['phone-number']);
console.log(myInfo.name); /* Trường hợp cặp key, value không tồn tại sẽ trả về giá trị undefined */

// Lấy ra value được lưu bởi biến.
var myKey = 'full-name';
console.log(myInfo[myKey])

// Xoá key-value trong Object
delete myInfo.email;
delete myInfo['phone-number'];

// Với value là 1 function
myInfo.getAddress = function() {
    return this.address
}

// Lấy ra function trong Object
console.log(myInfo.getAddress());