$(document).ready(function() {
  $("#one a").click(function(){
    $("#div1").load("list.html");
  });
  $("#two a").click(function(){
    $("#div1").load("support.html");
  });
});
