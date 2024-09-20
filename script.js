let boxex = document.querySelectorAll(".boxes");
let resetbtn  = document.querySelector("#reset");
let winnername = document.querySelector(".winner");


let playerO = true;

let playerwins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]


boxex.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked")
        if(playerO){
            box.innerText = "O";
            playerO = false;
        }
        else{
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        winner();
    })
})

const winner = () => {
    for(pattern of playerwins){
        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxex[pattern[0]], boxex[pattern[1]], boxex[pattern[2]]);
        let pos1val= boxex[pattern[0]].innerText;
        let pos2val= boxex[pattern[1]].innerText;
        let pos3val= boxex[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                // console.log("winner", pos1val);
                winnername.innerHTML = `Congratulations! The winner is ${pos1val}`;
            }
        }
    }
}

resetbtn.addEventListener("click", () => {
    resetgame();  // call the reset function to reset the game  //
})
const resetgame = () => {
    boxex.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winnername.innerHTML = "Welcome to Tic Tac Toe!";
    playerO = true;
 
}