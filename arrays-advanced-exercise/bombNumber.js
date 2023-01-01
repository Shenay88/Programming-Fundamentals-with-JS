function bobmNumbers(arr1, arr2) {

    let specialBombNum = arr2.shift();
    let power = arr2.shift();

    while (arr1.includes(specialBombNum)) {

        let index = arr1.indexOf(specialBombNum);
        let elementsToRemove = power * 2 + 1;
        let startIndex = index - power;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }

        arr1.splice(startIndex, elementsToRemove);
    }

    let total = arr1.reduce((a, b) => a + b, 0)

    console.log(total)
}

bobmNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bobmNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3]);
bobmNumbers([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);