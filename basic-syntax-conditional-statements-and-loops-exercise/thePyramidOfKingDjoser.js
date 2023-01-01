function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let rowCount = 0

    for (let blocks = base; blocks > 0; blocks -= 2) {

        rowCount++;

        if (blocks <= 2) {
            gold = (blocks**2) * increment;
            break;
        }

        let innerBlocks = (blocks * 4) - 4;

        if (rowCount % 5 === 0) {
            lapisLazuli += innerBlocks * increment;
        } else {
            marble += innerBlocks * increment;
        }

        stone += ((blocks**2) - innerBlocks) * increment;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(rowCount * increment)}`);
}

thePyramidOfKingDjoser(23, 0.5);