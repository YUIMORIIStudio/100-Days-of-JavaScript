// 1. get elements check all and ck small checkboxes
let all = document.querySelector("#checkAll");
let cks = document.querySelectorAll(".ck");
let span = document.querySelector("span");
// 2. eventListener All button
all.addEventListener("click", function () {
  // console.log(all.checked) // true false
  // All we need to do is give all.checked to the following three small buttons
  // Since the three buttons are in a pseudo-array, we need to iterate through them, taking them out one by one and giving them their values in turn
  for (let i = 0; i < cks.length; i++) {
    cks[i].checked = all.checked;
  }
  // When our all button is checked, it can be changed to unchecked
  if (all.checked) {
    // console.log('to change')
    span.innerHTML = "Cancel";
  } else {
    span.innerHTML = "Select all";
  }
});

// 3. The small button approach Bind the same event to multiple elements at the same time
for (let i = 0; i < cks.length; i++) {
  // Bind events
  cks[i].addEventListener("click", function () {
    // console.log(11)
    // iterate through all the small buttons whenever any of them is clicked
    for (let j = 0; j < cks.length; j++) {
      // it's all to see if someone is unchecked
      if (cks[j].checked === false) {
        // If false, exit the loop and end the function
        all.checked = false;
        span.innerHTML = "check all";
        return;
      }
    }
    // When our loop ends, if the code goes here, which means there is no false and all are checked, then the all button should be checked
    all.checked = true;
    span.innerHTML = "cancel";
  });
}
