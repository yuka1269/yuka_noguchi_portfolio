
  $(function () {
    $('.slider_work').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
      
    });
        
  });

  $(function () {
    $('.slider_gallery').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
      
    });
        
  });





  $(function(){
    $('.mainvisual').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      });
  });



  

$(function(){
  $(".hamburger").click(function (){
    $(".hamburger").toggleClass("open");
    $(".header_nav-sp").fadeToggle();

});
});

