/* 
*** HTML DOM (Document Object Model): gồm 3 thành phần chính:
- Element: các thẻ tag trong file HTML
- Attribute: Các thuộc tính trong thẻ mở.
- Text
*/

//--------------------------------------------------------------

/*Get ra các phần tử:
- Element: ID, Class, Tag_name, CSS selector, HTML collection.

*/


// ELEMENT NODE:
// Ví dụ: get qua ID
var headingNode = document.getElementById('heading');
console.log(headingNode);

// Ví dụ: Get qua Classname
var headingNode1 = document.getElementsByClassName('headings');
console.log(headingNode1);

// Ví dụ: Get qua tagname
var headingNode2 = document.getElementsByTagName('h1');
var headingNode21 = document.getElementsByTagName('h1')[0];
console.log(headingNode2);
console.log(headingNode21);

// Ví dụ: Get qua CSS sellector
var headingNode3 = document.querySelector('.headings')
console.log(headingNode3);
var headingNode4 = document.querySelectorAll('.headings')
console.log(headingNode4[1]);

// Ví dụ: Get qua HTML collection: Chỉ áp dụng với 1 số thẻ:
var headingNode5 = document.forms.testForm; //gõ trực tiếp ID
console.log(headingNode5);
var headingNode6 = document.forms['testForm1']; //Thêm ID trong dấu nháy
console.log(headingNode6);

var headingNode7 = document.anchors; // Với thẻ a, chỉ lấy được khi thẻ a có attribute name.
console.log(headingNode7);

// Gọi thông qua 1 biến đã lấy ra trước đó
var headingElement = document.getElementById('element');
console.log(headingElement);

var headingElementChild = headingElement.querySelectorAll('.headings')
console.log({ h1: headingElementChild })

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////







// ATTRIBUTE NODE: Ta sẽ đứng từ Element và trỏ tới Attribute.

// 1. Với các attribute hợp lệ:
// Set giá trị:
var attributeHeading = document.getElementById('heading-2');
attributeHeading.className = 'attribute__heading';
var attributeAnchor = document.querySelector('#attribute a');
attributeAnchor.href = 'http://google.com';

// Để lấy ra giá trị của attribute:
console.log(attributeHeading.className);
console.log(attributeAnchor.href);

// 2. Với các attribute ngẫu nhiên, không thuộc về Element, ta sử dụng phương thức: setAttribute('thuộc tính', 'giá trị')
// Set giá trị:
attributeHeading.setAttribute('data-1', 'value-1');
attributeAnchor.setAttribute('data-2', 'value-2');

// Để lấy ra giá trị của attribute:
console.log(attributeHeading.getAttribute('data-1'));
console.log(attributeAnchor.getAttribute('data-2'));

// Set Attribute cho thẻ h2 để đổi màu chữ của h2 sang màu đỏ và bỏ gạch chân ở thẻ #attribute a
attributeHeading.style = 'color: red';
attributeAnchor.setAttribute('style', 'text-decoration: none');

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////








// TEXT NODE:
/* Có 2 cách để get hoặc set được Text Node:
- innerText: Chỉ tác động lên những gì hiển thị ra màn hình.
- textContent: Tác động lên toàn bộ Text Node trong Element Node.
*/

var headingText = document.querySelector('h3');
var headingText1 = document.querySelector('h4');
var headingText2 = document.querySelector('h5');
var headingText3 = document.querySelector('h6');

// GETTER: Với nội dung đơn giản, cả 2 thuộc tính innerText và textContent đều cho ra kết quả giống nhau:
console.log(headingText.innerText);
console.log(headingText.textContent);

// Khi trong Element bao gồm các thẻ mở có những  khối code bên trong đó:
console.log(headingText1.innerText); // Không hiển thị khối code. Chỉ hiển thị những gì ta có thể nhìn thấy trên màn hình trình duyệt.
console.log(headingText1.textContent); // Không hiển thị Element Node nhưng toàn bộ Text Node bên trong Element đó sẽ được hiển thị.


//SETTER: Cả 2 thuộc tính đều có thể dùng để thêm được nội dung vào text node.
headingText2.innerText = `



New Heading



` // Với innerText, các ký tự xuống dòng sẽ được html hiểu và mã hoá thành code để hiển thị đúng với những gì đã viết.

headingText3.textContent = `



New Heading



` // Với textContent, các ký tự xuống dòng sẽ không được hiểu và sẽ bị bỏ qua, chỉ hiển thị phần nội dung.

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////








// innerHTML, outerHTML: 
var inoutBox = document.querySelector('#in-out-html .box');
var inoutBox1 = document.querySelector('#in-out-html .box-1');
inoutBox.innerHTML = '<h1 id="box__heading">Heading Box</h1>';  // Với innerHTML: Element, Attribute hoặc Text sẽ được thêm vào trong Element gốc.
inoutBox1.outerHTML = '<span><h1 style= "color: red">Span box</h1></span>'; // Với outerHTML: Element, Attribute hoặc Text sẽ được ghi đè lên Element gốc, và Element gốc sẽ bị xoá.




/* Thực hành sử dụng InnerHTML
Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

ReactJS
AngularJS
VueJS
Gợi ý:

Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul.
*/

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var coursesList = document.querySelector('.courses-list');
    var newCourses = courses.map(function (course) {
        return `<li>${course}</li>`
    })
    var courseString = newCourses.join(' ');
    return coursesList.innerHTML = courseString;
}
render(courses);