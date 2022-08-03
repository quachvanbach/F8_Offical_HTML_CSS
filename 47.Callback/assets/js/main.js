/*

Định nghĩa Callback:
- Là 1 hàm
- Được truyền qua đối số
- Được gọi lại (trong hàm nhận đối số)
*/

function myFunction(param) {
    if (typeof param === 'function') {
        param('Quach Van Bach')
    }
}

function myCallback(value) {
    console.log('Fullname: ', value)
}

myFunction(myCallback);


// Bài tập 1: Tạo chương trình tính toán
// Ở bài học này, các bạn hãy sử dụng kiến thức về callback vừa học ở bài trước để hoàn thành function sumCb và tạo thêm các function subCb, multiCb và divCb.

function sumCb(a, b) {
    return a + b
}
function subCb(a, b) {
    return a - b
}

function multiCb(a, b) {
    return a * b
}

function divCb(a, b) {
    return a / b
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)) // Output: 3
console.log(caculate(1, 2, subCb)) // Output: -1
console.log(caculate(1, 2, multiCb)) // Output: 2
console.log(caculate(3, 1, divCb)) // Output: 3















//  TỰ ĐỊNH NGHĨA PHƯƠNG THỨC MAP
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

// Phương thức map có sẵn: 
var htmls = courses.map(function (course) {
    return `<h2>${course}</h2>`
})
console.log('Phương thức map có sẵn: ', htmls.join(' '))

// Phương thức map tự định nghĩa: 
Array.prototype.map2 = function (callback) {
    var output = [], arrayLength = this.length;

    for (i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var htmls1 = courses.map2(function (course, index) {
    return `<h2>${course}</h2>`
})

console.log('Phương thức map tự định nghĩa: ', htmls1.join(' '));

/* 
Thực hành tạo phương thức myMap:
Ở bài trước chúng ta đã được học cách tạo phương thức map2 hoạt động giống với phương thức map của Array.

Bây giờ, hãy tạo ra phương thức myMap hoạt động tương tự phương thức map2 và map.
 */

Array.prototype.myMap = function (cb) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i, i < arrayLength; ++i) {
        var result = cb(this[i], i)
        output.push(result)
    }
    return output
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
}))















// TỰ ĐỊNH NGHĨA PHƯƠNG THỨC FOREACH
/*
*** Lưu ý: Ta nên sử dụng vòng lặp for-in thay vì dùng vòng lặp for thông thường để lặp qua mảng. Vì vòng lặp for thông thường sẽ lặp qua cả các elements empty.
Ví dụ: khi ta quy định độ dài cho mảng.
*
var numbers = [1, 2, 3, 4, 5];
number.length = 1000;
*
Thì khi đó, vòng lặp vẫn sẽ chạy 1000 lần trong khi chỉ có 3 phần tử thực.
*/


Array.prototype.forEach2 = function (callback) {
    for (var index in this) {  //Khi dùng vòng lặp for - in. Vòng lặp đó sẽ chạy qua tất cả các elements bao gồm cả elements trong proto_.
        if (this.hasOwnProperty(index)) {  //Dùng thuộc tính hasOwnProperty để chọn lấy các elements thực và loại bỏ đi các elements là proto_ được định nghĩa
            callback(this[index], index, this)
        }
    }
}

courses.forEach2(function (course, index, array) {
    console.log(course, index, array)
})














// TỰ ĐỊNH NGHĨA PHƯƠNG THỨC FILTER

var courses1 = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
]


Array.prototype.filter2 = function (callback) {
    var output = []; //Đặt ra 1 mảng chứa kết quả
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {  //Khi điều kiện ở return của courses1.filter2 là đúng.
                output.push(this[index])
            }
        }
    }
    return output;
}

var filterCourses = courses1.filter2(function (course, index, array) {
    return course.coin > 700
})

console.log(filterCourses)




//Bài tập thực hành tạo phương thức myFilter:
var myVocab = [
    {
        Eng: 'Foundation Level',
        Vi: 'cấp độ nền tảng'
    },
    {
        Eng: 'Syllabus',
        Vi: 'giáo trình'
    },
    {
        Eng: 'Qualification',
        Vi: 'sự nhận định'
    },
    {
        Eng: 'Qualifications Board',
        Vi: 'hội đồng chứng nhận'
    },
    {
        Eng: 'Hereinafter',
        Vi: 'sau đây'
    }
]

Array.prototype.myFilter = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output;
}


var myVocabFilter = myVocab.myFilter(function (vocab, index, array) {
    return vocab.Eng === 'Hereinafter';
})

console.log(myVocabFilter);















// TỰ ĐỊNH NGHĨA PHƯƠNG THỨC SOME VỚI CALLBACK

var courses2 = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: false
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
]

Array.prototype.some2 = function (callback) {
    // Có thể làm theo cách thông thường là lưu giá trị false vào 1 biến output:
    // var output = false
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                console.log(this[index])
                return true
                // output = true
                // break;
            }
        }
    }
    return false
    // return output
}

var isFinishSome = courses2.some2(function (course) {
    return course.isFinish; // Có thể return lại chính course.isFinish
})

console.log(isFinishSome)

/* 
Thực hành tạo phương thức mySome.ạo ra phương thức mySome hoạt động tương tự phương thức some2 và some.
 */
Array.prototype.mySome = function (cb) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this)
            if (result) {
                output = true;
                break;
            }
        }
    }
    return output;
}


/*
Expected results:
*/

const numbers1 = [1, 3, 3, 5];

console.log(numbers1.mySome(function (number) {
    return number % 2 === 0;
})); //Output: false

console.log(numbers1.mySome(function (number, index) {
    return index % 2 === 0;
})); //Output: true

console.log(numbers1.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: true 

















// TỰ ĐỊNH NGHĨA EVERY VỚI CALLBACK

Array.prototype.every2 = function (callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (!result) {
                output = false;
                break;
            }

        }
    }
    return output;
}

var isFinishEvery = courses2.every2(function (course) {
    return course.coin > 680
})

console.log(isFinishEvery)
/* 
Thực hành tạo phương thức myEvery:  tạo ra phương thức myEvery hoạt động tương tự phương thức every2 và every
 */

Array.prototype.myEvery = function (cb) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this)
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output
}


//Expected results

const numbers2 = [1, 3, 3, 5];

console.log(numbers2.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true

console.log(numbers2.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false

console.log(numbers2.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true

















// TỰ ĐỊNH NGHĨA PHƯƠNG THỨC REDUCE VỚI CALLBACK SỬ DỤNG FOR-IN

var myArray = [1, 2, 3, [4, 5], 6, 7, [8, 9, 10]];

var myNumberArray = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callback, output) {

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            output = callback(output, this[index], index, this)
        }
    }
    return output
}


var flatArray = myArray.myReduce(function (output, item) {
    return output.concat(item)
}, [])

console.log(flatArray)


var sum = myNumberArray.myReduce(function (total, number) {
    return total + number
}, 0)

console.log(sum)












var mangs = [01, 12, 012, 12, 13, 14, 85, 96 ,36, 17]

Array.prototype.myFilter12 = function(callback) {
    var output12 = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
          var result12 = callback(this[index], index, this);
          if (result12) {
            return output12.push(this[index])
          } 
        }
    }
    return output12
}

var result_mang = mangs.myFilter12(function(mang) {
    return mang === 12
})

console.log(result_mang)

var result_mang1 = mangs.filter(function(mang) {
    return mang === 12
})

console.log(result_mang1)

