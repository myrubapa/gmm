$(document).ready(function() {
'use strict';

  $('.owl-carousel').owlCarousel({
      autoplay : true,
      autoplayHoverPause : true,
      smartSpeed : 650,
      dots : true,
      items : 1,
      loop:true,
      mouseDrag : false,
      nav : true,
      navText : ['','']
  });

  $('.scroll-link').smoothScroll();
});
