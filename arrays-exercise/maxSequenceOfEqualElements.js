function maxSequenceOfEqualElements(arr) {
    let length = arr.length;
    let series = 0;
    let maxCounter = 0;

    for (let i = 0; i < length; i++) {
        let currrentNum = arr[i];
        let counter = 1;

        for (let a = i + 1; a < length; a++) {
            let nextNum = arr[a];

            if (currrentNum === nextNum) {
                counter++;
            } else {
                break;
            }
        }

        if (counter > maxCounter) {
            maxCounter = counter;
            series = String(arr[i]);
        }
    }

    console.log((series + ' ').repeat(maxCounter));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);