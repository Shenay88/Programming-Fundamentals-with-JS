function division (num) {
    let n = 0;

    if (num % 10 === 0) {
        n = 10;
    } else if (num % 7 === 0) {
        n = 7;
    } else if (num % 6 === 0) {
        n = 6;
    } else if (num % 3 === 0) {
        n = 3;
    } else if ( num % 2 === 0) {
        n = 2;
    } else {
        console.log(`Not divisible`);
        return;
    }
    console.log(`The number is divisible by ${n}`);
}

division (1643)