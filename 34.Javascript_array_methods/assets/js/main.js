var languages = [
    'Javasript',
    'PHP',
    'Ruby',
    ]

var languages2 = [
    'C#',
    'C++',
]

    // 1. To String
    console.log(languages.toString())
    console.log('')

    // 2. Join
    console.log(languages.join(', '))
    console.log(languages)
    console.log('')

    // 3. Pop
    console.log(languages.pop())
    console.log(languages)
    console.log('')

    // 4. Push
    console.log(languages.push('Ruby', 'Dart'))
    console.log(languages)
    console.log('')

    // 5. Shift
    console.log(languages.shift())
    console.log(languages)
    console.log('')

    // 6. Unshift
    console.log(languages.unshift('Javascript', 'C#'))
    console.log(languages)
    console.log('')

    // 7. Splicing
    // Xoá
    console.log(languages)
    languages.splice(1, 1);
    languages.splice(3, 1);
    console.log(languages)
    console.log('')

    // Chèn
    console.log(languages)
    languages.splice(3, 0, 'Dart');
    console.log(languages)
    console.log('')

    // 8. Concat
    console.log(languages)
    console.log(languages2)
    console.log(languages.concat(languages2))
    console.log(languages)
    console.log('')

    // 9. Slicing
    console.log(languages)
    console.log(languages.slice(2,4))
    // Áp dụng vào để copy mảng
    console.log(languages.slice(0))

