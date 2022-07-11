// Một số thuộc tính NODE
/*
*** Một số thuộc tính Node:
* clientHeight : Chiều cao của element.
* clientWidth: Chiều rộng của Element.
* clientLeft: Toạ độ trục x.
* clientTop: toạ độ trục y.
* contenteditable: cho phép chỉnh sửa content của bất kỳ thẻ nào.
* attributes: trả về độ dài attribute dưới dạng mảng.
* autocapitalize: tự động viết hoa.
* childElementCount: đếm ra các Element node.
* childNodes: lấy ra toàn bộ các node là con của element gốc.
* children: lấy ra toàn bộ Element con của Element gốc.
* classList: quản lí class list.
* firstChild: lấy ra node đầu tiên.
* firstElementChild: lấy ra Element đầu tiên.
* lastChild: lấy ra node con cuối cùng.
* localName: tên thẻ gốc.
* nextElementSibling: trả về Element tiếp theo lền kề.
* nextSibling: trả về node tiếp tiếp theo liền kề.
* nodeType: đại diện cho node, được đánh số 1,2,3 (Element node: 1, Attribute node: 2, Text node: 3)
* parentElement: Element cha.
* style: trả về thuộc tính CSS của node.
*/









// DOM CSS

var boxElement = document.querySelector('.box');
var TextElement = document.querySelector('h2');
console.log(boxElement)
// CSS cho boxElement:
// boxElement.style.width = '200px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

// Cách viết ngắn gọn nhiều thuộc tính cho boxElement:
Object.assign(boxElement.style, {
    width: '500px',
    height: '200px',
    backgroundColor: 'green',
    margin: '0 auto',
    'text-align': 'center'
})


// DOM Classlist:
console.log(boxElement.classList)

// add: thêm class vào Element. 
boxElement.classList.add('red')
boxElement.classList.add('red', 'bold') // Để thêm nhiều class ta ngăn cách chúng bằng dấu phẩy.

// contains: kiểm tra 1 class có nằm trong Element đó hay không.
console.log(boxElement.classList.contains('red'));
console.log(boxElement.classList.contains('green'));

// remove: xoá bỏ 1 class khỏi Element.
boxElement.classList.remove('bold');

// toggle: Nếu 1 class đang có trong Element thì nó sẽ xoá bỏ class đó. Còn nếu không có class đó thì nó sẽ thêm class đó vào Element.
boxElement.classList.toggle('blue');

//Ứng dụng làm chữ nhấp nháy:
setInterval(() => {
    TextElement.classList.toggle('red');
}, 500)

boxElement.classList.replace('red', 'green')

/*
Thực hành sử dụng ClassList.
Cho trước file class box-list có các thẻ div, các bạn hãy thêm class box vào các thẻ div bên trong class box-list.
*/
var boxList = document.querySelectorAll('div');

for (var i = 0; i < boxList.length; i++) {
    boxList[i].classList.add('box')
}










// DOM Event:

// 1. Attribute events: Thêm thẳng sự kiện vào Attributecủa Element

// 2. Assign event using the element node.
// console.log([MouseEvent])

var headingEvent = document.querySelectorAll('.headingEvent');

for (i = 0; i < headingEvent.length; ++i) {
    headingEvent[i].onclick = function (e) {
        console.log(e.target.innerText);
    }
}


// Bài tập: Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
var buttonEvent = document.querySelector('button');
buttonEvent.onclick = function () {
    buttonEvent.style.color = '#fff'
}



// DOM event example.
// 1. Input / select.
var inputText = document.querySelector('input[type="text"]')
var inputText1 = document.querySelector('input[type="text-1"]')
var inputCheckbox = document.querySelector('input[type="checkbox"]')

var selectOption = document.querySelector('select')

var inputText2 = document.querySelector('input[type="text-2"]')
var inputText3 = document.querySelector('input[type="text-3"]')
var inputText4 = document.querySelector('input[type="text-4"]')
var inputText5 = document.querySelector('input[type="text-5"]')
// Có 2 cách để lấy ra value của ô input:
// - Sử dụng event onchange: value được lấy ra khi ta bỏ focus khỏi ô input.
inputText.onchange = function (e) {
    console.log(e.target.value);
}

inputCheckbox.onchange = function (e) {
    console.log(e.target.checked);
}

selectOption.onchange = function (e) {
    console.log(e.target.value);
}



// - Sử dụng event oninput: value được lấy ra đến đâu khi ta nhập dữ liệu đến đó.
inputText1.oninput = function (e) {
    console.log(e.target.value);
}



// 2. Keyup / down.
// Lấy được value khi nhấc tay khỏi phím:
inputText2.onkeyup = function (e) {
    console.log(e)
}

// Lấy được value khi bấm xuống phím:
inputText3.onkeydown = function (e) {
    console.log(e.target.value)
}

// Lấy được value khi bấm phím:
inputText4.onkeypress = function (e) {
    console.log(e.which)
}

// Áp dụng để thực hiên thao tác khi bấm vào 1 phím cụ thể.
inputText5.onkeyup = function (e) {
    console.log(e.which) //e.which để lấy ra được giá trị của phím
    switch (e.which) {
        case 27:
            console.log('Exit')
            break;
    }
}










//DOM EVENT II
// 1. preventDefalt: Loại bỏ hành vi mặc định của HTML
// Example 1:


var aElement = document.links;
for (var i = 0; i < aElement.length; ++i) {
    aElement[i].onclick = function (e) {
        console.log(e.target.href)
        if (!e.target.href.startsWith('http://google.com/')) {
            e.preventDefault()
        }
    }
}

// Example 2:
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function (e) {
    e.preventDefault();
}
ulElement.onclick = function (e) {
    console.log(e.target.innerText)
}


// 2. stopPropagation: Loại bỏ sự kiện nổi bọt.
document.querySelector('.stopPropagation').onclick = function (e) {
    e.stopPropagation()
    console.log(e.target.getAttribute('value'))
}

document.querySelector('.stopPropagation button').onclick = function (e) {
    e.stopPropagation()
    console.log(e.target.innerText)
}













/* EVENTS LISTENER
- Xử lý nhiều việc khi 1 event xảy ra.
- Lắng nghe / Huỷ bỏ lắng nghe.
*/

var listenerButton = document.getElementById('listener__button');



function viec4() {
    console.log('Event 4');
}

function viec5() {
    console.log('Event 5');
}

// addEventListener
listenerButton.addEventListener('click', function (e) {

    console.log('Event 1');

    console.log('Event 2');

    console.log('Event 3');
})

listenerButton.addEventListener('click', viec4);
listenerButton.addEventListener('click', viec5)


// removeEventListener
setTimeout(function () {
    listenerButton.removeEventListener('click', viec4)
}, 3000)

