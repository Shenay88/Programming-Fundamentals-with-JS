function nonDecreasingSubset(arr) {

    let result = [];
    let startNum = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < arr.length; i++) {
        
        let currentNum = arr[i];

        if (currentNum >= startNum) {
            startNum = currentNum;
            result.push(startNum);
        } else {
            continue;
        }
    }
    console.log(result.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);