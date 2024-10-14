const Input_number = document.querySelector('.display');
const form = document.querySelector('.form');
const output = document.querySelector('.output');
const guesses = document.querySelector('.guesses');
const submit = document.querySelector('.submitbtn');
const start = document.querySelector('.startgamebtn');

const Allguesses =[];

function maincode() {
let randomnumber = Math.round(Math.random() * 100);
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userinputvalue = parseInt(Input_number.value )

    if ( userinputvalue > randomnumber){
       output.innerHTML = ("It's high number");
    }
    else if ( userinputvalue < randomnumber){
        output.innerHTML = ("It's low number");   
    }     
    else{
       output.innerHTML = ("You got it! Congratulations!!!");
       start.disabled = false;
       submit.disabled = true;
    }
    Allguesses.push(userinputvalue);
     guesses.innerHTML = "Your guesses :" +  Allguesses.join(', ');
     Input_number.value = '';
    
});

 start.addEventListener('click' , () => {
    guesses.innerHTML = '';
    output.innerHTML =  '';
    start.disabled = true;
    submit.disabled = false;
    randomnumber = Math.round(Math.random() * 100);
 })
}
maincode();