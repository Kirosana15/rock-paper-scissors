const playerBtns = document.querySelectorAll(".player");

playerBtns.forEach(btn => btn.addEventListener('click', game));

const cpuBtns = document.querySelectorAll(".player");

const playerScr = document.querySelector(".playerScore");
const cpuScr = document.querySelector(".cpuScore");

const choices = ["rock", "paper", "scissors"]
let playerScore = cpuScore = 0
function game (e) {
    let playerChoice = this.getAttribute('id');
    let last = document.querySelector('.player.played');
    if(last) last.classList.remove('played');
    this.classList.add('played');

    let cpuChoice = choices[Math.floor(Math.random()*3)]
    let cpuBtn = document.querySelector(".cpu#"+cpuChoice);
    let cpuLast = document.querySelector('.cpu.played');
    console.log(cpuLast)
    if(cpuLast) cpuLast.classList.remove('played');
    cpuBtn.classList.add('played');

    round(playerChoice, cpuChoice);

    playerScr.textContent = playerScore;
    cpuScr.textContent = cpuScore;
    //console.log(playerChoice, cpuChoice)
}
function round(player, cpu){
    let res
    switch (player) {
        case 'rock':
            switch (cpu){
                case 'rock':
                    res = 0
                    break
                case 'paper': 
                    res = -1
                    break
                case 'scissors':
                    res = 1
                    break
            }
            break;
        case 'paper':
            switch (cpu){
                case 'rock':
                    res = 1
                    break
                case 'paper': 
                    res = 0
                    break
                case 'scissors':
                    res = -1
                    break
            }
            break;
        case 'scissors': 
            switch (cpu){
                case 'rock':
                    res = -1
                    break
                case 'paper': 
                    res = 1
                    break
                case 'scissors':
                    res = 0
                    break
            }
            break;
    }
    console.log("Player choice: "+ player + " CPU choice: "+cpu)
    playerScore += ((res > 0) ? res : 0)
    cpuScore -= ((res < 0) ? res : 0)
    if (res == 0){
        console.log("It's a tie")
    }
    else if (res > 0){
        console.log("You win!")
    }
    else {
        console.log("You lose!")
    }
    console.log("Player score: " + playerScore)
    console.log("CPU score: " + cpuScore)
}