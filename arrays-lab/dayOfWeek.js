function dayOfWeek(numDay) {
    
   let day = "";

   switch (numDay) {
    case 1: day = 'Monday'; break;
    case 2: day = 'Tuesday'; break;
    case 3: day = 'Wednesday'; break;
    case 4: day = 'Thursday'; break;
    case 5: day = 'Friday'; break;
    case 6: day = 'Saturday'; break;
    case 7: day = 'Sunday'; break;
    default: console.log('Invalid day!'); break;
}
console.log(day);
    
}

dayOfWeek(3)