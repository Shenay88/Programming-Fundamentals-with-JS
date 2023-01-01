function magicSum(arr, magicNum) {

    for (let a = 0; a < arr.length; a++) {
        let currentNum = arr[a]

        for (let b = a + 1; b < arr.length; b++) {

            let nextNum = arr[b]

            if (currentNum + nextNum === magicNum) {
                console.log(currentNum,nextNum);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8],27);