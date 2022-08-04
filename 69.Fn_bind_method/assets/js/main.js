this.firstName = "Minh"
this.lastName = "Thu"

const teacher = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName() { return `${this.firstName} ${this.lastName}` }
}
console.log(teacher.getFullName()); //==> Minh Thảo

const getName = teacher.getFullName;
console.log(getName()); //==> Minh Thu

// Ràng buộc this với bind():
const getName1 = teacher.getFullName.bind(teacher); // Tham số truyền vào bind() chính là đối tượng muốn ràng buộc với this
console.log(getName1()); //==> Minh Thảo

const student = {
    firstName: "Minh",
    lastName: "Hằng"
}

const getName2 = teacher.getFullName.bind(student);
console.log(getName2()); //==> Minh Hằng

// Tính chất của bind()
// Phương thức bind() sẽ trả về 1 hàm mới
// Có thể nhận các đối số như hàm ban đầu
const myInfo = {
    firstName: "Quach",
    lastName: "Bach",
    getFullName(first, last) {
        return `${first} ${last}`;
    }
}

const myFullName = myInfo.getFullName.bind(myInfo, 'Quach', 'KaKa'); //==> Quach KaKa

// Khi truyền giá trị qua bind(). Giá trị sẽ không bị thay đổi khi ta gọi biến và truyền giá trị sau đó:
console.log(myFullName('Quach', 'DaiKa')); //==> Quach KaKa


// Ví dụ áp dụng bind()

// Ví dụ 1:

const myPhone = {
    name: "Xiaomi",
    version: "Note 11",
    getMyPhone() { console.log(`${this.name} ${this.version}`) }
}

const button = document.querySelector('button');

// button.onclick = function () {
//     myPhone.getMyPhone()
// }

// Thay vì lồng 2 function như trên ta có thể gán trực tiếp và thêm vào phương thức bind() để rang buộc this với myPhone
button.onclick = myPhone.getMyPhone.bind(myPhone);


// Ví dụ 2:

const $ = document.querySelector

const heading = document.querySelector('#heading');
console.log(heading); //==> <h1 id="heading">This is Heading</h1>

// const heading1 = $('#heading')
// console.log(heading1); //==> Uncaught TypeError: Illegal invocation

// Cách xử lý:
const $$ = document.querySelectorAll.bind(document);
const heading2 = $$('.heading');
console.log(heading2); //==> NodeList [h1#heading.heading]