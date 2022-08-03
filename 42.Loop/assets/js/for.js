console.log('Vòng lặp for')
// Vòng lặp  - Loop
// 1. for - Lặp với điều kiện đúng
/* 
Ví dụ in ra giá trị từ 1 - 1000
for (var i = 1; i <= 10; i++) {
    console.log(i)
}
 */

/*  Bài tập thực hành về vòng lặp for
👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
 */

// Làm bài
function getRandNumbers(min, max, length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
       arr[i] = Math.random() * (max - min) + min
    }
    return arr
}``

console.log(getRandNumbers(10, 100, 10))

/*  Bài tập thực hành về vòng lặp for 2: 
Tính tổng các phần tử là số của mảng
Cập nhật tháng 6 năm 2022

Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
*/

function getTotal(arr0) {
    var sum = 0;
    for (var i0 = 0; i0 < arr0.length; i0++) {
        sum = sum + arr0[i0]
    }
    return sum
}
console.log(getTotal([1, 2, 3]))
console.log(getTotal([4, 5, -3]))
console.log(getTotal([4, 5, 3, 5]))


/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */

// Ứng dụng để lấy ra phần tử của mảng
var myArray = [
    'Javascrpt',
    'PHP',
    'Java',
    'Dart',
]

var arrayLength = myArray.length

for (var i1 = 0; i1 < arrayLength; i1++) {
    console.log(myArray[i1]); 
}

// Bài tập thực hành 3:
/* Tính tổng giá trị đơn hàng
Cập nhật tháng 6 năm 2022

Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.

Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotalOrders để tính được tổng giá trị của đơn hàng. */

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotalOrders(orders) {
    var sumOrders = 0
    var ordersLength = orders.length;
    for (var i2 = 0; i2 < ordersLength; i2++) {
     sumOrders += orders[i2].price;
    }
    return sumOrders
}


// Expected results:
console.log(getTotalOrders(orders)) // Output: 8700000
console.log('')
console.log('')