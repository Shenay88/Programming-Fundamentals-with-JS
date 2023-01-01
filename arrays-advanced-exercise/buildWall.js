function buildWall(days) {

    let concrete = [];
    let sum = 0;

    while (days.length > 0) {

        let concretePerDay = 0;

        for (let i = 0; i < days.length; i++) {

            if (days[i] === 30) {
                days.splice(i, 1);
            }

            if (days[i] < 30) {
                days[i]++;
                concretePerDay += 195;
            }

        }

        if (concretePerDay > 0) {
            concrete.push(concretePerDay);
        }

        sum += concretePerDay;

    }

    console.log(concrete.join(', '));
    console.log(`${sum * 1900} pesos`);
}

buildWall([21, 25, 28]);
buildWall([17, 22, 17, 19, 17]);
buildWall([17])