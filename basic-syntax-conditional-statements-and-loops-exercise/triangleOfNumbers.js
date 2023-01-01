function triangleOfNumbers (num) {

    for (let a = 1; a <= num; a++) {

        let triangle = "";

        for (let b = 1; b <= a; b++) {

            triangle += `${a} `;
        }

        console.log(triangle)
    }
}

triangleOfNumbers (6);