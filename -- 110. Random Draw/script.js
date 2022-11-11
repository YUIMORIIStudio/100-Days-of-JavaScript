let arr = ["Matthew", "Jerry", "Tom", "Lisa", "Zach"];
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//1. get elements
let start = document.querySelector(".start");
let end = document.querySelector(".end");
let qs = document.querySelector(".qs");
//set ‘timer’ and random to be global variable
let timer = 0;
let random = 0;
//Registering events for the Start button
start.addEventListener("click", function () {
  // Random data extraction --- fast and constant extraction Intermittent function timer
  timer = setInterval(function () {
    let random = getRandom(0, arr.length - 1);
    qs.innerHTML = arr[random];
  }, 15);
  // If it comes to the last one, disable both buttons
  if (arr.length === 1) {
    // console.log('没了')
    // start.disabled = true
    // end.disabled = true
    start.disabled = end.disabled = true;
  }
});

//3. Register events for the end button, which is essentially a stop timer
end.addEventListener("click", function () {
  clearInterval(timer);
  arr.splice(random, 1);
  console.log(arr);
});
