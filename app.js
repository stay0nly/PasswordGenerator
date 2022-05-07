let buttonEl = document.getElementById('button-el');
let resultEl = document.getElementById('result-el');


let symbol = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t" ,"u", "v", "w", "x", "y", "z", 0, 1, 2, 3 ,4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "&"]


buttonEl.addEventListener('click', function () {
    function generator() {
        let passwordLength = document.getElementById("passwordLength").value;
        
        let passwordString = ''
        for (let i = 0; i < passwordLength; i++) {
            let randomLetters = Math.floor(Math.random() * symbol.length);
            passwordString = passwordString + symbol[randomLetters];                      
        }      
        return passwordString; 
    }

    let passwordContainer = document.getElementsByClassName('password');
    for (let j = 0; j < passwordContainer.length; j++) {
        passwordContainer[j].textContent = generator();
    }
});

