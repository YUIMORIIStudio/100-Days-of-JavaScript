// 获取元素
let box = document.querySelectorAll("li"); // lis = [li, li, li, li, li]
// 分析：
// 1、鼠标进入显示图片，
// 鼠标进入li，让当前li变成800，其他的li变成100
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseenter", function () {
    //排他思想
    for (let j = 0; j < box.length; j++) {
      // 事件触发执行，为了让所有li变成240宽的
      box[j].style.width = "100px";
    }
    this.style.width = "800px";
  });

  box[i].addEventListener("mouseleave", function () {
    // 让所有的li变成240
    for (let j = 0; j < box.length; j++) {
      // 事件触发执行，为了让所有li变成240宽的
      box[j].style.width = "240px";
    }
  });
}
