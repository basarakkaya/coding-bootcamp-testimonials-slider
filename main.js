var info = [
  {
    quote: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    commentor: "Tanya Sinclair",
    commentorTitle: "UX Engineer",
    imageUrl: "images/image-tanya.jpg"
  },
  {
    quote: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    commentor: "John Tarkpor",
    commentorTitle: "Junior Front-end Developer",
    imageUrl: "images/image-john.jpg"
  },
]

var stepIndex = 0

/**
 * Fills the fields with the corresponding data of desired object.
 * While doing this, adds `hide` class to changing objects to animate them.
 * @param {number} stepNo - index of the object that is wanted to be shown
 */
function fillFields(stepNo) {
  $(".comment > div").addClass("hide")
  $(".photo").addClass("hide")
  setTimeout(function(){
    $(".quote")[0].innerText = info[stepNo].quote
    $(".commentor")[0].innerText = info[stepNo].commentor
    $(".commentor-title")[0].innerText = info[stepNo].commentorTitle
    $(".photo")[0].setAttribute("src", info[stepNo].imageUrl)
    $(".comment > div").removeClass("hide")
    $(".photo").removeClass("hide")
  }, 500)
}

/**
 * Changes the step to the next one and fills the fields with its data.
 * Moves to the first one when it reaches to the end.
 */
function carouselNext() {
  if (stepIndex !== info.length - 1) {
    stepIndex++;
  } else {
    stepIndex = 0;
  }

  fillFields(stepIndex)
}

/**
 * Changes the step to the previous one and fills the fields with its data.
 * Moves to the last one when it reaches to the beginning.
 */
function carouselPrevious() {
  if (stepIndex !== 0) {
    stepIndex--;
  } else {
    stepIndex = info.length - 1;
  }

  fillFields(stepIndex)
}

/**
 * Sets the step to the first object element of info array.
 * Fills the fields with its data.
 * Assigns event handlers to `next` and `previous` buttons of the carousel.
 */
function initialize() {
  fillFields(0)
  $('#previous').on('click', carouselPrevious)
  $('#next').on('click', carouselNext)
}

window.onload = initialize