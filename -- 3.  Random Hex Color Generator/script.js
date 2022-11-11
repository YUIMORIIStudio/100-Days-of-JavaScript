const hexColor = document.querySelector(".hexColor");
const btn = document.querySelector(".generator");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hexColor.innerHTML = "#" + randomColor;
};
btn.addEventListener("click", generateColor);

generateColor();
