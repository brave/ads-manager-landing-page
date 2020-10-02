"use strict";
let driftIcon = document.createElement("img");
driftIcon.src = "images/drift-bot-icon.png";
driftIcon.id = "driftIcon";
document.body.appendChild(driftIcon);
const driftIconStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '15px',
  zIndex: '10',
  cursor: 'pointer',
  maxWidth: '375px',
  width: '92.5%'
};
Object.assign(driftIcon.style, driftIconStyles);
driftIcon.onclick = loadDriftBot;

function loadDriftBot() {
  driftIcon.style.display = "none";
  closeChat.style.display = "none";
  let drift = document.createElement("script");
  drift.src = "js/driftt-chatbot.js";
  document.body.appendChild(drift);
}

let closeChat = document.createElement("img");
closeChat.src = "images/xbutton.svg";
closeChat.id = "closeChat";
document.body.appendChild(closeChat);
const closeChatStyles = {
  position: 'fixed',
  bottom: '80px',
  right: '10px',
  zIndex: '10',
  cursor: 'pointer',
  maxWidth: '10px'
};
Object.assign(closeChat.style, closeChatStyles);
closeChat.onclick = closePrompt;

function closePrompt() {
  closeChat.style.display = "none";
  driftIcon.style.display = "none";
}

let chatStyles = document.createElement("style");
chatStyles.innerHTML = `
#closeChat:hover {
    opacity: 75%;
    transform: scale(1.1);
    transition: 0.15s;
  }
#driftIcon:hover {
    transform: scale(1.02);
    transition: 0.25s;
}`;
document.body.appendChild(chatStyles);