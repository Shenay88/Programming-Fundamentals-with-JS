function reverseInPlace(arr) {

    let res = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        res += `${arr[i]} `;
    }

    console.log(res);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);