// 轮播图开始啦
// 需求①：小图标鼠标经过事件
// 鼠标经过小图片，当前高亮，其余li变淡添加类
let lis = document.querySelectorAll(".indicator li");

//需求2, 获取slides的li
let piclis = document.querySelectorAll(".slides ul li");
let text = document.querySelector(".extra h3");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let main = document.querySelector(".main");

// 给多个小li绑定事件, 排他思想
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseenter", function () {
    // 选出唯一的那个active ，删除类
    document.querySelector(".indicator .active").classList.remove("active");
    // 鼠标经过谁，谁加上active 这个类
    this.classList.add("active");

    // 需求② ：大图片跟随变化, 一定要放到鼠标经过事件里面
    // 对应的大图片跟着显示，如果想要过渡效果，可以使用opacity效果，可以利用CSS淡入|淡出的效果，还是添加类
    // 选出唯一的那个active ，删除类
    document.querySelector(".slides ul .active").classList.remove("active");
    // 对应序号的那个 li，谁加上active 这个类
    piclis[i].classList.add("active");
    text.innerHTML = `Descriptive information of the ${i + 1}picture`;

    // 需求④：解决一个BUG
    // 点击右侧按钮可以实现播放下一张，但是鼠标经过前面的，播放就会乱序
    // 解决方案：  让变化量 index 重新赋值为 当前鼠标经过的索引号
    // 鼠标经过了那个小li 他的索引号就是 i
    // 右侧按钮是通过 index 来了控制播放的
    index = i;
  });
}

// 需求③：右侧按钮播放效果
//   点击右侧按钮，可以自动播放下一张图片
//   需要一个变化量  index 不断自增
//   然后播放下一张图片
//   如果到了最后一张，必须要还原为第1张图片
//   教你一招： 索引号 = 索引号 % 数组长度 （放到播放前面）
let index = 0; // 全局变量  信号量 控制器 为了给 右侧按钮和左侧按钮同时使用
next.addEventListener("click", function () {
  index++;
  // 选出 index 小图片 做操作
  // console.log(index)
  // if (index === lis.length) {
  //   index = 0
  // }
  index = index % lis.length;
  common();
});

// 需求⑤：左侧按钮播放效果
//   点击左侧按钮，可以自动播放上一张图片
//   需要一个变化量  index 不断自减
//   然后播放上一张图片
//   如果到了第一张，必须要从最后一张播放
//   教你一招： 索引号 = (数组长度 + 索引号) % 数组长度
prev.addEventListener("click", function () {
  index--;
  // 选出 index 小图片 做操作
  // console.log(index)
  if (index < 0) {
    index = lis.length - 1;
  }
  // index = (lis.length + index) % lis.length
  common();
});

// 需求⑥：
//   因为左侧按钮和右侧按钮里面有大量相同的操作，可以抽取封装一个函数 common
function common() {
  document.querySelector(".indicator .active").classList.remove("active");
  lis[index].classList.add("active");
  // 选出 index 大图片 做操作
  document.querySelector(".slides ul .active").classList.remove("active");
  piclis[index].classList.add("active");
  text.innerHTML = `Descriptive information of the${index + 1} 1st picture`;
}

// 需求⑦：开启定时器
//   其实定时器自动播放，就相当于点击了右侧按钮，此时只需要， next.click()
let timer = setInterval(function () {
  // 自动调用右侧按钮的点击事件
  next.click();
}, 1000);
// 需求⑧：
//   鼠标经过停止定时器 （清除定时器）

main.addEventListener("mouseenter", function () {
  clearInterval(timer);
});
//   鼠标离开开启定时器 （开启定时器）
main.addEventListener("mouseleave", function () {
  timer = setInterval(function () {
    // 自动调用右侧按钮的点击事件
    next.click();
  }, 1000);
});
