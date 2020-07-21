var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
  if (img.complete) {
    incrementCounter();
  } else {
    img.addEventListener( 'load', incrementCounter, false );
  }
});

function forceStat() {
  document.getElementById('count1').innerHTML = '90';
  document.getElementById('count2').innerHTML = '9';
  document.getElementById('count3').innerHTML = '63';
}

function incrementCounter() {
    counter++;
    if ( counter === len ) {
      window.onload = function () {
        requestAnimationFrame(step);
        requestAnimationFrame(step2);
        requestAnimationFrame(step3);
        setTimeout(forceStat, 8000);
      } 
    }
}

/* Count Logic */

let start // set on the first step to the timestamp provided
const el = document.getElementById('count1') // get the element
const final = 90;
//const final = parseInt(el.textContent, 10) // parse out the final number
const duration = 1340 // duration in ms
const step = ts => {
  if (!start) {
    start = ts
  }
  // get the time passed as a fraction of total duration
  let progress = (ts - start) / duration 

  el.textContent = Math.floor(progress * final) // set the text
  if (progress < 1) {
    // if we're not 100% complete, request another animation frame
    requestAnimationFrame(step) 
  }
  //setTimeout(() => el.innerHTML = '90', 1800)
}

let start2 // set on the first step to the timestamp provided
const el2 = document.getElementById('count2') // get the element
const final2 = parseInt(el2.textContent, 10) // parse out the final number
const duration2 = 1000 // duration in ms
const step2 = ts => {
  if (!start2) {
    start2 = ts
  }
  // get the time passed as a fraction of total duration
  let progress = (ts - start2) / duration2 

  el2.textContent = Math.floor(progress * final2) // set the text
  if (progress < 1) {
    // if we're not 100% complete, request another animation frame
    requestAnimationFrame(step2) 
  }
}

let start3 // set on the first step to the timestamp provided
const el3 = document.getElementById('count3') // get the element
const final3 = parseInt(el3.textContent, 10) // parse out the final number
const duration3 = 1150 // duration in ms
const step3 = ts => {
  if (!start3) {
    start3 = ts
  }
  // get the time passed as a fraction of total duration
  let progress = (ts - start3) / duration3 

  el3.textContent = Math.floor(progress * final3) // set the text
  if (progress < 1) {
    // if we're not 100% complete, request another animation frame
    requestAnimationFrame(step3) 
  }
}
