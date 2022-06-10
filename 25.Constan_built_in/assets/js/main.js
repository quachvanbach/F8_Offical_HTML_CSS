alert('Đây là hàm alert');

console.log('Đây là hàm console.');

confirm('Hàm confirm. Xác nhận giá trị');

prompt('Hàm prompt, điền và xác nhận giá trị nhập vào');

setTimeout(function() {
    console.log('Hàm console sẽ in ra giá trị này sau 3 giây')}, 3000)


setInterval(
    console.log('Hàm console sẽ in ra giá trị này liên tục sau mỗi 3 giây' + Math.random())
, 1000)
