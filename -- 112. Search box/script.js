let search = document.querySelector("input[type=search]");
let list = document.querySelector(".result-list");
search.addEventListener("focus", function () {
  // 显示下拉菜单
  list.style.display = "block";
  // 文本框变色
  this.classList.add("search");
  // 3. 事件监听 失去光标事件  blur
  search.addEventListener("blur", function () {
    // 隐藏下拉菜单
    list.style.display = "none";
    // 文本框去色
    this.classList.remove("search");
  });
});
