// Viết hàm chuyển mảng thành chuỗi và nối các phần tử trong mảng với nhau.

function joinWithCharacter(array, charactor) {
    return array.join(charactor)
    }
    
    // Ví dụ khi sử dụng
    var cars = ['Honda', 'Mazda', 'Mercedes'];
    
    var result = joinWithCharacter(cars, ' - ');
    
    console.log(result); // Expected: "Honda - Mazda - Mercedes"