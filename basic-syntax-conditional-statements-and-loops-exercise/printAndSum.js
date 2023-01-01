function printAndSum (start, end) {
    let sum = 0;
    let currentNum = "";

    for (let num = start; num <= end; num++) {
        currentNum += `${num} `
        sum += num;
    }

    console.log(currentNum);
    console.log(`Sum: ${sum}`); 
}

printAndSum (50,60);