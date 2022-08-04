// Ví dụ 1:

const myInfo = {
    name: 'Quach Bach',
    address: 'Hai Duong'
}

function intro(para1, para2) {
    return `${para1} ${this.name}. ${para2} ${this.address}`
}

let result = intro.apply(myInfo, ['My name is', 'I come from']) //==> tham số truyền vào được đặt trong 1 mảng
console.log(result)

result = intro.call(myInfo, 'My name is', 'I come from')
console.log(result)


console.log('')
// Ví dụ 2: Function borrowing:

const teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
    isOnline: false,
    goOnline() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline() {
        this.isOffline = false;
        console.log(`${this.firstName} ${this.lastName} is Offline`)
    },
}

const student = {
    firstName: 'Son',
    lastName: 'Dang',
    isOnline: false,
}

console.log('Teacher: ', teacher.isOnline)
teacher.goOnline()
console.log('Teacher: ', teacher.isOnline)

console.log('')

console.log('Student: ', student.isOnline)
teacher.goOnline.apply(student)
console.log('Student: ', student.isOnline)


console.log('')

// Ví dụ 3:

function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Parrot() {
    Animal.apply(this, arguments);

    this.speak = function () {
        console.log('Nhà có khách!')
    }
}

const conVet = new Parrot('Con Vẹt', 300)

console.log(conVet)


/* *** So Sánh giữa bind(), call(), apply(): ***
* Giống nhau: Đều là 1 phương thức được kế thừa từ Function.prototype
* Khác nhau:
------ bind() ------
    - Trả về 1 hàm mới với 'this' tham chiếu tới thisArg.
    - Không thực hiện gọi hàm.
    - Nếu được bind kèm đối số, thì các đối số này sẽ được ưu tiên hơn.

------ call() ------
    - Thực hiên bind this với thisArg, không trả ra hàm mới và thực hiện gọi hàm luôn.
    - Nhận các đối số cho hàm gốc từ đối số truyền vào.

------ apply() ------
    - Thực hiên bind this với thisArg, không trả ra hàm mới và thực hiện gọi hàm luôn.
    - Nhận các đối số cho hàm gốc từ đối số truyền vào là đối số thứ 2 và đối số đó được truyền vào dưới dạng array.
*/