var courses = [
    {
        name: 'Javascript',
        coin: 10,
    },
    {
        name: 'PHP',
        coin: 20,
    },
    {
        name: 'React JS',
        coin: 30,
    },
    {
        name: 'Ruby',
        coin: 40,
    },
];

function coinHandler(accumulator, currentValue, currentIndex) {
    console.log(currentIndex + 1, currentValue.coin)
    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandler, 0);

console.log(`Tong so coin la: ${totalCoin}`);