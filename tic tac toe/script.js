const buttons = document.querySelectorAll("#btn");
console.log(buttons) // returns a nodeList of all the buttons

text = "O";
clicked = Array(9).fill("");
// Loop through the NodeList to attach the listener to each individual element
buttons.forEach((btn,index) => {
    btn.addEventListener('click', () => {
      if (btn.textContent.trim() !== "") {
        return; // This stops the function right here from changing the button value thats been clicked
      }
        else if(text == "O"){
          btn.textContent = "X";
          text = "X"
          clicked[index] = "X";
        }else{
          btn.textContent = "O";
          text = "O"
          clicked[index] = "O";
        }
        console.log(clicked);
    });
});

function result(){
  if(clicked[0]===clicked[1]===clicked[2]){
    console.log("wins 1");
  }else if(clicked[0]===clicked[3]===clicked[6]){
    console.log("wins 2");
  }else if(clicked[6]===clicked[7]===clicked[8]){
    console.log("wins 3");
  }else if(clicked[2]===clicked[6]===clicked[8]){
    console.log("wins 4");
  }else if(clicked[0]===clicked[4]===clicked[8]){
    console.log("wins 5");
  }else if(clicked[2]===clicked[4]===clicked[6]){
    console.log("wins 6");
  }
}

result();