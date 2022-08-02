// Scope: Phạm vi

// Global scope: Phạm vi toàn cục, toàn cầu: khai báo trực tiếp, sử dụng được trong toàn bộ file đó
var globalValue = "Đây là 1 biến global";
console.log(globalValue);

// Code block {} (trong if, else, for, while,...) : Khai báo trong 1 khối code và chỉ có thể truy cập được trong 1 khối code: chỉ đối với từ khoá let và const.
{let codeblockValue = "Đây là 1 biến trong code block với từ khoá let, chỉ có thể gọi trực tiếp trong khối code đó";
console.log(codeblockValue);
}
console.log(codeblockValue);


{const codeblockValue = "Đây là 1 biến trong code block với từ khoá const, chỉ có thể gọi trực tiếp trong khối code đó";
console.log(codeblockValue);
}
console.log(codeblockValue);


{var codeblockValue = "Đây là 1 biến trong code block với từ khoá var, gọi được nhảy ra phạm vi gần nhất bên ngoài";}
console.log(codeblockValue);

// Local scope: Phạm vi hàm
function myName(name) {
    var fullName = 'Quach Van Bach';
}
myName();
if (typeof fullName === 'undefined') {console.log('Với biến Local scope, ta không thể truy cập bên ngoài phạm vi khi biến')}

/* 
* Khi gọi gọi thì phạm vi mới mới được tạo ra.
* Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
* Các biến sử dụng từ khoá let, const có thể đặt trùng tên ở khi mỗi biễn đó được đặt ở phạm vi khác nhau
* Khi nào 1 biến bị xoá khỏi bộ nhớ:
- Biến toàn cục: Khi bị thoát chương trình, khi refresh trình duyệt.
- Biến trong code block trong hàm: - let, const: Xoá ngay sau khi khối code hoặc hàm đó được thực khi xong. 
- Biến trong hàm được tham chiếu bới 1 hàm: Khi hàm đó chạy xong mà biến đó vẫn được tham chiếu bởi 1 hàm khác thì biến đó vẫn chưa được xoá khỏi bộ nhớ. (tìm hiểu kỹ hơn trong bài 65.)
*/
