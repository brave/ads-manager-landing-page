window.onload = setTimeout(function () {
  
  document.querySelector('.androidNotification').className = "androidNotification animated fadeInUp";
  
  //Strip link to Start Now form if JS enabled
  document.querySelectorAll('.startNowLink').forEach(function (a) {
    a.removeAttribute('href');
  });

  setTimeout(removeAnimationAndroidNotification, 850);
}, 500);


function navBarFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Removes animate.css classes from AndroidNotification to reenable :hover effects
function removeAnimationAndroidNotification() {
  document.querySelector('.androidNotification').className = "androidNotification";
  console.log("removeAnimation");
}

// Get the modal
var modal = document.getElementById("myModal");

document.body.onclick= function(e){
  e=window.event? event.srcElement: e.target;
  if (e.className && e.className.indexOf('myBtn') != -1) {
    modal.style.display = "block";
  }
  if (e.className && e.className.indexOf('close') != -1) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}