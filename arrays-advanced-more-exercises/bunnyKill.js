function bunnyKill(input) {

    let coordinates = input.pop().split(' ').map((value) => {
        let [row, position] = value.split(',');
        return [parseInt(row), parseInt(position)];
    });

    console.log(row)
}

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'])