function equalNeighbors(input) {

    let count = 0;

    for (let a = 0; a < input.length; a++) {

        let arr = input[a]
        let arr2 = input[a + 1]

        for (let b = 0; b < arr.length; b++) {

            if (arr[b] === arr[b + 1]) {
                count++;
            }

            if (arr2 !== undefined) {

                if (arr[b] === arr2[b]) {
                    count++;
                }
            
            }
        }
    }

    console.log(count);
}

equalNeighbors(
    [['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']]);

equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
)

equalNeighbors(
    [['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']])




