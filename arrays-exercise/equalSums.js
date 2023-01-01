function equalSums(arr) {

    let index = 'no';

    for (let i = 0; i < arr.length; i++) {
        
        let leftSum = 0;
        let rightSum = 0;

        for (let left = 0; left < i; left++) {
            leftSum = leftSum + arr[left];
            
        }

        for (let right = i + 1; right < arr.length; right++) {
            rightSum += arr[right];
        }

        if (leftSum === rightSum) {
            index = i;
        } 
    }

    console.log(index);
}

equalSums([1, 2, 3, 3])