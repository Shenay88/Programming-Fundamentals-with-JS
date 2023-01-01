function arrayManipulator(mainArr, commands) {

    for (const line of commands) {
        let [command, ...data] = line.split(' ');

        if (command === 'add') {
            let index = Number(data[0]);
            let element = Number(data[1]);

            mainArr.splice(index, 0, element);

        } else if (command === 'addMany') {
            let index = data.shift()
            let nums = [...data].map(Number);

            mainArr.splice(index, 0, ...nums);

        } else if (command === 'contains') {
            let index = mainArr.indexOf(Number(data[0]));

            if (index > -1) {
                console.log(index);
            } else {
                console.log(-1);
            }

        } else if (command === 'remove') {
            let index = Number(data[0]);

            mainArr.splice(index, 1);

        } else if (command === 'shift') {

            let position = Number(data[0]);

            for (let i = 0; i < position; i++) {

                let element = mainArr.shift();
                mainArr.push(element);
            }

        } else if (command === 'sumPairs') {

            let newArr = [];

            for (let i = 0; i < mainArr.length; i += 2) {
                let num1 = mainArr[i];
                let num2 = mainArr[i + 1];

                if (num2 === undefined) {
                    num2 = 0;
                }

                newArr.push(num1 + num2);
            }
            mainArr = newArr;

        } else if (command === 'print') {
            console.log(`[ ${mainArr.join(', ')} ]`);
        }
    }
}

// arrayManipulator
//     ([1, 2, 4, 5, 6, 7],
//         ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"])