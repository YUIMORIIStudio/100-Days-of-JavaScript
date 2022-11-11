let dataArr = [
  { uname: "A", imgSrc: "./images/9.5/01.jpg" },
  { uname: "B", imgSrc: "./images/9.5/02.jpg" },
  { uname: "C", imgSrc: "./images/9.5/03.jpg" },
  { uname: "D", imgSrc: "./images/9.5/04.jpg" },
  { uname: "E", imgSrc: "./images/9.5/05.jpg" },
  { uname: "F", imgSrc: "./images/9.5/06.jpg" },
  { uname: "G", imgSrc: "./images/9.5/07.jpg" },
  { uname: "H", imgSrc: "./images/9.5/08.jpg" },
  { uname: "I", imgSrc: "./images/9.5/09.jpg" },
];

// Requirement 1: Detect the number of characters entered by the user
// 1. Register the input event
// 2. Assign the length of the text content to the corresponding value
// 3. The maxlength property of the form can be directly limited to 200
let textarea = document.querySelector("textarea");
let useCount = document.querySelector(".useCount");
// publish button
let send = document.querySelector("#send");
// ul
let ul = document.querySelector("#list");
textarea.addEventListener("input", function () {
  // console.log(this.value.length)
  useCount.innerHTML = this.value.length;
});

// Requirement 2: Input cannot be empty
// Judge after clicking the button
// Judging that if the content is empty, the prompt cannot be empty, and the direct return cannot be empty
// To prevent input of meaningless spaces, use string .trim() to remove leading and trailing spaces
// console.log(' str')
// console.log(' str '.trim())
// and set the value of the form to an empty string
// At the same time, the red below is set to 0
send.addEventListener("click", function () {
  if (textarea.value.trim() === "") {
    // and set the value of the form to an empty string
    textarea.value = "";
    // At the same time, the red below is set to 0
    useCount.innerHTML = 0;
    return alert("Content cannot be empty");
  }
  // random number
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let random = getRandom(0, dataArr.length - 1);
  // Requirement 3: Add a new message and write it in send
  // Create a small li, and then append data through innerHTML
  let li = document.createElement("li");
  // Randomly get the contents of the data array, replace the picture and name of newNode and the content of the message
  // Make time dynamic with time object :new Date().toLocaleString()
  // Append to ul with parent element.insertBefore(child element, before that element)\
  ul.insertBefore(li, ul.children[0]);

  // <li hidden>
  // <div class="info">
  // <img class="userpic" src="./images/9.6/03.jpg" />
  // <span class="username">Dead data: Baili keeps promises</span>
  // <p class="send-time">Dead Data: Posted on Dec 05, 2020 00:07:54</p>
  // </div>
  // <div class="content">Dead data: 111</div>
  // <span class="the_del">X</span>
  // </li>
  li.innerHTML = `
       <div class="info">
       <img class="userpic" src=${dataArr[random].imgSrc}>
      <span class="username">${dataArr[random].uname}</span>
      <p class="send-time"> ${new Date().toLocaleString()} </p>
      </div>
      <div class="content">${textarea.value}</div>
      <span class="the_del">X</span>
      `;

  // Requirement 5: Reset - reset the form field content to empty
  // reset the content in userCount to 0
  textarea.value = "";
  // At the same time, the red below is set to 0
  useCount.innerHTML = 0;

  // Requirement 4: delete the message and put it in front of the append, it needs to be placed in the click event
  // Get the click button in the event handler and register the click event
  // (Error-prone: must be obtained in the event, not available outside)
  // Delete the corresponding element (get the corresponding element to be deleted through this)
  // Teach you a trick: put it in front of the appending ul, so that the event is bound by the way while creating the element, like~~
  // use li.querySelector()
  let del = li.querySelector(".the_del");
  del.addEventListener("click", function () {
    // The delete operation clicks on the small li parent element deleted by X. removeChild (child element)
    ul.removeChild(li);
  });
});
// Press Enter to generate a message
// Three elements of event listener
// textarea.addEventListener('keyboard event', function() {publish information})
textarea.addEventListener("keyup", function (e) {
  // console.log(11)
  // How do we know that the user pressed the enter key?
  // console.log(e.keyCode) is deprecated as long as e.key === 'Enter'
  // console.log(e.key)
  if (e.key === "Enter") {
    // alert(11)
    // distribute news
    // Automatically trigger button click
    send.click();
  }
});
