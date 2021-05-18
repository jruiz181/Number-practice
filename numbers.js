//step 1 select objects on screen & define globals//
const holes = document.querySelectorAll('.hole');
const scoreboard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startButton');
let lastHole;
let timeUp = false;
let score = 0;
let countdown;
let timeLimit = 2000
function pickRandomHole(holes) {
    const randomHole = Math.floor(Math.random() * holes.length);
    const hole = holes[randomHole];
    if (hole === lastHole){
        return(pickRandomHole(holes));
    }
    lastHole = hole;
    return hole;
}
//step 2 add class 'up'//
function popOut(){
    const time = Math.random() * 1200 + 400;
    const hole = pickRandomHole(holes);
    hole.classList.add('up');
    setTimeout(function(){
        hole.classList.remove('up');
        if (!timeUp) {
            popOut();
        }
    }, time);
}
//step 3 dynamically change text content to countdown//
function startGame() {
    countdown = timeLimit/20;
    scoreboard.textContent = 0;
    scoreboard.style.display = 'block';
    countdownBoard.textContent = countdown;
    timeUp = false;
    score = 0;
    popOut();
    setTimeout(function(){
        timeUp = true;
    }, timeLimit);
    let startCountdown = setInterval(function(){
        countdown -= 1;
        countdownBoard.textContent = countdown;
        if (countdown < 0){
            countdown = 0;
            clearInterval(startCountdown)
            countdownBoard.textContent = 'Times Up!! Thanks for assaulting tiny yodas.';
        }
    }, 1000)
}
//step 4 adding event listeners//
startButton.addEventListener('click', startGame);

function whack(e){
    score++;
    this.style.backgroundImage = 'url("yoda2.png")';
    this.style.pointerEvents = 'none';
    setTimeout(() =>{
        this.style.backgroundImage = 'url("yoda1.png")';
        this.style.pointerEvents = 'all';
    }, 800)
    scoreboard.textContent = score;
}
//step 5 keep track of score with forEach//
moles.forEach(mole => mole.addEventListener('click', whack));

//----------------function largest number-----------------

function large(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);
    
    var large = Math.max(num1, num2, num3, num4, num5, num6);

    output.innerHTML = large;

    return true
}

//-----------------function middle------------------------------

function middle(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);

}

//----------------Function duplicate--------------------

function duplicate(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);

    if(num1 === num2||num1 == num3||num1 == num4
    ||num1 == num5||num1 == num6){

    }
}
