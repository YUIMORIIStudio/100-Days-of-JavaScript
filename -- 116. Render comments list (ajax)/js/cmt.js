function getCommentList() {
  $.ajax({
    method: "GET",
    url: "http://www.liulongbin.top:3006/api/cmtlist",
    //success callback function
    success: function (res) {
      //获取数据失败
      if (res.status !== 200) return alert("Failed to get comment list!");
      //数据获取成功
      //console.log("数据获取成功")
      var rows = []; //声明一个空数组, 储存获取的数据
      $.each(res.data, function (i, item) {
        // 循环拼接字符串

        //i是索引
        var str =
          '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">time：' +
          item.time +
          '</span><span class="badge" style="background-color: #5BC0DE;">user：' +
          item.username +
          "</span>" +
          item.content +
          "</li>";
        //获取的数据push 到rows数组里
        rows.push(str);
      });

      $("#cmt-list").empty().append(rows.join("")); // 渲染列表的UI结构
    },
  });
}
//call function
getCommentList();

//获取用户post内容
$(function () {
  $("#formAddCmt").submit(function (e) {
    e.preventDefault();
    // 快速得到表单中的数据
    var data = $(this).serialize();
    $.post("http://www.liulongbin.top:3006/api/addcmt", data, function (res) {
      if (res.status !== 201) {
        return alert("Failed to post！");
      }
      // 刷新评论列表
      getCommentList();
      // 快速清空表单内容
      $("#formAddCmt")[0].reset();
    });
  });
});
