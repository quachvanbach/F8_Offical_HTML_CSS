// Từ khoá this: Đề cập đến đối tượng mà nó thuộc về.

const iPhone7 = {
    // Properties - Thuộc tính.
    name: 'iPhone 7',
    color: 'Gold',
    weight: 300,

    // Methods - Phương thức
    takePhoto() {
        console.log(this);
    },
    objChild: {
        name: 'Object child',
        methodChild() {
            console.log(this);
        }
    }
}


// *** Trong 1 phương thức, this sẽ tham chiếu tới đối tượng truy cập phương thức ( đối tượng trước dấu chấm . )
// Đối tượng nào trỏ đến phương thức đó thi this chính là đối tượng đó.

iPhone7.takePhoto() //==>  iPhone7
iPhone7.objChild.methodChild() //==> objChild


// ***  Đứng ngoài phương thức, this tham chiếu tới đối tượng Global.
console.log(this); //==> trả lại đối tượng Window

function myFunction() {
    console.log(this); //==> bằng với window.myFunction() ==> trả về đối tượng window
};
myFunction();


// *** this ở trong hàm tạo thì chính là đối tượng được tạo:

function Student(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

const bach = new Student('Quach Van Bach', 27, 'Hai Duong')
console.log(bach)
console.log(bach.name)
console.log(bach.age)
console.log(bach.address) //==> this đại diện cho đối tượng của hàm tạo đó. Ở đây chính là đối tượng bach.

Student.prototype.getStudent = function() {
    console.log(this);
}
bach.getStudent() 

Student.prototype.exFunc = function() {
    function exampleFunc() {
        console.log(this)
    }
    exampleFunc();
}
bach.exFunc() //===> trả vê đổi tượng window.

// *** this ở trong 1 hàm thì sẽ là undefined khi ở strict mode.
Student.prototype.exStrictFunc = function() {
    function exampleFunc() {
        'use strict'
        console.log(this) //==> trong strictMode trả về undefined
    }
    exampleFunc();
}
bach.exStrictFunc();

// Với arrow function thì không có context, từ khoá this trong arrow function sẽ trỏ về đối tượng gần nhất chứa nó
Student.prototype.exArrowFunc = function() {
    const exampleFunc = () => {
        console.log(this) //==> trả về đối tượng gần nhất chứa nó ==> bach
    }
    exampleFunc();
}
bach.exArrowFunc();