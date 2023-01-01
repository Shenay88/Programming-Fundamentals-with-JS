function arrayManipulations(arr) {

    let newArr = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let [command, firstnumber, secondNumber] = arr[i].split(' ');

        switch (command) {
            case 'Add': newArr.push(firstnumber); break;
            case 'Remove': newArr = newArr.filter(num => num !== firstnumber); break;
            case 'RemoveAt': newArr.splice(firstnumber, 1); break;
            case 'Insert': newArr.splice(secondNumber, 0, firstnumber); break;
        }
    }

    console.log(newArr.join(' '));
}

arrayManipulations
    (['4 19 2 53 6 43',
        'Add 3',
        'Remove 2',
        'RemoveAt 1',
        'Insert 8 3']
    );