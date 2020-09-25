console.log("EXTERNAL SCRIPT EXECUTING!!!");

setTimeout(createTestButton, 3000);

function createTestButton() {
  let testbutton = document.createElement("button");
  testbutton.id = "widgetButton";
  document.body.appendChild(testbutton);
  console.log("Just created test button");
  testbutton.onclick = function () {
    console.log("WIDGET BUTTON HAS BEEN CLICKED. IT WORKED!");
  }
}
