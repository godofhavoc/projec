$(document).ready(function() {
  $(".month").slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 3,
    speed: 500,
    centerMode: true
  });

  $(".tours-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
  });

  var $galleryContainer = $(".gallery-container");

  $galleryContainer.slick();

  $galleryContainer.find(".gallery-left-arrow").on("click", function() {
    $galleryContainer.slick("slickPrev");
  });

  $galleryContainer.find(".gallery-right-arrow").on("click", function() {
    $galleryContainer.slick("slickNext");
  });

// // $(".slide.slick-slide.slick-active").on("click" , function(evt){
// //   $(evt.target).addClass("active");
// //   $(evt.target).siblings().removeClass("active");
// //   $(evt.target).siblings().addClass("active2");


// });


});
