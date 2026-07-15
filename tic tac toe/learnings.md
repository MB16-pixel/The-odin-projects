# My Learnings

### 1. Duplicate IDs and Event Listeners
* **Problem:** I created nine buttons and assigned them all the exact same `id="btn"`. When I attached a click event listener using `document.getElementById`, only the very first button responded to clicks. The other eight buttons did nothing because browsers only look for the first matching ID on a webpage.
* **Solution:** I changed my selection strategy to use `document.querySelectorAll(".btn")` to grab a `NodeList` of all matching classes. Then, I used a `.forEach()` loop to attach an individual event listener to each button.

### 2. Layout Shifting on Empty Buttons
* **Problem:** When buttons started with an empty space (`" "`), they would randomly shift out of alignment or resize the moment an "X" or "O" text symbol was inserted.
* **Solution:** I used CSS styling to lock down the button layout. Applying `vertical-align: middle;` forced the buttons to stay in place permanently.

### 3. Chained Comparison Errors in Win Checking
* **Problem:** I tried to check for a winning line using a direct chain like `if (clicked[0] === clicked[1] === clicked[2])`. This failed because JavaScript evaluates comparisons left-to-right. It evaluated `clicked[0] === clicked[1]` into a boolean (`true` or `false`), and then mistakenly checked if that boolean matched `clicked[2]`.
* **Solution:** I broke the chain into separate, explicit comparisons and joined them together using the logical AND (`&&`) operator: `if (clicked[0] === clicked[1] && clicked[1] === clicked[2])`.

### 4. False Wins on Empty Boards
* **Problem:** When the game first loaded, my win conditions immediately triggered a victory because three empty slots (`"" === "" && "" === ""`) technically matched each other perfectly.
* **Solution:** I added a safety guard to the front of every win condition check to ensure the first square was not empty before checking if they all matched: `if (clicked[0] !== "" && ... )`.

### 5. Incomplete Win Configurations
* **Problem:** My game was missing certain wins, such as horizontal lines through the middle row or vertical lines down the middle column.
* **Solution:** I mapped out all 8 possible winning lines on a 3x3 grid (3 rows, 3 columns, and 2 diagonals) and ensured every single scenario had its own dedicated condition block in the win-checking function.

### 6. Clicking Already-Played Squares
* **Problem:** Players were able to click on a square that already had an "X" or an "O" and overwrite the previous player's move.
* **Solution:** I introduced a conditional guard gate at the very top of the click event listener. If the button's text content is already filled, the function executes a `return` statement to stop immediately and ignore the input.

### 7. Continuing the Game After Someone Won
* **Problem:** Even after a winner was declared and logged, players could keep clicking the remaining open squares on the board.
* **Solution:** I implemented document.querySelector(".board").style.pointerEvents = "none";
