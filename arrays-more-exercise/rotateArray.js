function rotateArray(arr) {

    let rotations = arr.pop();

    for (let i = 0; i < rotations; i++) {

        let num = arr.pop()
        arr.unshift(num);
    }

    let output = arr.join(' ');
    console.log(output);
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])