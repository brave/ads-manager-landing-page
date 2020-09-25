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
  drift.src = "js/driftt-chatbot2.js";
  document.body.appendChild(drift);
  console.log("Set driftbot as script src.");
  console.log("Trying to click the #drift-widget...");
  drift.onload = clickDriftBot;
}

function clickDriftBot() {
  document.getElementById('widgetButton').click(); //drift-widget created by Drift's external script
  console.log("clicked drift bot");
}