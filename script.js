const cellAll=document.querySelectorAll('.cell')
const txt = document.querySelector('.txt')
const reset = document.querySelector('.btn')
const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let optons = ["","","","","","","","","",];
let currentPly = "X";
let running = false;

initializeGame()

function initializeGame(){
 cellAll.forEach(cell=>cell.addEventListener("click", cellClick))
 reset.addEventListener("click",resetGamez)
 txt.textContent = `${currentPly}' s turn`
 running = true
}

function cellClick(){
const cellIndex = this.getAttribute("cellIndex");

    if(optons[cellIndex] != "" || !running){
    return
   }

   updateCell(this, cellIndex);
   checkWin();
}

function updateCell(cell, index){
   optons[index] = currentPly;
   cell.textContent = currentPly
}

function changePly(){
        currentPly = (currentPly == "X")?"0" : "X";
        txt.textContent =`${currentPly} 's turn`
}

function checkWin(){

    let roundWon = false;

    for(let i=0;i < wins.length; i++){
        const condition = wins[i];
        const cellA = optons[condition[0]];
        const cellB = optons[condition[1]];
        const cellC = optons[condition[2]];

        if(cellA ==""|| cellB ==""|| cellC ==""){
            continue;
        }
        if(cellA == cellB && cellB ==cellC){
            roundWon = true;
            break
        }
    }
    if(roundWon){
        txt.textContent = `${currentPly} wins!...`
        running = false
    }
    else if(!optons.includes("")){
        txt.textContent = "Draw---";
        running =false
    }
    else{
        changePly()
    }

}

function resetGamez(){
    currentPly = "X";
    optons = ["","","","","","","","","",];
    txt.textContent = `${currentPly}' s turn`;
    cellAll.forEach(cell=>cell.textContent = "");
    running = true;
}