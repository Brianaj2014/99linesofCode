// document.body.addEventListener(DOMContentLoaded, function() {
let button = document.querySelector(".class")
button.addEventListener("click", function() {
    let friends = ['Briana', 'Tishey', 'Terrence', 'Tristan', 'Tythan'];
        
    for (let index = 0; index < friends.length; index++) {
        // function SingTheSong() {
            for (let count = 99; count >0; count --){
                if (count ==1) {
                    lines = "lines";
                }
                if (count ==2) {
                    console.log(count + "lines of code in the file! " + count + "lines of code!" + friends[index] + " Take one down, clears it all out... " + (count -1) + " no more lines of code in the file!")
                    // const friend = ('Briana', 'Tishey', 'Terrence', 'Tristan', 'Tythan'[index])
                    
                } else if (count ===1) {
                    console.log(count + "line of code in the file! " + count + 
                    " line of code! "+ friends[index] + " Take one down, clears it all out... " + (count -1) + " no more line of code in the file!")
                    
                } else {
                    console.log(count + "lines of code in the file! " + count + 
                    " lines of code! "+ friends[index] + " Take one down, clears it all out... " + (count - 1) + " no more line of code in the file!")
                }
            }
        }

})
        // const friend = friends[index];
        // let num = 99;
        // while (num >=1) {
            
            
        //     num--;
        // }
    
    // SingTheSong(friends) //
// })


