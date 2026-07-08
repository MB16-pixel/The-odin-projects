
------------------------------
## ❌ The Mistakes You Made (And Fixed!)

* Passing Strings Instead of Variables: In your first attempt, you wrote appendChild('books'). Passing string text instead of your live element variable (bookList) caused JavaScript to break.
* Variable Overwriting/Scoping: You initially created const bookList outside of your loop. Because it was defined globally, each turn of your loop kept overwriting the exact same HTML element, leaving only the very last book visible on your screen.
* DOM Duplication: Forgetting to clear your main wrapper (collectionDiv.innerHTML = "") before running your display loop caused all your historical books to print a second, third, or fourth time whenever a new book was submitted.
* Property Name Inconsistency: You defined this.name inside your object constructor, but then tried to render ${book.title} inside your layout string. This mismatch caused your UI cards to print undefined.
* Mutating const Identifiers: You initially defined your array with const myLibrary = [], but then tried to overwrite it using myLibrary = myLibrary.filter(...). Since const blocks direct variable re-assignment, your delete engine crashed.

------------------------------
## 🧠 Core Concepts to Keep in Mind## 1. Always Separate "Data" from "UI"
Every time your application changes state (like deleting a book or clicking a read toggle), you must execute two separate tasks:

   1. Update the Data Array (The source of truth in JavaScript memory).
   2. Update the DOM Screen (The visual representation the human user sees).
   If you only update the HTML text on screen, your data array remains unchanged, causing visual bugs or lost progress.

## 2. Master "Closures" and Loop Scope
When you use Strategy 2 to append an event listener inside a for...of loop, JavaScript leaves a breadcrumb trail. The callback function permanently remembers the exact variables (like book and bookList) that existed during that specific turn of the loop. Leverage this to target parent cards instantly.
## 3. Know Your HTML Input Properties
Keep track of how different HTML inputs return values to JavaScript:

* input[type="text"] uses .value (Returns a string).
* input[type="checkbox"] uses .checked (Returns a boolean true/false).

------------------------------
## 🚀 What You Should Learn Next
If you want to keep levelling up your frontend engineering skills, here are the direct topics you should search for or experiment with next:

* LocalStorage API: Learn how to use localStorage.setItem() and localStorage.getItem() combined with JSON.stringify() so that your book data stays safely saved in the browser even if a user refreshes or closes the page.
* Ternary Operators (? :): Practice using inline conditional operators instead of multi-line if/else statements. They will make your code much more concise and easier to inject into template strings.
* Event Delegation: Even though Strategy 2 worked beautifully for this app, research how Event Delegation works with event.target and element.closest(). It is the gold standard for performance when managing massive applications with thousands of interactive elements.

What path would you like to take next?
Show me how to save my book array to LocalStorageShow me how to use a ternary operator to clean up the read/unread logic

