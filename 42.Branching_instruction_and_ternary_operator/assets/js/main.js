// Câu lệnh rẽ nhánh If - else 

var date = 2;

if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else if (date === 3) {
    console.log('Hôm nay là thứ 3');
} else if (date === 4) {
    console.log('Hôm nay là thứ 4');
} else if (date === 5) {
    console.log('Hôm nay là thứ 5');
} else if (date === 6) {
    console.log('Hôm nay là thứ 6');
} else if (date === 7) {
    console.log('Hôm nay là thứ 7');
} else if (date === 8) {
    console.log('Hôm nay là chủ nhật');
} else {
    console.log('Không biết');
}

// Câu lệnh rẽ nhánh Switch
var date1 = 5;
switch (date1) {
    case 2:
        console.log('Hôm nay là thứ 2');
        break; /* Vì khi sử dụng switch - case, các lệnh sau dòng lệnh đúng đều sẽ được thực thi. Vậy nên ta dùng từ khoá break để thoát khỏi dòng lệnh.*/
    case 3:
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
    case 6:
        console.log('Hôm nay là thứ 6');
        break;
    case 7:
        console.log('Hôm nay là thứ 7');
        break;
    case 8:
        console.log('Hôm nay là chủ nhật');
        break;
    default:
        console.log('Không biết')
}

// Toán tử 3 ngôi - Trinary operator
var member = {
    name: 'Ân Thị Kim Anh',
    age: 17
}

if (member.age >= 18) {
    console.log('Đủ tuổi vị thành niên')
} else {
    console.log('Chưa đủ tuổi vị thành niên')
}

// Thay vì dùng if - else, ta có thể dùng toán tử 3 ngôi như dưới đây:

var result = member.age >= 18 ? 'Đủ tuổi vị thành niên' : 'Chưa đủ tuổi vị thành niên';
console.log(result)

// Toán tử 3 ngôi chỉ nên sử dụng trong trường hợp:
var a ;
var b ;
var c = a > 0 ? a : b;

// Bài tập thực hành sử dụng toán tử 3 ngôi:
// Tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.
// Làm bài
function getCanVoteMessage(age) {
    var result = age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
    return result;
}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'.

