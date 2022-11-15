let btn = document.querySelector(".btn");
let i = 60;
let timer = setInterval(function () {
  i--;
  // console.log(i);
  btn.innerHTML = `i have read and accept the terms and conditions(${i})`;
  if (i === 0) {
    clearInterval(timer);
    btn.disabled = false;
    btn.innerHTML = "I agree";
  }
}, 1000);
