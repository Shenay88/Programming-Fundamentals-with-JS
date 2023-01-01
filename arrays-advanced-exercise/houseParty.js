function houseParty(arr) {

    let guestList = [];

    for (const i of arr) {

        let newArr = i.split(' ');
        let guestName = newArr[0];

        if (newArr.length === 3) {
            if (guestList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guestList.push(guestName);
            }
        } else {

            if (!guestList.includes(guestName)) {
                console.log(`${guestName} is not in the list!`);
            } else {
                let removedName = guestList.indexOf(guestName);
                guestList.splice(removedName,1);
            }
        }
    }

    console.log(guestList.join('\n'));
}

// houseParty
//     (['Allie is going!',
//         'George is going!',
//         'John is not going!',
//         'George is not going!']);


houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)