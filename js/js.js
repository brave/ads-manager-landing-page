//AsyncDrift
"use strict";
let driftIcon = document.createElement("img");
driftIcon.src = "/brave-ads/images/drift-bot-icon.png";
driftIcon.id = "driftIcon";
document.body.appendChild(driftIcon);
const driftIconStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '30px',
  zIndex: '10',
  cursor: 'pointer',
  maxWidth: '375px',
  width: '90%'
};
Object.assign(driftIcon.style, driftIconStyles);
driftIcon.onclick = loadDriftBot;

function loadDriftBot() {
  driftIcon.style.display = "none";
  closeChat.style.display = "none";
  let drift = document.createElement("script");
  drift.src = "/brave-ads/js/driftt-chatbot.js";
  document.body.appendChild(drift);
}

let closeChat = document.createElement("img");
closeChat.src = "/brave-ads/images/xbutton.svg";
closeChat.id = "closeChat";
document.body.appendChild(closeChat);
const closeChatStyles = {
  position: 'fixed',
  bottom: '80px',
  right: '10px',
  zIndex: '10',
  cursor: 'pointer',
  maxWidth: '12px'
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
//EndAsyncDrift

function navBarFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the modal
var modal = document.getElementById("myModal");
var frame = document.getElementById("startNowForm");

document.body.onclick= function(e){
  e=window.event? event.srcElement: e.target;
  if (e.className && e.className.indexOf('myBtn') != -1) {
    modal.style.display = "block";
    if (frame.hasAttribute('data-src')) {
      frame.src = frame.getAttribute('data-src');
      frame.removeAttribute('data-src');
    }
  }
  if (e.className && e.className.indexOf('close') != -1) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target.classList.contains("perfundo__overlay")) {
    location.href = "#";
  }
}

//JS enabled
document.querySelectorAll('.startNowLink').forEach(function (a) {
  a.removeAttribute('href');
});

// Allow clicking outside the modal to close