let start // set on the first step to the timestamp provided
const el = document.getElementById('count1') // get the element
const final = parseInt(el.textContent, 10) // parse out the final number
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
}

// start the animation
requestAnimationFrame(step)
setTimeout(() => el.innerHTML = '90', 1800);

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

// start the animation
requestAnimationFrame(step2)

let start3 // set on the first step to the timestamp provided
const el3 = document.getElementById('count3') // get the element
const final3 = parseInt(el3.textContent, 10) // parse out the final number
const duration3 = 350 // duration in ms
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

// start the animation
requestAnimationFrame(step3)