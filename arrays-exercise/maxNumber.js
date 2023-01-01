function maxNumber(arr) {

    let result = '';

    for (let first = 0; first < arr.length; first++) {

        let currentnum = arr[first];
        let isBigger = true;

        for (let second = first + 1; second < arr.length; second++) {

            if (currentnum <= arr[second]) {
                isBigger = false;
            }
        }

        if (isBigger) {
            result += `${currentnum} `
        }
    }
    
    console.log(result);
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);