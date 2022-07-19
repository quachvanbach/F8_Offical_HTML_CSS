var urlApiTitle = 'http://localhost:3000/title';
var urlApiStudents = 'http://localhost:3000/students';
var studentListTable = document.querySelector('#list-student');
var handlerStudentBtn = document.querySelector('#handler-student-btn');

function start() {
    getElementByName
}

start()
function getElementByName(name) {
    return document.querySelector('input[name = ' + name + ']');
}

// READ
drawTable()

async function getHtmlTitleAsync() {
    let response = await fetch(urlApiTitle)
        .then(function (response) {
            return response.json();
        })
        .then(function (titles) {

            var htmls = titles.map(function (title) {
                return `<tr>
      <th>${title.id}</th>
      <th>${title.name}</th>
      <th>${title.birth}</th>
      <th>${title.score1}</th>
      <th>${title.score2}</th>
      <th>${title.score3}</th>
      <th colspan="2">Action</th>`})

            return htmls;
        });

    let data = await response;
    return data;
}

// ve bang
async function drawTable() {
    const tableTitle = await getHtmlTitleAsync(); // cho async goi xong
    const tableBody = await htmlsStudent(student); // cho async goi xong
    studentListTable.innerHTML = tableTitle + tableBody;
}
// function htmlsTitle() {
//     fetch(urlApiTitle)
//         .then(function (response) {
//             console.log("o day a");
//             return response.json();
//         })
//         .then(function (titles) {

//             var htmls = titles.map(function (title) {
//                 return `<tr>
//                 <th>${title.id}</th>
//                 <th>${title.name}</th>
//                 <th>${title.birth}</th>
//                 <th>${title.score1}</th>
//                 <th>${title.score2}</th>
//                 <th>${title.score3}</th>
//                 <th colspan="2">Action</th>`    })

//             return htmls.join('');
//         })
// }

async function htmlsStudent(callback) {
    let response = await fetch(urlApiStudents)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
    let data = await response;
    return data;
}

async function student(students) {
    var htmls = students.map(function (student) {
        return `<tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.birth}</td>
        <td>${student.score1}</td>
        <td>${student.score2}</td>
        <td>${student.score3}</td>
        <td><button onclick="handleEditStudent(${student.id})">Edit</button></td>
        <td><button onclick="handleDeleteStudent(${student.id})">Delete</button></td>
        </tr>`
    })
    return htmls;
}

// CREATE
function createStudent(studentInfo, getInfo) {
    var options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentInfo)
    };
    fetch(urlApiStudents, options)
        .then(function (response) {
            response.json();
        })
        .then(getInfo);
}

function handleCreateForm(id) {
    handlerStudentBtn.onclick = function () {
        var name = getElementByName('name').value;
        var birth = getElementByName('birth').value;
        var score1 = getElementByName('score1').value;
        var score2 = getElementByName('score2').value;
        var score3 = getElementByName('score3').value;
        var formData = {
            id: id,
            name: name,
            birth: birth,
            score1: score1,
            score2: score2,
            score3: score3
        };
        createStudent(formData)
        return formData
    }
}
handleCreateForm()
// // PUT / PATCH
// function handleEditStudent(id) {
//     handlerStudentBtn.textContent = 'Save';
//     fetch(urlApiStudents + '/' + id)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             getElementByName('name').value = data.name;                 // var name = document.querySelector('input[name = name]');
//             getElementByName('birth').value = data.birth;               // var birth = document.querySelector('input[name = birth]');
//             getElementByName('score1').value = data.score1;             // var score1 = document.querySelector('input[name = score1]');
//             getElementByName('score2').value = data.score2;             // var score2 = document.querySelector('input[name = score2]');
//             getElementByName('score3').value = data.score3;             // var score3 = document.querySelector('input[name = score3]');
//         })
//         .then(function () {
//             handlerStudentBtn.onclick = function () {
//                 var name = getElementByName('name').value;
//                 var birth = getElementByName('birth').value;
//                 var score1 = getElementByName('score1').value;
//                 var score2 = getElementByName('score2').value;
//                 var score3 = getElementByName('score3').value;

//                 var putInfo = {
//                     id: id,
//                     name: name,
//                     birth: birth,
//                     score1: score1,
//                     score2: score2,
//                     score3: score3,
//                 }
//                 fetch(urlApiStudents + '/' + id, {
//                     method: 'PUT',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(putInfo)
//                 })

//                     .then(function (response) {
//                         return response.json();
//                     });
//             }
//         })
// }


// DELETE
function handleDeleteStudent(id) {
    var options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(urlApiStudents + '/' + id, options)
        .then(function (response) {
            response.json();
            console.log(response.json)
        })
        .then(function (data) {
            console.log(data);
        })
}

// Event press Enter
var formInput = document.getElementsByClassName('form-input');
// console.log(formInput);
for (var i = 0; i < formInput.length; i++) {
    formInput[i].onkeyup = function (e) {
        switch (e.which) {
            case 13:
                handlerStudentBtn.onclick()
                break;
        }
    }
}