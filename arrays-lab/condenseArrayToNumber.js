function condenseArrayToNumber(arr) {

    let index = 0;
    let res1 = [];

    while (arr.length > 1) {

        if (typeof arr[index+1] === 'undefined') {
            arr = res1;
            res1 = [];
            index = 0;
        }

        res1[index] = Number(arr[index]) + Number(arr[index + 1]);
        index++;
    }
    console.log(Number(arr[0]));
}

condenseArrayToNumber([2, 10, 3]);
// condenseArrayToNumber([5,0,4,1,2]);
// condenseArrayToNumber([1]);