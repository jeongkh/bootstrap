$(document).ready(function() {
  $("#info a").click(function(){
    $("#yfg1").load("info.html");
    $("#div1").load("info1.html");
  });
  $("#info1 a").click(function(){
    $("#div1").load("info1.html");
  });
  $("#vision a").click(function(){
    $("#div1").load("vision.html");
  });
  $("#map1 a").click(function(){
    $("#div1").load("map1.html");
  });
});
