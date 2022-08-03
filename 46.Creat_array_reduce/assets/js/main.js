const numbers = [];

// Định nghĩa phương thức reduce2
Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    // Kiểm tra xem người dùng có nhập vào giá trị đối số hay không?
    if (arguments.length < 2) {
        i = 1;
        result = this[0]
    }

    // Lặp qua từng phần tử
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

const result = numbers.reduce2((total, number, index, array) => {
    console.log(total, number, index, array)
    return total + number
},)

console.log(result)







