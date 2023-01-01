function login(input) {

    let username = input[0];
    let correctPassword = "";
    let counter = 0;

    for (let password = username.length; password >= 1; password--) {
        correctPassword += username[password - 1];
    }

    for (let i = 1; i <= input.length; i++) {

        if (input[i] === correctPassword) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            counter++;

            if (counter > 3) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log("Incorrect password. Try again.");
        }
    }
}

login (['Acer','login','go','let me in','recA']);
 login (['momo','omom']);
//login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);