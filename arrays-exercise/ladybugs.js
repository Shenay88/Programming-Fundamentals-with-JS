function ladybugs(arr) {
    let fieldSize = arr[0];
    let ladybugsPosition = arr[1].split(' ').map(Number);
    let finalBugsArray = Array(fieldSize).fill(0);

    for (let i = 0; i < fieldSize; i++) {

        let currentPosition = ladybugsPosition[i];

        if (currentPosition >= 0 && currentPosition < fieldSize) {

            finalBugsArray[currentPosition] = 1;
        }
    }
    
    for (let i = 2; i < arr.length; i++) {
        let [ladybugsIndex, direction, flyLength] = arr[i].split(' ');

        ladybugsIndex = +ladybugsIndex;
        flyLength = Number(flyLength);
        
        if (ladybugsIndex < 0 || ladybugsIndex >= finalBugsArray.length || finalBugsArray[ladybugsIndex] !== 1) {
            continue;
        }

        if (flyLength < 0) {

            flyLength = Math.abs(flyLength);

            if (direction === 'left') {
                direction = 'right';
            } else if (direction === 'right') {
                direction = 'left';
            }
        }

        finalBugsArray[ladybugsIndex] = 0;

        if (direction === 'right') {
           let newPosition = ladybugsIndex + flyLength;

            if (finalBugsArray[newPosition] === 1) {
                newPosition += flyLength;
            }

            if (newPosition < finalBugsArray.length) {
                finalBugsArray[newPosition] = 1;
            }
        } else {

            newPosition = ladybugsIndex - flyLength;

            if (finalBugsArray[newPosition] === 1) {
                newPosition -= flyLength;
            }

            if (newPosition >= 0) {
                finalBugsArray[newPosition] = 1;
            }
        }
    }
    console.log(finalBugsArray.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);