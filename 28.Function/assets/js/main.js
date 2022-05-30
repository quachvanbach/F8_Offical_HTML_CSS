function writeLog(message) {
    console.log(message);
}
 writeLog('Message')

//  Trong ví dụ trên message là 1 đối số của hàm.

// Có thể truyền vào nhiều đối số. Ví dụ:
function writeLog1(message, message1, message2) {
    console.log(message, message1, message2);
}
 writeLog1('Message','Message 1', 'Message 2')

//  Đối tượng arguments: Chỉ có thể xuất hiện trong function. Có tính chất như mảng Array. Ví dụ:
function writeLog2() {
    console.log(arguments)
}
writeLog2('log 1', 'log 2', 'log 3',)

// Vòng lặp for of:
function writeLog4() {
    for (var param of arguments) {
        console.log(param)
    }
}
writeLog4('log 1', 'log 2', 'log 3',)


// In các giá trị trên cùng 1 dòng
function writeLog5() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} `
    }
    console.log(myString)
}
writeLog5('log 1', 'log 2', 'log 3','log 4')