# 🚀 130-days-of-JavaScript

🔥 Welcome to the 100DaysOfCode Challenge in JavaScript. This repository contains my 130 projects made using JavaScript along with HTML, CSS & Sass

## Project 103: Rotating image case

>  需求①：小图标鼠标经过事件( 利用排他事件)大图片跟随变化
>
>  需求②：右侧按钮播放效果,左侧按钮播放效果
>
>  需求③：解决一个BUG, 点击右侧按钮可以实现播放下一张，但是鼠标经过前面的，播放就会乱序
>
>  需求④：因为左侧按钮和右侧按钮里面有大量相同的操作，可以抽取封装一个函数common
>
>  需求⑤：鼠标经过停止定时器（清除定时器）,鼠标离开开启定时器（开启定时器）

🪴 It mainly involves the following knowledge points: 

- 大图片若要跟随小图片的变化, 一定要放到鼠标经过事件里面(for loop)
- 给多个小li绑定事件, 排他思想, 先remove active, 再用mouseenter, this.classList.add("active");
- 

## Project 104: Top navigation bar scrolls on/off 

>  需求：当页面滚动到秒杀模块，导航栏自动滑入，否则滑出现

🪴 It mainly involves the following knowledge points: 

- 用到页面滚动事件

- 检测页面滚动大于等于秒杀模块的位置则滑入，否则滑出


## Project 105: Fixed navigation bar items

>  需求：点击可以页面调到指定效果

🪴 It mainly involves the following knowledge points: 

分析：

- 点击当前小导航，当前添加active，其余移除active

- 得到对应内容的offsetTop值

- 页面的scrollTop走到对应内容的offsetTop


## Project 106: Scroll Event - Back to top

> Page Scroll Event - detect the distance of the page scroll and set the properties accordingly

🪴 It mainly involves the following knowledge points: 

- scrollTop can be read and written

- using **backtop.children[1].addEventListener.....** to get elements


## Project 107: Accordion

> Accordion①：

## Project 108: 📑 Form Entry Generator

> Add new data to the form by rendering the function

🪴 It mainly involves the following knowledge points: 

- whether adding or removing, the data (array) is manipulated, and then the page is rendered from scratch
- **Add Data**, click the Enter button to put all the values inside the form into the array. The student number is automatically generated, it is the last data of the array + 1
- **Render**, render the array data to the page, while emptying the form inside the value, the value of the drop-down list recovery (note that before rendering, empty the previously rendered content, because multiple rendering, it is best to encapsulate as a function)
- **delete data** - in order to improve performance, it is best to use the event delegate method to find the clicked link e.target.tagName, according to the current delete link to find this data, you need to get the current data index number, you can render a time, the current index number to the id property, and then through e.target.id to get, and then use splice to delete the corresponding data

## Project 109: 🛒 Shopping Cart   

> Imitate the shopping cart page of E-commence website 

🪴 It mainly involves the following knowledge points: 

1. calculate the total price result function, which is based on the quantity ✖️ unit price entered by the user