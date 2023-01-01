function sumFirstAndLastArrayElements(input) {
    let first = input[0];
    let last = input[input.length - 1];
    let total = first + last;

    console.log(total);
}

sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);