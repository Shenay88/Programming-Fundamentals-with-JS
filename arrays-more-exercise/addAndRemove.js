function addAndRemove(arr) {

    let num = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let type = arr[i];
        num += 1;

        if (type === 'add') {
            result.push(num);
            
        } else if (type === 'remove') {
            result.pop(num);
            continue;
        } 
    }

    result = result.join(' ');

    if (result < 1) {
        console.log('Empty')
    } else {
        console.log(result);
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);