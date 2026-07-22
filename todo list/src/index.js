// src/index.js
import "./styles.css";
import { dom } from './dom.js'; // Adjust filename as needed
import { greetings } from "./greeting.js";
import { todo } from "./todo.js";
import { project } from "./project.js";
// Run the setup function to wire up the event listeners
dom();
project();
const obj = greetings();
console.log(obj.greets);