$(function(){

  $('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed:2000,
    arrows:false,
    nextArrow:".next",
    prevArrow:".prev",
    dots:true,

  });
  new VenoBox({
    selector: '.my-video-links',
});


}) 