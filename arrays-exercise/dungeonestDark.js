function dungeonestDark(arr) {

    let rooms = arr[0].split('|');
    let health = 100;
    let roomsCounter = 0;
    let win = true;
    let totalCoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        roomsCounter++;
        let roomContents = rooms[i].split(' ');

        let type = roomContents[0];
        let num = Number(roomContents[1]);

        if (type === 'potion') {

            let healthbefore = health;
            health += num;
        
            if (health >= 100) {
                num = 100 - healthbefore;
                health = 100
            }
    
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
            continue;
        }

        if (type === 'chest') {

            let coins = num;
            totalCoins += coins;

            console.log(`You found ${coins} coins.`);
        }

        if (type !== 'chest' && type !== 'potion') {

            health -= num;

            if (health > 0) {
                console.log(`You slayed ${type}.`);
            } else {
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${roomsCounter}`);
                win = false;
                break;
            }
        }
    }

    if (win) {
        console.log("You've made it!");
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);