function searchForANumber(input1, input2) {

    let take = input2[0];
    let deleteElement = input2[1];
    let search = input2[2];

    let newArr = input1.splice(0, take);
    newArr.splice(0, deleteElement);

    let count = 0;

    for (const num of newArr) {

        if (num === search) {
            count++;
        }
    }

    console.log(`Number ${search} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);