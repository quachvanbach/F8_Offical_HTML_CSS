// Object constructor: được hiểu như 1 bản thiết kế để xây dụng lên 1 đối tượng.
// cách 1: 
function User(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
} 

// Cách 2: 
/*
var User = function(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
*/


var student1 = new User('Quach Van', 'Bach', 27, 'Thanh ha, Hai Duong')
var student2 = new User('An Thi', 'Kim Anh', 19, 'Dong Hy, Thai Nguyen')
console.log(student1)
console.log(student2)

// Thêm vào các thuộc tính riêng cho đối tượng bằng cách gọi đến đối tượng đó và thêm vào giá trị:
student1['phone-number'] = 0971882842;
student2.email = 'anthikimanh@gmail.com';

console.log(student1.getName());
console.log(student2.getName());