// 1. 获元取素
let items = document.querySelectorAll(".item");
// 内容的盒子获取
let contents = document.querySelectorAll(".content-c");
// 2. 左侧aside 模块 点击谁，谁高亮
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    // 找到上一个active 移除类
    document.querySelector(".aside .active").classList.remove("active");
    // 点击谁谁添加类
    this.classList.add("active");
    // 3. 右侧内容跟随走动  让页面滚动到对应的offsetTop值位置
    console.log(contents[i].offsetTop);
    document.documentElement.scrollTop = contents[i].offsetTop;
  });
}
