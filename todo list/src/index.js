// src/index.js
import "./styles.css";
import { dom } from './dom.js'; // Adjust filename as needed
import { greetings } from "./greeting.js";
import { todo } from "./todo.js";
// Run the setup function to wire up the event listeners
dom();
todo();
const obj = greetings();
console.log(obj.greets);