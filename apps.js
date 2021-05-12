let friends = ['Briana', 'Tishey', 'Terrence', 'Tristan', 'Tythan'];



for (let index = 0; index < friends.length; index++) {
    // const friend = friends[index];
    let num = 99;
    while (num >=1) {
        
        if (num ==2) {
            console.log(num + "bottles of juice on the wall! " + num + "bottles of juice!" + friends[index] + " Take one down, pass it around... " + (num -1) + " bottle of juice on the wall!")
            // const friend = ('Briana', 'Tishey', 'Terrence', 'Tristan', 'Tythan'[index])
            
        } else if (num ===1) {
            console.log(num + "bottle of juice on the wall! " + num + 
            " bottle of juice! "+ friends[index] + " Take one down, pass it around... " + (num -1) + " bottles of juice on the wall!")
            
        } else {
            console.log(num + "bottles of juice on the wall! " + num + 
            " bottles of juice! "+ friends[index] + " Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!")
        }
        
        num--;
    }
    }


