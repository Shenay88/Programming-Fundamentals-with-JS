function multiplicationTable (num) {
    let result = "";

    for (let a = 1; a <= 10; a++) {
        result = num * a;
        console.log (`${num} X ${a} = ${result}`);
    }
}

multiplicationTable (5)