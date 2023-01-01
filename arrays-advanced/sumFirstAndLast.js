function sumFirstAndLast (arr) {

    let firstNum = arr.shift();
    let lastNum = arr.pop();
    let total = Number(firstNum) + Number(lastNum);

    console.log(total);
    
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10'])