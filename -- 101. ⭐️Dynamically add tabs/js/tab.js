var that;
class Tab {
  constructor(id) {
    that = this;
    // Get the element
    this.main = document.querySelector(id);
    // this.lis = this.main.querySelectorAll("li");
    // this.sections = this.main.querySelectorAll("section");
    // this.remove = this.main.querySelectorAll(".icon-guanbi");
    this.add = this.main.querySelector(".tabadd");
    //parent element of li
    this.ul = this.main.querySelector(".firstnav ul:first-child");
    //parent of section
    this.fsection = this.main.querySelector(".tabscon");
    this.init();
  }

  // init initializes the element to bind events to it
  init() {
    // call the updateNode method to help all li reacquire click events (including those newly added)
    this.updateNode();
    //addTab binding event (don't write it in the for-loop)
    this.add.onclick = this.addTab;
    //toggleTab binding event
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      //this.lis[i].onclick = () => {
      //console.log(this.index)};
      this.lis[i].onclick = this.toggleTab;
      this.remove[i].onclick = this.removeTab;
      this.spans[i].onclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }
  }
  // Get all the methods for li and section
  //!!! Because we're dynamically adding elements, we need to get the corresponding elements from a new one
  updateNode() {
    this.lis = this.main.querySelectorAll("li");
    this.sections = this.main.querySelectorAll("section");
    this.remove = this.main.querySelectorAll(".icon-guanbi");
    this.spans = this.main.querySelectorAll(".firstnav li span:first-child");
  }
  // 1. toggle function
  toggleTab() {
    //console.log(this.index);
    that.clearClass(); // 1. shouldn't use this, because it's this inside the constructor that calls the clearClass method 2. that.clearClass uses the idea of exclusivity, so it must unload the first row of toggleTab. First remove all active, and then use this to represent the current
    this.className = "liactive";
    //this.functions[this.index].className = "active";
    that.functions[this.index].className = "conactive";
  }
  // Clear all li and section active classes (exclusionary thinking)
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  }

  // 2. Add functionality
  addTab() {
    var random = Math.random();
    // call clearClass
    that.clearClass();
    //Previous method: Dynamically create createElement, which requires innerHTML to copy, and then appendChild to append to the parent element, but if the content of the element is large, the operation is very troublesome. At this time, consider using insertAdjacentHtml(position,text)-supports additional characters elements of the string;
    //1. Create li element and section element
    var li =
      '<li class="liactive"><span>New Tab</span><span class="iconfont icon-guanbi"></span></li>';
    var section = '<section class="conactive">test' + random + "</section>";
    //2. Append these two elements to the li element
    that.ul.insertAdjacentHTML("beforeend", li);
    that.fsection.insertAdjacentHTML("beforeend", section);
    //This tab is added later, test 123 is obtained when the page is loaded
    //Equivalent to every time you click to add, the li and section of the page will be reacquired, so as to ensure that the number is real-time
    that.init();
  }
  // 3. Delete function
  removeTab(e) {
    //Prevent bubbling to prevent triggering li's bubbling event
    e.stopPropagation();
    var index = this.parentNode.index;
    console.log(index);
    //Delete the corresponding li and section according to the index number, the remove() method can directly delete the specified element
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    // When we delete li that is not in the selected state, the original selected state li remains unchanged
    if (document.querySelector(".liactive")) return;
    //When we delete the li in the selected state, let its previous li be in the selected state
    index--;
    //Manually call the click event, automatically trigger the click event
    that.lis[index] && that.lis[index].click();
  }

  // 4. Modify function
  editTab() {
    var str = this.innerHTML;
    // Double click to disable selected text
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();
    // alert(11);
    this.innerHTML = '<input type="text" />';
    var input = this.children[0];
    input.value = str;
    input.select(); // The text in the text box is selected
    // When we leave the text box, give the value in the text box to span
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
    };
    // Pressing Enter can also give the value in the text box to the span
    input.onkeyup = (e) => {
      if (e.keyCode === 13) {
        // Manually call the form lose focus event without the mouse leaving action
        this.blur();
      }
    };
  }
}

new Tab("#tab");
