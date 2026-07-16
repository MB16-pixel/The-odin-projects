const TicTacToe = {
  currentPlayer: "X",
  boardState: Array(9).fill(""),
  WINNING_COMBINATIONS : [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
  ],

  dom:{
    buttons : document.querySelectorAll("#btn"),
    res : document.getElementById("res"),
    // console.log(buttons), // returns a nodeList of all the buttons
  },

  playing(){
    this.dom.buttons.forEach((btn,index) => {
      btn.addEventListener('click', () => {
        if (btn.textContent.trim() !== "") {
          return; // This stops the function right here from changing the button value thats been clicked
        }
          else if(this.currentPlayer == "O"){
            btn.textContent = "X";
            this.currentPlayer = "X"
            this.boardState[index] = "X";
            this.result();
          }else{
            btn.textContent = "O";
            this.currentPlayer = "O"
            this.boardState[index] = "O";
            this.result();
          }
          // console.log(clicked);
      });
    });
  },

  result(){
    for(const combination of this.WINNING_COMBINATIONS){
      const [a,b,c] = combination;

      if (this.boardState[a] !== "" && this.boardState[a] === this.boardState[b] && this.boardState[b] === this.boardState[c]) {
        this.dom.res.textContent += `${this.boardState[a]} wins`;
        document.querySelector(".board").style.pointerEvents = "none";
        return;
      }
    }
  }
}

TicTacToe.playing();