const buttons = document.querySelectorAll("#btn");
console.log(buttons) // returns a nodeList of all the buttons

// Loop through the NodeList to attach the listener to each individual element
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.textContent = "O"
    });
});