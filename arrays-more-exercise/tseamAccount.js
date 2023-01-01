function tseamAccount(arr) {
    let games = arr[0].split(' ');
    index = 1;

    while (arr[index] !== 'Play!') {

        let newResults = arr[index].split(' ');
        let typeOfFunction = newResults[0];
        let gameName = newResults[1];
        let counter = 0;

        for (let i = 0; i < games.length; i++) {
            
            if (gameName === games[i]) {
                counter++;
            }
            
            if (gameName === games[i] && typeOfFunction === 'Uninstall') {
                games.splice(i,1);
                break;
            }

            if (gameName === games[i] && typeOfFunction === 'Update') {
                games.splice(i,1);
                games.push(gameName);
                break;
            }

        }

        if (counter === 0 && typeOfFunction === 'Install') {
            games.push(gameName);
        }

        if (typeOfFunction === 'Expansion') {
            let expansion = gameName.split('-'); 
            let newGameName = expansion[0]
            
            if (games.includes(newGameName)) {
                let newName = expansion.join(':');
                let indexInarr = games.indexOf(newGameName);
                games.splice(indexInarr + 1, 0 , newName)
            }
        }

        index++;
    }

    console.log(games.join(' '));
}

tseamAccount
    (['CS WoW Diablo',
        'Install LoL',
        'Uninstall WoW',
        'Update Diablo',
        'Expansion CS-Go',
        'Play!']);