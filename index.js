const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const draws = document.getElementById("draw-num");
const wins = document.getElementById("win-num");
const loses = document.getElementById("lose-num");
const comp_move = document.getElementById("comp-move");
const player_move = document.getElementById("player-move");
const result = document.getElementById("result");

let draws_var = 0;
let wins_var = 0;
let loses_var = 0;
let comp_move_var;
let player_move_var;

rock.onclick = function() {
    player_move_var = 1;
    comp_move_var = Math.floor(Math.random() * 3) +1;
    if(comp_move_var==1) {
        draws_var+=1;
        draws.textContent = draws_var;
        comp_move.textContent = "Rock";
        player_move.textContent = "Rock";
        result.textContent = "Draw"
    }
    else if(comp_move_var==2) {
        loses_var+=1;
        loses.textContent = loses_var;
        comp_move.textContent = "Paper";
        player_move.textContent = "Rock";
        result.textContent = "Lose"
    }
    else {
        wins_var+=1;
        wins.textContent = wins_var;
        comp_move.textContent = "Scissors";
        player_move.textContent = "Rock";
        result.textContent = "Win"
    }
}
paper.onclick = function() {
    player_move_var = 2;
    comp_move_var = Math.floor(Math.random() * 3) +1;
    if(comp_move_var==1) {
        wins_var+=1;
        wins.textContent = wins_var;
        comp_move.textContent = "Rock";
        player_move.textContent = "Paper";
        result.textContent = "Win"
    }
    else if(comp_move_var==2) {
        draws_var+=1;
        draws.textContent = draws_var;
        comp_move.textContent = "Paper";
        player_move.textContent = "Paper";
        result.textContent = "Draw"
    }
    else {
        loses_var+=1;
        loses.textContent = loses_var;
        comp_move.textContent = "Scissors";
        player_move.textContent = "Paper";
        result.textContent = "Lose"
    }
}

scissors.onclick = function() {
    player_move_var = 3;
    comp_move_var = Math.floor(Math.random() * 3) +1;
    if(comp_move_var==1) {
        loses_var+=1;
        loses.textContent = loses_var;
        comp_move.textContent = "Rock";
        player_move.textContent = "Scissors";
        result.textContent = "Lose"
    }
    else if(comp_move_var==2) {
        wins_var+=1;
        wins.textContent = wins_var;
        comp_move.textContent = "Paper";
        player_move.textContent = "Scissors";
        result.textContent = "Win"
    }
    else {
        draws_var+=1;
        draws.textContent = draws_var;
        comp_move.textContent = "Scissors";
        player_move.textContent = "Scissors";
        result.textContent = "Draw"
    }
}

