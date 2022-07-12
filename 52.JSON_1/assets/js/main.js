/*
 I. Fetch
- Front-end: xây dựng giao diện người dùng
- Back-end: Xây dựng logic xử lý và cơ sở dữ liệu.

API ( URL ): Application Programming Interface: Cổng giao tiếp giữ các phần mềm.

    Back-end --> API --> Fetch --> JSON/XML --> JSON.parse --> Javascript types --> Render ra giao diện với HTML

 */

// Ví dụ:
var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function (response) {
        return response.json(); // JSON.parse: JSON --> Javascript types
    })

    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `<li>
            <h1>${post.title}</h1>
            <p>${post.body}</p>    
            </li>`
        })
        var html = htmls.join('');
        document.getElementById('posts-block').innerHTML = html
    })
    .catch(function (err) {
        console.log('Xảy ra lỗi: ' + err.message);
    });



/*
*** JSON Server: API server (FAKE) / MOCK API
*** Create JSON server
- Cài đặt nodejs.
- Tạo 1 thư mục chứa JSON Server.
- Trỏ terminal đến thư mục đó gõ vào lệnh: "npm init".
- Điền vào thông tin ( có thể Enter để bỏ qua).
- Gõ lệnh: "npm i json-server" để cài đặt json-server.
- Tạo thư mục "db.json" --> File này sẽ chứa data.
- Tạo ra 1 vài data.
- Vào lại file "package.json", thêm vào mục "scripts" 1 cặp key: value mới là: "start": "json-server --watch db.json"
- Gõ lệnh "npm start" tại thư mục chứa json server để bắt đầu chạy json-server.
*/


var studentApi = 'http://localhost:3000/students';
fetch(studentApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (student) {
    console.log(student)
    })


/* *** CRUD: 
- C: Create: tạo mới --> POST.
- R: Read: lấy dữ liệu --> GET.
- U: Update: chỉnh sửa --> PUT / PATCH.
- D: Delete: Xoá --> DELETE.
*/