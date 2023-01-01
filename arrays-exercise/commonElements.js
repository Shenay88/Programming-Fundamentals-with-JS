function commonElements(arr1, arr2) {

    for (let indexArr1 = 0; indexArr1 < arr1.length; indexArr1++) {
        
        for (let indexArr2 = 0; indexArr2 < arr2.length; indexArr2++) {

            if(arr1[indexArr1] === arr2[indexArr2]) {
                console.log(arr1[indexArr1]);
            }
        }
    }
}

commonElements
    (['Hey', 'hello', 2, 4, 'Peter', 'e'],
        ['Petar', 10, 'hey', 4, 'hello', '2']);