function nextDay(year, month, day) {

    let today = new Date (year, month - 1, day + 1);
    let y = today.getFullYear();
    let m = today.getMonth() + 1;
    let tommorow = today.getDate();

    console.log(`${y}-${m}-${tommorow}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);