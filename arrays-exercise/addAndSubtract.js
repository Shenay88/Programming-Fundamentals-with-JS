function addAndSubtract(arr) {

    let originalArrSum = 0;
    let modifiedArrSum = 0;
    let modifiedArr = [];

    for (let i = 0; i < arr.length; i++) {

        let even = arr[i] + i;
        let odd = arr[i] - i;

        if (arr[i] % 2 === 0) {
            modifiedArr.push(even);
        } else {
            modifiedArr.push(odd);
        }

        originalArrSum += arr[i];
        modifiedArrSum += modifiedArr[i];
    }

    console.log(modifiedArr);
    console.log(originalArrSum);
    console.log(modifiedArrSum);
}

addAndSubtract ([5, 15, 23, 56, 35]);