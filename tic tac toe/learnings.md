# My learnings

1. Problem - I made nine buttons and assigned them same id and also attached an event listener, whenever its clicked the text inside to change to O. When I clicked the first button it changed to O but when I clicked the other buttons nothing happened it was becaue HTML attached the event listener to the first button.
Solution - Use querySelectAll which returns nodelist of all the buttons and use forEach loop on the nodelist and attack a click event listener