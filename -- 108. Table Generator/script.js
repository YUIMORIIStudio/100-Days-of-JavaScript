// 1. Prepare the data backend
let arr = [
  {
    stuId: 1001,
    uname: "Jerry",
    age: 19,
    gender: "male",
    salary: "20000",
    city: " Vancouver",
  },
  {
    stuId: 1002,
    uname: "Matthew",
    age: 29,
    gender: "male",
    salary: "30000",
    city: "Winnipeg",
  },
  {
    stuId: 1003,
    uname: "Tommy",
    age: 39,
    gender: "femela",
    salary: "2000",
    city: "Ottawa",
  },
];

// Get the parent element tbody
let tbody = document.querySelector("tbody");
// Add data button
// get the entry button
let add = document.querySelector(".add");
// get the elements of each form
let uname = document.querySelector(".uname");
let age = document.querySelector(".age");
let gender = document.querySelector(".gender");
let salary = document.querySelector(".salary");
let city = document.querySelector(".city");
// 渲染函数 把数组里面的数据渲染到页面中
function render() {
  // first kill the previous data so that tbody has no tr inside
  tbody.innerHTML = "";
  // before rendering the new data
  // Render additional tr based on the number of entries
  for (let i = 0; i < arr.length; i++) {
    // 1.create tr
    let tr = document.createElement("tr");
    // 2.insert data
    tr.innerHTML = `
      <td>${arr[i].stuId}</td>
      <td>${arr[i].uname}</td>
      <td>${arr[i].age}</td>
      <td>${arr[i].gender}</td>
      <td>${arr[i].salary}</td>
      <td>${arr[i].city}</td>
      <td>
        <a href="javascript:" id="${i}">删除</a>
      </td>
      `;
    // 3. Append tr to tbody parent element.appendChild(child element)
    tbody.appendChild(tr);
  }
}
// The function is called as soon as the page is loaded
render();

add.addEventListener("click", function () {
  // alert(11)
  // Get the values from the form and append them to the array arr using the push method
  arr.push({
    // get the student number of the last data in the array 1003 + 1
    stuId: arr[arr.length - 1].stuId + 1,
    uname: uname.value,
    age: age.value,
    gender: gender.value,
    salary: salary.value,
    city: city.value,
  });
  console.log(arr);
  //(4) [{…}, {…}, {…}, {…}]
  // (5) [{…}, {…}, {…}, {…}, {…}]
  // (6) [{…}, {…}, {…}, {…}, {…}, {…}]
  // Render our function again
  render();
  // recover all the form data
  // uname.value = age.value = salary.value = "";
  // gender.value = "male";
  // city.value = "Beijing";
});

// Delete operation, the data is also deleted from the array, but we use the event delegate
tbody.addEventListener("click", function (e) {
  // alert(11)
  // We can only delete a link if we click on it
  // So how do we know you clicked on a?
  // We can only do the delete operation if we click on the link
  // console.dir(e.target.tagName)
  if (e.target.tagName === "A") {
    // alert('You clicked the link')
    // delete operation delete the data inside the array arr.split(where to start from, 1)
    // I need to get the id of a
    // console.log(e.target.id)
    arr.splice(e.target.id, 1);

    // re-render our function
    render();
  }
});
