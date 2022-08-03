// Object prototype

function User(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Thêm prototype sau khi tạo hàm tạo (constructor)
// Có thể gán thêm thuộc tính
User.prototype.country = 'Viet Nam';

// hoặc gán thêm 1 phương thức
User.prototype.getCountry = function() {
    return this.country
}



var student1 = new User('Quach Van', 'Bach', 27, 'Thanh ha, Hai Duong')
var student2 = new User('An Thi', 'Kim Anh', 19, 'Dong Hy, Thai Nguyen')
console.log(student1)
console.log(student2)

// Truy cập đến prototype
console.log(student1.country);
console.log(student2.getCountry())