// randome number with Math random
        var randomNumber= Math.floor(Math.random() * 100)+1;
        console.log(randomNumber);
// DOM
const message = document.getElementById('message');
const form= document.getElementById('input_nbr');
const input= document.getElementById('number');
const btnplay = document.getElementById('btnplay');
const btnreplay = document.getElementById('btnreplay');
const label = document.getElementById('label');
let tries=document.getElementById('attempts');
let counter = document.querySelector('.counte');
let GifTW = document.querySelector('.imageTW');
let GifW = document.querySelector('.imageW');
let GifL = document.querySelector('.imageL');

// Initialiser mes compteurs de tentatives i AND j
let j = 1;
let i = 9;
i= 10-j; 
// Game one
const play = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val_Input = parseInt(input.value);
        if ( val_Input === randomNumber && j<3 ){
                message.innerHTML = `Well done, you are a genius !!!`;
                btnreplay.style.display = "block";
                btnplay.style.display = "none";
                label.style.display= "none";
                tries.style.display= "none";
                input.style.display= "none";
                GifTW.style.display = "block";
        }else if(val_Input === randomNumber && j>2 ){
                message.innerHTML = `Congratulations,<br> you won after ${j} attempts`;
                btnreplay.style.display = "block";
                btnplay.style.display = "none";
                label.style.display= "none";
                tries.style.display= "none";
                input.style.display= "none";
                GifW.style.display = "block";
        }
        if( val_Input !== randomNumber){
            if(val_Input < randomNumber ){
                message.textContent = `The number is smaller, choose a higher one`;
                btnreplay.style.display = "none";
                tries.style.display= "flex";
            }else if(val_Input > randomNumber  ){
                message.textContent = `The number is larger, choose a smaller one`;
                btnreplay.style.display = "none";
                tries.style.display= "flex";
            }
            verifyloose();  
        }
        i--;
        j++;
        counter.innerHTML= i+1;  
    })
    const verifyloose = () => {
        if (j === 10) { 
            btnplay.setAttribute("disabled", "");
            message.innerHTML = `Game over.<br/> the answer was ${randomNumber}`;
            btnplay.style.display = "none";
            btnreplay.style.display = "block";
            label.style.display= "none";
            input.style.display= "none";
            tries.style.display= "none";
            GifL.style.display = "block";
        }
    }
    btnreplay.addEventListener('click',() =>{
        document.location.reload(true);
    })
}
play();
