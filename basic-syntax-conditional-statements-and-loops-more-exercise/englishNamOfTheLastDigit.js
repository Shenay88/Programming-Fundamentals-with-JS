function englishNamOfTheLastDigit(num) {

    let digit = num.toString();
    let lastDigit = digit.length - 1;
    let result = Number(digit[lastDigit]);
    let a = "";

    switch (result) {
        case 0: a = 'zero'; break;
        case 1: a = 'one'; break;
        case 2: a = 'two'; break;
        case 3: a = 'three'; break;
        case 4: a = 'four'; break;
        case 5: a = 'five'; break;
        case 6: a = 'six'; break;
        case 7: a = 'seven'; break;
        case 8: a = 'eight'; break;
        case 9: a = 'nine'; break;
    }

    console.log(a);  
}

englishNamOfTheLastDigit(512);
englishNamOfTheLastDigit(1643);
englishNamOfTheLastDigit(169)