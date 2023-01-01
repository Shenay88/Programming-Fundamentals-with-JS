function arrayRotation(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let res = arr.shift();
        arr.push(res)
    }

    let output = arr.join(' ');

    console.log(output);
}

arrayRotation([51, 47, 32, 61, 21], 2);