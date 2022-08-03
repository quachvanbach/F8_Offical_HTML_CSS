console.log('I. Các cách tạo kiểu dữ liệu số')
var PI = 3.14159265358979323846
console.log('var Pi = 3.14159265358979323846')
console.log('var  = new Number(9)')
console.log('Thường sử dụng cách 1 vì cách 1 tạo ra kiểu Number. Còn cách 2 sẽ tạo ra kiểu dữ liệu là kiểu Object')
console.log('II. Làm việc với Number')
console.log('1. Tostring:')
console.log('console.log(PI.toString() : ' + PI.toString())
console.log('console.log(type PI.toString()) : ' + typeof PI.toString())
console.log('')
console.log('2. To Fixed: Dùng trong trường hợp làm tròn số.')
console.log('console.log(PI.toFixed(2)) : ' + PI.toFixed(2))
console.log('')
console.log('Kiểm tra kiểu dữ liệu')
function isNumber(value) {
    if (Number.isFinite(value)) {
        return true;
    } else {
        return false;
    }
}
function isString(value) {
    return typeof value === 'string';
}
console.log('Kiểm tra số')
console.log(isNumber(100))
console.log(isNumber('100'))
console.log(isNumber(NaN))
console.log('Kiểm tra chuỗi')
console.log(isString(100))
console.log(isString('100'))
console.log(isString(NaN))