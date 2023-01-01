function listOfProducts(arr) {

    let sortByName = arr.sort();

    for (let i = 0; i < sortByName.length; i++) {
        console.log(`${i + 1}.${sortByName[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);