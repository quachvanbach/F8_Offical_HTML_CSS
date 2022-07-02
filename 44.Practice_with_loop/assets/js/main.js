/* Bài tập 1: 👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max. */
function getRandNumbers(min, max, length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
       arr[i] = Math.random() * (max - min) + min
    }
    return arr
}

console.log(getRandNumbers(10, 20, 10))

/* Bài tập 2: Tính tổng các phần tử là số của mảng.
Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng. */

function getTotal(arr0) {
    var sum = 0;
    for (var i0 = 0; i0 < arr0.length; i0++) {
        sum += arr0[i0]
    }
    return sum
}
console.log(getTotal([1, 2, 3]))
console.log(getTotal([4, 5, -3]))
console.log(getTotal([4, 5, 3, 5]))

/*Bài tập 3: Tính tổng giá trị đơn hàng.
Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng. */
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

function getTotal(orders) {
    var sum = 0
    var ordersLength = orders.length;
    for (var i1 = 0; i1 < ordersLength; i1++) {
     sum += orders[i1].price;
    }
    return sum
}
// Expected results:
console.log(getTotal(orders)) // Output: 8700000


/* Bài tập 4: Bài tập sử dụng for...in
👉 Hãy hoàn thành hàm sao cho kết quả được như kết quả mong đợi. */

function run(object) {
    var result = [];
    for(var key in object){
        var data = `Thuộc tính ${key} có giá trị ${object[key]}`;
        result.push(data)
    }
    return result;
}
/* 
function run(object) {
    var arr = [];
            for( var key in object){
                arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
            }
            return arr;
    }
 */    

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

//đệ quy