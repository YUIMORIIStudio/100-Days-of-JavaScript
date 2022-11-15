// The rotation map is starting
// Requirement ①: small icon mouse over event
// mouse over small image, current highlight, rest of li fade add class
let lis = document.querySelectorAll(".indicator li");

//requirement 2, get slides of li
let piclis = document.querySelectorAll(".slides ul li");
let text = document.querySelector(".extra h3");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let main = document.querySelector(".main");

// Bind events to multiple small li, exclusionary thinking
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseenter", function () {
    // Select the only active one and delete the class
    document.querySelector(".indicator .active").classList.remove("active");
    // Add the class active to whoever the mouse passes over
    this.classList.add("active");

    // Requirement ②: large images follow the changes, must be put in the mouse over event
    // the corresponding large image to follow the display, if you want the transition effect, you can use the opacity effect, you can use CSS fade in|fade out effect, or add a class
    // select the only active, remove the class
    document.querySelector(".slides ul .active").classList.remove("active");
    // the li that corresponds to the serial number, who adds the class active
    piclis[i].classList.add("active");
    text.innerHTML = `Descriptive information of the ${i + 1}picture`;

    // Requirement 4: Fix a bug
    // Click the right button to play the next picture, but when the mouse passes over the previous one, the playback will be out of order
    // Solution: Make the index change to the index number of the current mouse over
    // The index of the small li that the mouse passes over is i
    // The right button controls playback by index
    index = i;
  });
}

// Requirement ③: right button play effect
// Click the right button to automatically play the next image
// need a change in index to keep increasing itself
// then the next image will be played
// If you get to the last image, you have to revert to the first image
// Teach you a trick: index = index number % array length (put in front of play)
let index = 0; // global variable signal controller for both the right button and the left button
next.addEventListener("click", function () {
  index++;
  // pick out the small index image to do the action
  // console.log(index)
  // if (index === lis.length) {
  // index = 0
  // }
  index = index % lis.length;
  common();
});

// Requirement 5: Left button play effect
// Click the left button to automatically play the previous image
// need a change in index to keep decreasing itself
// and then play the previous image
// If you get to the first one, you have to play it from the last one
// Teach you a trick: index number = (array length + index number) % array length
prev.addEventListener("click", function () {
  index--;
  // pick out the index small image to do the operation
  // console.log(index)
  if (index < 0) {
    index = lis.length - 1;
  }
  // index = (lis.length + index) % lis.length
  common();
});

// Requirement 6.
// Since the left button and the right button have a lot of the same operations inside, you can extract and wrap a function common
function common() {
  document.querySelector(".indicator .active").classList.remove("active");
  lis[index].classList.add("active");
  // select the index large image to do the operation
  document.querySelector(".slides ul .active").classList.remove("active");
  piclis[index].classList.add("active");
  text.innerHTML = `Descriptive information of the${index + 1} 1st picture`;
}

// Requirement 7: Turn on the timer
// The timer actually plays automatically, which is equivalent to clicking the right button, at this point it just needs to be, next.click()
let timer = setInterval(function () {
  // Automatically call the right button's click event
  next.click();
}, 1000);
// Requirement 8.
// mouse over stop timer (clear timer)

main.addEventListener("mouseenter", function () {
  clearInterval(timer);
});
// mouseenter turns on the timer (turns on the timer)
main.addEventListener("mouseleave", function () {
  timer = setInterval(function () {
    // Automatically call the right button's click event
    next.click();
  }, 1000);
});
