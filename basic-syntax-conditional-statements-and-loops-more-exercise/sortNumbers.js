function sortNumbers (input0, input1, input2) {

    let array = [input0, input1, input2];

    let num = array.sort();
    num = num.reverse();
   
    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);
}

sortNumbers(2,1,3);
sortNumbers(-2,1,3);