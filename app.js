let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let mssg = document.querySelector("#msg");
let mssgContainer = document.querySelector(".msg-container");

let turnO = true;

const winnPatterrns =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(turnO){
        box.innerText = "0";
        turnO = false;
       }else{
        box.innerText= "X";
        turnO = true;
       }
       box.disabled = true;
       checkWinner();
    });
});

const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
     turnO = true;
     enableBoxes();
     mssgContainer.classList.add("hide");
}

const showWinner = (winner) => {
  mssg.innerText = `Congrats , Winner  is ${winner}`;
  mssgContainer.classList.remove("hide");
  disableBtn();
}

checkWinner = () => {
    winnPatterrns.forEach((pattern) => {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if(box1 === "" || box2 === "" || box3 === "") return;

        if(box1 === box2 && box2 === box3){
            showWinner(box1);
           // alert(`Player ${box1} wins!`);
            
        }
    });
};

newGameBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click" , resetGame);

 