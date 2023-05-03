# 🚀 130-days-of-JavaScript

🔥 Welcome to the 130DaysOfCode Challenge in JavaScript. This repository contains my 130 projects made using JavaScript along with HTML, CSS & Sass

## Project 103: Rotating image case

> Requirement ①: small icon mouse over event ( using exclusion event ) large image follow the change
>
> Requirement ②: right button play effect, left button play effect
> Requirement ②: right button play effect, left button play effect >
> Requirement ③: solve a bug, click the right button to play the next one, but when the mouse passes over the previous one, the playback will be disordered
>
> Requirement ④：Because the left button and the right button have a lot of the same operations, we can extract and encapsulate a function common
>
> Requirement ⑤: mouse over to stop the timer (clear timer), mouse off to start the timer (open timer)

🪴 It mainly involves the following knowledge points: 

- If the big picture is to follow the change of the small picture, it must be put into the mouse over event (for loop)
- Binding events to multiple small li, exclusive thought, first remove active, then mouseenter, this.classList.add("active");
this.classList.add("active"); -# Project 104: Top navigation bar 

## Project 104: Top navigation bar scrolls on/off 

> Requirement: When the page scrolls to the spike module, the navigation bar automatically slides in, otherwise it slides out

🪴 It mainly involves the following knowledge points: 

- Use to page scroll event

- detects that the page scroll is greater than or equal to the position of the spike module, then slide in, otherwise slide out


## Project 105: Fixed navigation bar items

> Requirement: Click to move the page to the specified effect

🪴 It mainly involves the following knowledge points: 

Analysis.

- Click on the current small navigation, the current add active, the rest remove active

- get the offsetTop value of the corresponding content

- The scrollTop of the page goes to the offsetTop of the corresponding content


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

## Project 110:  🎟Random Draw

>  Use the math function and setInterval method to randomly select a number or string from an array

🪴 It mainly involves the following knowledge points: 

1. Using setInterval Function

## Project 111: 📃 Terms and Conditions

> Simulated Website User Terms Agreement 

🪴 It mainly involves the following knowledge points: 

1. Using setInterval Function

## Project 112: 🧾Drop-down Menu

> Show drop-down menu when mouse hovering 

🪴 It mainly involves the following knowledge points: 

1. Using addEventListener 

## Project 113: 📭 Twitter post

> 

🪴 It mainly involves the following knowledge points: 

1. 

## Project 114: 🕺 Webpage Auto-jump

>  Set countdown, webpage auto-jump

🪴 It mainly involves the following knowledge points: 

1. Location Oject 

## Project 115:  ✅ Select All

>  

🪴 It mainly involves the following knowledge points: 

1.  

## Project 116:  

>  

🪴 It mainly involves the following knowledge points: 

1.  
