$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });
$('.cate-btn').click(function(){
  $('nav ul .cate-show').toggleClass("show");
  $('nav ul .first').toggleClass("rotate");
});
  $('.talle-btn').click(function(){
  $('nav ul .talle-show').toggleClass("show1");
  $('nav ul .second').toggleClass("rotate");
});
$('.color-btn').click(function(){
  $('nav ul .color-show').toggleClass("show2");
  $('nav ul .three').toggleClass("rotate");
});