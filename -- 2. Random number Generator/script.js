const number = document.querySelector(".number");
const button = document.querySelector(".generator");

const generatorNumber = () => {
  //Math.random() get random float
  const randomNumber = Math.floor(Math.random() * 10);
  number.innerHTML = randomNumber;
};

button.addEventListener("click", generatorNumber);

//console.log(random);
