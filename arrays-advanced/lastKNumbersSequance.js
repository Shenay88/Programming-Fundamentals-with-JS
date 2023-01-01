function lastKNumbersSequance(sequence, elementK) {

    let sequenceArr = [1];

    for (let i = 1; i < sequence; i++) {

        let startIndex = Math.max(sequenceArr.length - elementK, 0);
        let lastElements = sequenceArr.slice(startIndex);
        let result = 0;

        for (const element of lastElements) {
            result += element;
        }

        sequenceArr.push(result);
    }

    console.log(sequenceArr.join(' '));
}

lastKNumbersSequance(6, 3);