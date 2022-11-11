// + - 删除是相同的，一一对应的 我们完全可以用一个for来遍历绑定事件
// +
let adds = document.querySelectorAll(".add");
// -
let reduces = document.querySelectorAll(".reduce");
// del
let dels = document.querySelectorAll(".del");
// 输入框input
let inputs = document.querySelectorAll(".count-c input");

// 单价 price  5
let prices = document.querySelectorAll(".price");
// 小计 total  5 * 2 = 10
let totals = document.querySelectorAll(".total");
// 总价元素获取
let totalResult = document.querySelector(".total-price");
// 总的数量获取
let totalCount = document.querySelector("#totalCount");
// tbody 获取过来
let carBody = document.querySelector("#carBody");
for (let i = 0; i < adds.length; i++) {
  // 总价和单价是一样的
  totals[i].innerText = prices[i].innerText;
  //1. 加号的操作
  adds[i].addEventListener("click", function () {
    // 点击了谁，就让对应的输入框自增就行了
    inputs[i].value++;
    // 减号要启用
    reduces[i].disabled = false;
    // prices[i].innerText  得到的是 5¥     parseInt('5¥')  === 5
    console.log(parseInt(prices[i].innerText));
    // 计算小计模块
    // totals[i].innerText =  单价 * 数量
    // totals[i].innerText = 20
    totals[i].innerText = parseInt(prices[i].innerText) * inputs[i].value + "¥";
    // 计算现在的总额 调用
    result();
  });

  //2. 减号的操作
  reduces[i].addEventListener("click", function () {
    // 点击了谁，就让对应的输入框自增就行了
    inputs[i].value--;
    // prices[i].innerText  得到的是 5¥     parseInt('5¥')  === 5
    // console.log(parseInt(prices[i].innerText))
    // 判断如果表单里面的值 小于等于1 则，禁用按钮
    if (inputs[i].value <= 1) {
      this.disabled = true;
    }
    // 计算小计模块
    // totals[i].innerText =  单价 * 数量
    // totals[i].innerText = 20
    totals[i].innerText = parseInt(prices[i].innerText) * inputs[i].value + "¥";

    // 计算现在的总额 调用
    result();
  });

  // 3. 删除操作

  dels[i].addEventListener("click", function () {
    // 父元素.removeChild(子元素)
    // 我们要删除的是那个元素   tr  他的爸爸是 tbody
    // 删除的是当前元素爸爸的爸爸  就是 tr 就是当前的tr
    carBody.removeChild(this.parentNode.parentNode);

    // 调用总计模块
    result();
  });
}

// div  span   ul  li  标签  有文字内容  怎么得到或则设置文字内容呢  元素.innerText   元素.innerHTML
// 表单  input 单选 复选    textarea  select  怎么得到或则设置值   表单的value
// 特殊的  button 是通过inner来设置
// 以前数组求和的方式 累加
//  计算总价 result 函数  把所有的小计 totals 加起来的结果
function result() {
  // 小计 total  5 * 2 = 10
  let totals = document.querySelectorAll(".total");
  // 输入框input
  let inputs = document.querySelectorAll(".count-c input");
  let sum = 0;
  let num = 0;
  for (let i = 0; i < totals.length; i++) {
    // sum = sum + 小计的数字  10￥
    sum = sum + parseInt(totals[i].innerText);
    num = num + parseInt(inputs[i].value);
  }
  // console.log(sum)
  totalResult.innerText = sum + "￥";
  // console.log(num)
  totalCount.innerText = num;
}
result();
