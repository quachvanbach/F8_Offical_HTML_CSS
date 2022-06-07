// Đối tượng Math

console.log(Math.PI); /*Lấy ra số PI*/

console.log(Math.round(5.8)); /*Làm tròn số thập phân*/

console.log(Math.abs(-5)); /*Giá trị tuyệt đối*/

console.log(Math.ceil(5.1)); /*Làm tròn trên*/

console.log(Math.floor(5.9)); /*Làm tròn dưới*/

console.log(Math.random()); /*Trả về 1 số thập phân ngẫu nhiên nhỏ hơn 1*/
console.log(Math.floor(Math.random() * 10)); /*Kết hợp với Math.floor để loại bỏ số thập phân và lấy được số random trong 1 khoảng cho trước.*/
// 1 số áp dụng:
// Tạo vòng quay phần thưởng
var random = Math.floor(Math.random() * 10)
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
    '60 coin',
    '70 coin',
    '80 coin',
    '90 coin',
    'Chúc bạn may mắn lần sau',
]
console.log(bonus[random])
// Cường hoá đồ trong game
var random = Math.floor(Math.random() * 100)
if (random < 20) {
    console.log('Cường hoá thành công')
} else{
    console.log('Cường hoá thất bại')
}


console.log(Math.min(-99, 10, 100, 55, 44, 12, 0)); /*Tìm ra số nhỏ nhất*/

console.log(Math.max(-99, 10, 100, 55, 44, 12, 0)); /*Tìm ra số lớn nhất*/

/* Bài tập thực hành: Lấy ngẫu nhiên phần tử của mảng:
Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng. */

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)]
}
