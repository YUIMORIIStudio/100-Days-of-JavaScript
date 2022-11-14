// 0 获取元素
let backtop = document.querySelector(".backtop");
// 1. 页面滚动事件
window.addEventListener("scroll", function () {
  // 2. 页面检测滚动的距离
  console.log(document.documentElement.scrollTop);
  let num = document.documentElement.scrollTop;
  // 3. 进行判断显示和隐藏
  if (num >= 500) {
    //显示那个元素
    backtop.style.display = "block";
  } else {
    // 否则隐藏元素
    backtop.style.display = "none";
  }
});

// 2、点击链接返回顶部 backtop.children[1]
backtop.children[1].addEventListener("click", function () {
  // 返回顶部
  // scrollTop 可读写
  document.documentElement.scrollTop = 0;
});
