function magicMatrices(mainArr) {

    let isMatrix = true;

    for (let i = 0; i < mainArr.length - 1; i++) {

        let sumFirstRow = mainArr[i].reduce((a, b) => a + b, 0);
        let sumSecondRow = mainArr[i + 1].reduce((a, b) => a + b, 0);
        let columnFirstSum = 0;
        let columnSecondSum = 0;

       for (let j = 0; j < mainArr.length; j++) {

        columnFirstSum += mainArr[i][j];
        columnSecondSum += mainArr[i + 1][j];

       }

        if (sumFirstRow !== sumSecondRow || columnFirstSum !== columnSecondSum) {
            console.log(!isMatrix);
            return;
        }
    }

    console.log(isMatrix);
}

magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);


magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);