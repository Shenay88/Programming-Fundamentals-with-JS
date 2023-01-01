function bitcoinMining(input) {
    index = 0;
    let gold = 0;
    let total = 0;
    let dayCounter = 0;
    let btcCounter = 0;
    let buyDay = 0;

    while (index < input.length) {

        gold = input[index];

        dayCounter++;

        if (dayCounter % 3 === 0) {
            gold *= 0.70;
        }

        total += gold * 67.51;

        while (total >= 11949.16) {

            btcCounter++;
            total -= 11949.16;

            if (btcCounter === 1) {
                buyDay = dayCounter;
            }
        }

        index++;
    }

    console.log(`Bought bitcoins: ${btcCounter}`);

    if (buyDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${buyDay}`);
    }
    console.log(`Left money: ${total.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining ([50,100]);
bitcoinMining([3124.15, 504.212, 2511.124]);