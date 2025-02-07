const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");



function generatePasswords() {
    let passwordOne = "";
    let passwordTwo = "";

    for (let i=0; i<15; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length) + 1]
        passwordTwo += characters[Math.floor(Math.random() * characters.length) + 1]
    }
    password1El.value = passwordOne;
    password2El.value = passwordTwo;
}