function sumEvenNumbers(arr) {

    let sumEven = 0;
    
    for (let i = 0; i < arr.length; i ++) {
        let num = Number(arr[i]);

        if(num % 2 === 0) {
            sumEven += num;
        } 
    }
    console.log(sumEven);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3','5','7','9'])