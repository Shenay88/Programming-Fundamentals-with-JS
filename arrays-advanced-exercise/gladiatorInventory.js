function gladiatorInventory(input) {

    let inventory = input.shift().split(' ');

    for (const line of input) {

        let [command, equipment] = line.split(' ');

        if (command === 'Buy') {

            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }

        } else if (command === 'Trash') {

            let index = inventory.indexOf(equipment);
            
            if (index > -1) {
                inventory.splice(index, 1);
            }
            
        } else if (command === 'Repair') {

            let index = inventory.indexOf(equipment);
            
            if (index > -1) {
                inventory.splice(index, 1);
                inventory.push(equipment);
            }

        } else if (command === 'Upgrade') {

            let [oldEquipment, upgrade] = equipment.split('-');
            let newEquipment = `${oldEquipment}:${upgrade}`;

            let index = inventory.indexOf(oldEquipment);
            
            if (index > -1) {
                inventory.splice(index + 1, 0, newEquipment);
            } 
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);