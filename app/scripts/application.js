$(document).ready(function() {

  $("#hero-carousel").owlCarousel({
      navigation : true,
      slideSpeed : 450,
      paginationSpeed : 400,
      mouseDrag : false,
      autoHeight : true,
      singleItem:true
  });

  $('.scroll-link').smoothScroll();

  function scrollBanner() {
    $(document).scroll(function(){
      var scrollPos = $(this).scrollTop();
      $('.logo').css({
        'top' : (scrollPos/3)+'px',
        'opacity' : 1-(scrollPos/410)
      });
    });
  }
  scrollBanner();
});
