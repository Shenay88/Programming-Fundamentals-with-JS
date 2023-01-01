function vacation (people, type, day) {
    let sum = 0;

    if (type === "Students") {

        if  (day === "Friday") {
            sum = people * 8.45;
        } else if (day === "Saturday") {
            sum = people * 9.80;
        } else {
            sum = people * 10.46;
        }

        if (people >= 30) {
            sum *= 0.85;
        }

    } else if (type === "Business") {

        if (people >= 100) {
            people -= 10;
        }

        if  (day === "Friday") {
            sum = people * 10.90;
        } else if (day === "Saturday") {
            sum = people * 15.60;
        } else {
            sum = people * 16;
        }

    } else {

        if  (day === "Friday") {
            sum = people * 15;
        } else if (day === "Saturday") {
            sum = people * 20;
        } else {
            sum = people * 22.50;
        }

        if (people >= 10 && people <= 20) {
            sum *= 0.95;
        }
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation (30,"Students","Sunday");
vacation (40,"Regular","Saturday");