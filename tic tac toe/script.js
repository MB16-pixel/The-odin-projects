const buttons = document.querySelectorAll("#btn");
const res = document.getElementById("res");
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
          result();
        }else{
          btn.textContent = "O";
          text = "O"
          clicked[index] = "O";
          result();
        }
        console.log(clicked);
    });
});

function result(){
  if(clicked[0]!="" && clicked[0]===clicked[1] &&clicked[1] ===clicked[2]){
    res.textContent += `${clicked[0]} wins`;
    document.querySelector(".board").style.pointerEvents = "none";
  }else if(clicked[0]!="" && clicked[0]===clicked[3] &&clicked[3] ===clicked[6]){
    res.textContent += `${clicked[0]} wins`;
    document.querySelector(".board").style.pointerEvents = "none";
  }else if(clicked[6]!="" && clicked[6]===clicked[7] &&clicked[7] ===clicked[8]){
    res.textContent += `${clicked[6]} wins`;
    document.querySelector(".board").style.pointerEvents = "none";
  }else if(clicked[2]!="" && clicked[2]===clicked[5] &&clicked[5] ===clicked[8]){
    res.textContent += `${clicked[2]} wins`;
    document.querySelector(".board").style.pointerEvents = "none";
  }else if(clicked[0]!="" && clicked[0]===clicked[4] &&clicked[4] ===clicked[8]){
    res.textContent += `${clicked[0]} wins`;
    document.querySelector(".board").style.pointerEvents = "none";
  }else if(clicked[2]!="" && clicked[2]===clicked[4] && clicked[4] ===clicked[6]){
    res.textContent += `${clicked[2]} wins`;
    document.querySelector(".board").style.pointerEvents = "none";
  }else if(clicked[3]!="" && clicked[3]===clicked[4] && clicked[4] === clicked[5]){
    res.textContent += `${clicked[3]} wins`;
    document.querySelector(".board").style.pointerEvents = "none"; // Middle Row
  }else if(clicked[1]!="" && clicked[1]===clicked[4] && clicked[4] === clicked[7]){
    res.textContent += `${clicked[1]} wins`;
    document.querySelector(".board").style.pointerEvents = "none"; // Middle Column
  }
}