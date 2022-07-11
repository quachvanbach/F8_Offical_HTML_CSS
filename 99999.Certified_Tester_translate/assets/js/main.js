var input = document.getElementById("message");
var result = document.querySelector("#result");
var aElement = document.querySelector("button a");
var container = document.querySelector("#container");

// Hàm show kết quả
function show_result() {
    // Lấy hai thẻ HTML
    // Gán nội dung ô input vào thẻ div
    aElement.onclick = function () {
        // var result = document.createElement('span');
        // result.id = 'result';
        // container.appendChild(result);
        result.style.display = 'block';
        aElement.href = '#result';
        console.log(result);
        result.innerText = input.value;
    }
}
