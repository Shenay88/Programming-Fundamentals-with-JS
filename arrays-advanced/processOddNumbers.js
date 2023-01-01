function processOddNumbers(arr) {

    let result = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            result = arr[i] * 2;
            newArr.push(result);
        }
    }

    console.log(newArr.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3])