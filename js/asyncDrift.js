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
  console.log("Created <script> w/ src = external script.");
}

function clickDriftBot() {
  document.getElementById('widgetButton').click(); //drift-widget created by Drift's external script
  console.log("clicked drift bot");
}

let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (!mutation.addedNodes) return

    for (let i = 0; i < mutation.addedNodes.length; i++) {
      if (document.getElementById('widgetButton')) {
        clickDriftBot();
        observer.disconnect()
      }
      let node = mutation.addedNodes[i]
    }
  })
})

observer.observe(document.body, {
    childList: true
  , subtree: true
  , attributes: false
  , characterData: false
})
