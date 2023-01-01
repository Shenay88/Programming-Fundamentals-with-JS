function reverseString(str) {

    let newWord = "";

    for (let i = str.length - 1; i >= 0; i--) {

        newWord += `${str[i]}`;

    }
    console.log(newWord);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');