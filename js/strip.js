window.onload = setTimeout(function () {
  
  document.querySelector('.androidNotification').className = "androidNotification animated fadeInUp";
  
  //Strip link to Start Now form if JS enabled
  document.querySelectorAll('.startNowLink').forEach(function (a) {
    a.removeAttribute('href');
  });

  setTimeout(removeAnimationAndroidNotification, 850);
}, 500);

//Removes animate.css classes from AndroidNotification to reenable :hover effects
function removeAnimationAndroidNotification() {
  document.querySelector('.androidNotification').className = "androidNotification";
  console.log("removeAnimation");
}