const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const draws = document.getElementById("draw-num");
const wins = document.getElementById("win-num");
const loses = document.getElementById("lose-num");
const result = document.getElementById("result");
const youMovePhoto = document.getElementById("youMovePhoto");
const computerMovePhoto = document.getElementById("computerMovePhoto");

let draws_var = 0;
let wins_var = 0;
let loses_var = 0;
let comp_move_var;
let player_move_var;

rock.onclick = function() {
    youMovePhoto.src = "images/rock.svg";
    player_move_var = 1;
    comp_move_var = Math.floor(Math.random() * 3) +1;
    if(comp_move_var==1) {
        computerMovePhoto.src = "images/rock.svg";
        draws_var+=1;
        draws.textContent = draws_var;
        result.textContent = "Draw";
    }
    else if(comp_move_var==2) {
        computerMovePhoto.src = "images/paper.svg";
        loses_var+=1;
        loses.textContent = loses_var;
        result.textContent = "Lose"
    }
    else {
        computerMovePhoto.src = "images/scissors.svg";
        wins_var+=1;
        wins.textContent = wins_var;
        result.textContent = "Win"
    }
}
paper.onclick = function() {
    youMovePhoto.src = "images/paper.svg";
    player_move_var = 2;
    comp_move_var = Math.floor(Math.random() * 3) +1;
    if(comp_move_var==1) {
        computerMovePhoto.src = "images/rock.svg";
        wins_var+=1;
        wins.textContent = wins_var;
        result.textContent = "Win"
    }
    else if(comp_move_var==2) {
        computerMovePhoto.src = "images/paper.svg";
        draws_var+=1;
        draws.textContent = draws_var;
        result.textContent = "Draw"
    }
    else {
        computerMovePhoto.src = "images/scissors.svg";
        loses_var+=1;
        loses.textContent = loses_var;
        result.textContent = "Lose"
    }
}

scissors.onclick = function() {
    youMovePhoto.src = "images/scissors.svg";
    player_move_var = 3;
    comp_move_var = Math.floor(Math.random() * 3) +1;
    if(comp_move_var==1) {
        computerMovePhoto.src = "images/rock.svg";
        loses_var+=1;
        loses.textContent = loses_var;
        result.textContent = "Lose"
    }
    else if(comp_move_var==2) {
        computerMovePhoto.src = "images/paper.svg";
        wins_var+=1;
        wins.textContent = wins_var;
        result.textContent = "Win"
    }
    else {
        computerMovePhoto.src = "images/scissors.svg";
        draws_var+=1;
        draws.textContent = draws_var;
        result.textContent = "Draw"
    }
}

