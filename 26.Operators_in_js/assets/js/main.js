var result1 = 'A' && 'B' && null && 'D';
var result2 = 'A' && 'B' && 'C' && 'D';
var result3 = 'A' || 'B' || 'C' || 'D';
var result4 = null || 'B' || 'C' || 'D';
var result5 = null || false || undefined;

if (result1) {
    console.log('Với toán tử && thì sẽ xét lần lượt từ phải qua trái và nếu tìm ra giá trị là 1 trong 6 giá trị false thì in nó ra, nếu không có giá trị false thì in ra giá trị tận cùng bên phải của chuỗi.', result1)
} else{
    console.log('- Với toán tử && thì sẽ xét lần lượt từ phải qua trái và nếu sẽ tìm ra giá trị là 1 trong 6 giá trị false thì in nó ra', result1)
}

if (result2) {
    console.log('Với toán tử && thì sẽ xét lần lượt từ phải qua trái và nếu tìm ra giá trị là 1 trong 6 giá trị false thì in nó ra, nếu không có giá trị false thì in ra giá trị tận cùng bên phải của chuỗi.', result2)
} else{
    console.log('Với toán tử && thì sẽ xét lần lượt từ phải qua trái và nếu tìm ra giá trị là 1 trong 6 giá trị false thì in nó ra', result2)
}

if (result3) {
    console.log('- Với toán tử || thì sẽ xét lần lượt từ trái qua phải và bỏ qua giá trị là 1 trong 6 giá trị false. Nếu trong quá trình xét, gặp được giá trị khác giá trị false thì in nó ra', result3)
} else{
    console.log('Với toán tử || thì sẽ xét lần lượt từ trái qua phải và bỏ qua giá trị là 1 trong 6 giá trị false. Nếu trong quá trình xét, gặp được giá trị khác giá trị false thì in nó ra', result3)
}

if (result4) {
    console.log('Với toán tử || thì sẽ xét lần lượt từ trái qua phải và bỏ qua giá trị là 1 trong 6 giá trị false. Nếu trong quá trình xét, gặp được giá trị khác giá trị false thì in nó ra', result4)
} else{
    console.log('Với toán tử || thì sẽ xét lần lượt từ trái qua phải và bỏ qua giá trị là 1 trong 6 giá trị false. Nếu trong quá trình xét, gặp được giá trị khác giá trị false thì in nó ra', result4)
}

if (result5) {
    console.log ('Nếu toàn bộ giá trị là false thì in giá trị cuối cùng bên phải', result5)
} else{
    console.log('Nếu toàn bộ giá trị là false thì in giá trị cuối cùng bên phải', result5)
}