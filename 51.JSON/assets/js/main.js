// I. JSON
/* 1. Khái niệm:
- JSON = Javascript Object Notation
- Là 1 định dạng dữ liệu ( chuỗi).
- Thể hiện kiểu dữ liệu như: Number, Boolean, Null, Array, Object.
+ Stringify JSON: Chuyển từ Javascript type => JSON.
+ Parse JSON: Chuyển từ JSON => Javascript type.
*/

// Ví dụ:

// var json = '123';
// var json = '"this is string"';
// var json = 'true';
// var json = 'null';
// var json = '["PHP", "Javascript", "HTML,CSS"]';



var json = '{"name": "Quach Bach", "age": 27}';
var object = { name: 'Quach Bach', age: 27 }

//  Stringify JSON:
console.log(JSON.stringify(object));

// Parse JSON:
console.log(JSON.parse(json));
//===========================================================//









/* II. Promise
- Sync: đồng bộ:
    Thuận theo tự nhiên, cái gì viết trước thì xảy ra trước:
        console.log(1);
        console.log(2);
- Async: bất đồng bộ:
    Ngược với tự nhiên, cái được viết trước nhưng lại xảy ra sau:
        setTimeout(function() {
            console.log(3);
        }, 1000);
        console.log(4);
    Những thao tác Async: setInterval, setTimeout, fetch, XMLHttpRequest, file reding, request animation frame;
- Pain: Nỗi đau:
        Callback hell.
        Pyramid of doom.
            setTimeout(function () {
                console.log(3);
                setTimeout(function () {
                    console.log(3);
                    setTimeout(function () {
                        console.log(3);
                        setTimeout(function () {
                            console.log(3);
                            setTimeout(function () {
                                console.log(3);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
- Lý thuyết, cách hoạt động.
    Khái niệm:
        Promise sinh ra để xử lý các thao tác bất đồng bộ.
        Trước khi có Promise thì ta thường sử dụng Callback. Nhưng với Callback sẽ xảy ra tình trạng Callback hell.
        Để tạo ra promise ta sử dụng new Promise. Trong contructor của nó ta truyền vào 1 Executor function. Trong Executor function nhận 2 tham số dang hàm: resolve và reject.
            Resolve được gọi khi thao thác xử lý thành công -> lọt vào promise.then()
            Reject được gọi khi thao tác xử lý thất bại -> lọt vào promise.catch()
    Promise gồm có 3 trạng thái là:
            Pending.
            Fulfilled.
            Rejected.
    Tạo promise:        
        var promise = new Promise (
            function(resolve, reject) {
                Logic: 
                    Thành công => resolve()
                    Thất bại => reject()
            }
            )

    Sử dụng promise:            
        promise.then(function() {

        })
        promise.catch(function() {

        })
        promise.finally(function() {

        })
- Thực hành, Ví dụ:

*/
//===========================================================//

var promise = new Promise(function (resolve, reject) {
    resolve();
})

promise
    .then(function () {
        return 1;
    })
    .then(function (data) {
        console.log(data);
        return 2;
    })
    .then(function (data) {
        console.log(data);
        return 3;
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function () {
        console.log('Failed!');
    })
    .finally(function () {
        console.log('Done!');
    });

// Áp dụng promise giải quyết bài toán: In ra 1,2,3 mỗi lần in cách nhau 1 giây.
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    })
}
sleep(1000)
    .then(function () {
        console.log('In ra 1 sau khi load trang thành công 1 giây');
        return sleep(1000);
    })
    .then(function () {
        console.log('In ra 2 sau khi in ra 1 được 1 giây');
        return sleep(1000);
    })
    .then(function () {
        console.log('In ra 3 sau khi in ra 2 được 1 giây');
        return sleep(1000);
    })
    .then(function () {
        console.log('In ra 4 sau khi in ra 3 được 1 giây');
        return sleep(1000);
    })



// Promise.resolve, Promise.reject, Promise.all:

// Promise.resolve: Dùng khi chỉ có resolve.
var promise = Promise.resolve('Successful');

promise
    .then(function (callback) {
        console.log('Promise.resolve: ', callback);
    })
    .catch(function (callback) {
        console.log('Promise.reject: ', callback);
    })



// Promise.reject: Dùng khi chỉ có reject.
var promise1 = Promise.reject('Failed');

promise1
    .then(function (callback) {
        console.log('Promise.resolve: ', callback);
    })
    .catch(function (callback) {
        console.log('Promise.reject: ', callback);
    })

// Promise.all: Chạy song song, đồng thời các promise.
var arrPromise1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([1]);
    }, 2000);
}
)
var arrPromise2 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([2, 3]);
        }, 5000);
    }
)

Promise.all([arrPromise1, arrPromise2])
    .then(function ([result1, result2]) {
        console.log(result1.concat(result2));
    });



// Ví dụ áp dụng trong thực tế. Phân tích khung bình luận của nhiều thành viên.
var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    },
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Vang, cam on anh'
    },
]

// Lấy comments
// Từ comments lấy ra user_id
// Từ user_id lấy ra users tương ứng.

// Fake API:
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        })
        setTimeout(function () {
            resolve(result);
        }, 1000)
    }
    )
}
getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });
        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function (data) {
        var commentBlock = document.getElementById('comments-block');
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html;
    });
