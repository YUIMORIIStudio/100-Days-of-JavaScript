var that;
class Tab {
  constructor(id) {
    that = this;
    // 获取元素
    this.main = document.querySelector(id);
    // this.lis = this.main.querySelectorAll("li");
    // this.sections = this.main.querySelectorAll("section");
    // this.remove = this.main.querySelectorAll(".icon-guanbi");
    this.add = this.main.querySelector(".tabadd");
    //li 的父元素
    this.ul = this.main.querySelector(".firstnav ul:first-child");
    //section的父元素
    this.fsection = this.main.querySelector(".tabscon");
    this.init();
  }

  // init 初始化操作让相关的元素绑定事件
  init() {
    //調用updateNode方法幫助所有li重新獲取點擊事件(包括那些新添加的)
    this.updateNode();
    //addTab綁定事件(不要寫在for-loop裡)
    this.add.onclick = this.addTab;
    //toggleTab綁定事件
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      //this.lis[i].onclick = () => {
      //console.log(this.index)};
      this.lis[i].onclick = this.toggleTab;
      this.remove[i].onclick = this.removeTab;
    }
  }
  //獲取所有的li和section的方法
  //!!!因为我们动态添加元素 需要从新获取对应的元素
  updateNode() {
    this.lis = this.main.querySelectorAll("li");
    this.sections = this.main.querySelectorAll("section");
    this.remove = this.main.querySelectorAll(".icon-guanbi");
  }
  // 1. 切换功能
  toggleTab() {
    //console.log(this.index);
    that.clearClass(); //1.不應該用this,因為是constructor裡面的this調用le clearClass這個方法 2. that.clearClass使用的是排他思想,所以必須卸載toggleTab的第一排. 先全部去掉active, 再用this 表示當前
    this.className = "liactive";
    //this.sections[this.index].className = "conactive";
    that.sections[this.index].className = "conactive";
  }
  // 清除所有li 和section 的active类(排他思想)
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  }

  // 2. 添加功能
  addTab() {
    var random = Math.random();
    //調用clearClass
    that.clearClass();
    //以前的作法: 動態創建createElement,需要innerHTML進行複製,再用appendChild追加到父元素中, 但如果元素內容較多的話,操作就很麻煩,這時考慮用insertAdjacentHtml(position,text)-支持追加字符串的元素;
    //1. 創建li元素和section元素
    var li =
      '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
    var section = '<section class="conactive">test' + random + "</section>";
    //2. 把這兩個元素追加到li元素
    that.ul.insertAdjacentHTML("beforeend", li);
    that.fsection.insertAdjacentHTML("beforeend", section);
    //這個選項卡是後添加的, 測試123是頁面加載時就獲取的
    //相当于每次点击添加后，都会重新获取页面的li和section，以此保证个数是实时的
    that.init();
  }
  // 3. 删除功能
  removeTab(e) {
    //阻止冒泡, 防止觸發li的冒泡事件
    e.stopPropagation();
    var index = this.parentNode.index;
    console.log(index);
    //根據索引號刪除對應的li和section, remove()方法可以直接刪除指定的元素
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    //當我們刪除了選中狀態的這個li的時候, 讓它的前一個li處於選定狀態
    index--;
    //手動調用點擊事件,自動觸發點擊事件
    that.lis[index] && that.lis[index].click();
  }

  // 4. 修改功能
  editTab() {}
}

new Tab("#tab");
