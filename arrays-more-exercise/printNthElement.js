function printNthElement(arr) {

    let step = arr.pop();
    let result = '';
    
    for (let i = 0; i < arr.length; i++) {
        
        if (i % step === 0) {
            result += `${arr[i]} `
        }
    }
    console.log(result)
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);