let driftIcon = document.createElement("img");
driftIcon.src = "images/drift-bot-icon.png";
document.body.appendChild(driftIcon);
const driftIconStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '15px',
  zIndex: '10',
  cursor: 'pointer',
  maxWidth: '375px'
};
Object.assign(driftIcon.style, driftIconStyles);
console.log("Created chatbot icon image.");
driftIcon.onclick = loadDriftBot;
function loadDriftBot() {
  driftIcon.style.display = "none";
  let drift = document.createElement("script");
  drift.src = "js/driftt-chatbot.js";
  document.body.appendChild(drift);
  console.log("Set driftbot as script src.");
  console.log("Trying to click the #drift-widget...");
  setTimeout(function () { document.getElementById('drift-widget').click; }, 1000);
}