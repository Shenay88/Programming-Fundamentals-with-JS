function evenAndOddSubtraction(arr) {

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    let sum = sumEven - sumOdd;
    console.log(sum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3,5,7,9]);