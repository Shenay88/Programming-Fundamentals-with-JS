function firstAndLastKNumbers(arr) {
    let elementK = arr.shift();

    let first = arr.slice(0, elementK);
    let second = arr.slice(arr.length - elementK);

    console.log(first.join(' '));
    console.log(second.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);