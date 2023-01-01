function sorting(arr) {

    let sortedNum = arr.sort((a,b) => a-b);
    let newArr = [];

    while (0 < sortedNum.length) {

        let lastNumber = sortedNum.pop();
        let firstNumber = sortedNum.shift();

        newArr.push(lastNumber, firstNumber);
    }

    console.log(newArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);