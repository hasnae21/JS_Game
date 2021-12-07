// randome number with Math random
        var randomNumber= Math.floor(Math.random() * 100)+1;
        console.log(randomNumber);
// DOM
const divBonde = document.querySelector('.bonde');
const message = document.getElementById('message');
const form= document.getElementById('input_nbr');
const input= document.getElementById('number');
const btnplay = document.getElementById('btnplay');
const btnreplay = document.getElementById('btnreplay');
const label = document.getElementById('label');
let counter = document.querySelector('.counte');

// Initialiser mon compteur de tentatives i
let i = 10;
// Game one

const play = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val_Input = parseInt(input.value);
        if ( val_Input === randomNumber && i<=2  && i<11){
                message.textContent = "Well done, you are a genius !!!";
                btnreplay.style.display = "block";
                btnplay.style.display = "none";
                label.style.display= "none";
        }else if(val_Input === randomNumber && i>2 && i<11){
                message.textContent = `Congratulations, you won after ${10-i} tries`;
                btnreplay.style.display = "block";
                btnplay.style.display = "none";
                label.style.display= "none";
        }
        if( val_Input !== randomNumber){
            if(val_Input < randomNumber && i<11){
                message.textContent = `the number is smaller, choose a higher one`;
                btnreplay.style.display = "none";

            }else if(val_Input > randomNumber  && i<11){
                message.textContent = `the number is larger, choose a smaller one`;
                btnreplay.style.display = "none";

            }
            i--;
            verifyloose();  
        }
        counter.innerHTML=i;  
    })
    const verifyloose = () => {
        if (i === 0) { 
            btnplay.setAttribute("disabled", "");
            message.textContent = `Game over. the answer was
             ${randomNumber}`;
            btnplay.style.display = "none";
            btnreplay.style.display = "block";
            label.style.display= "none";
        }
    }
    btnreplay.addEventListener('click',() =>{
        document.location.reload(true);
    })
}
play();
