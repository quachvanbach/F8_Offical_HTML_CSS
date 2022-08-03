var myFullName = 'Quach Van Bach';
console.log('var myFullName = \'Quach Van Bach\'')
var myFullName1 = 'Quach Van Van Bach';
console.log('var myFullName1 = \'Quach Van Van Bach\'')
var myFullName2 = '    Quach Van Bach    ';
console.log('var myFullName2 = \'    Quach Van Bach    \'')
console.log('')
console.log('1. Length: Kiểm tra độ dài chuỗi')
console.log('myFullName.length: ' + myFullName.length);
console.log('')
console.log('2. Find index: Tìm trong chuỗi')
console.log('myFullName.indexOf(\'): ' + myFullName.indexOf('ch'));
console.log('myFullName.indexOf(\'ch\',5): ' + myFullName.indexOf('ch',5));
console.log('myFullName.lastIndexOf(\'ch\'): ' + myFullName.lastIndexOf('ch'));
console.log('myFullName.search(\'): ' + myFullName.search('ch'));
console.log('')
console.log('3. Cut string : Cắt chuỗi')
console.log('myFullName.slice(10,14) : ' + myFullName.slice(10,14))
console.log('')
console.log('4. Replace: Thay thế 1 phần trong chuỗi')
console.log('myFullName.replace(\'Van\',\'Dai\') : ' + myFullName.replace('Van','Dai'));
console.log('myFullName1.replace(/Van/g,\'Dai\') : ' + myFullName1.replace(/Van/g, 'Dai'));
console.log('')
console.log('5. Convert to upper case: Convert chuỗi sang chữ in hoa');
console.log('myFullName.toUpperCase() : ' + myFullName.toUpperCase());
console.log('')
console.log('6. Convert to lower case: Convert chuỗi sang chữ in thường');
console.log('myFullName.toLowerCase() : ' + myFullName.toLowerCase());
console.log('')
console.log('7. Trim: Loại bỏ khoảng trống ở 2 đầu chuỗi');
console.log('myFullName2.trim() : ' + myFullName2.trim());
console.log('');
console.log('8. Split: Cắt chuỗi thành mảng dựa vào điểm chung trong chuỗi');
console.log('myFullName.split(\' \')');
console.log(myFullName.split(' '));
console.log('');
console.log('9. Get a character by index: Lấy ra ký tự tại 1 vị trí nào đó')
console.log('myFullName.charAt(6): ' + myFullName.charAt(6))
console.log('myFullName[6]: ' + (myFullName[6]))
