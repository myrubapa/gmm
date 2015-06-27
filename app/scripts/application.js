$(document).ready(function() {
'use strict';

  $('#hero-carousel').owlCarousel({
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


  var delta, didScroll, hasScrolled, lastScrollTop, navbarHeight;

  didScroll = void 0;

  lastScrollTop = 0;

  delta = 5;

  navbarHeight = $('#sneak-peek').outerHeight();

  hasScrolled = function() {
    var st;
    st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }
    if (st > lastScrollTop && st > navbarHeight) {
      $('#sneak-peek').removeClass('peek-up').addClass('peek-down');
    } else {
      if (st + $(window).height() < $(document).height()) {
        $('#sneak-peek').removeClass('peek-down').addClass('peek-up');
      }
    }
    lastScrollTop = st;
  };

  $(window).scroll(function() {
    didScroll = true;
  });

  setInterval((function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }), 250);


  $(window).scroll(function() {
     var hT = $('#do-good').offset().top,
         hH = $('#do-good').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
     if (wS > (hT+hH-wH)){
       $('#sneak-peek').addClass('hide');
       $('body').addClass('hide');
     }
     else if (wS < (hT+hH-wH)) {
      $('#sneak-peek').removeClass('hide');
      $('body').removeClass('hide');
     }
  });


});
