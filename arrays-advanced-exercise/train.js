function train(arr) {

    let wagonsCount = arr.shift().split(' ').map(Number);
    let maxPassengers = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let currentRow = arr[i].split(' ');

        if (currentRow[0] === 'Add') {
            let newPassenger = Number(currentRow[1])
            wagonsCount.push(newPassenger);
            
        } else {

            for (j = 0; j < wagonsCount.length; j++) {

                if ((wagonsCount[j]) + Number(currentRow[0]) <= maxPassengers) {
                    wagonsCount[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }

    console.log(wagonsCount.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);