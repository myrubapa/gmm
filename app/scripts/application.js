$(document).ready(function() {

  $('#hero-carousel').owlCarousel({
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
      $('#logo-header').css({
        'top' : (scrollPos/3)+'px',
        'opacity' : 1-(scrollPos/410)
      });
    });
  }
  scrollBanner();



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
      $('#sneak-peek').removeClass('nav-up').addClass('nav-down');
    } else {
      if (st + $(window).height() < $(document).height()) {
        $('#sneak-peek').removeClass('nav-down').addClass('nav-up');
      }
    }
    lastScrollTop = st;
  };

  $(window).scroll(function(event) {
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
     }
     else if (wS < (hT+hH-wH)) {
      $('#sneak-peek').removeClass('hide');
     };
  });


});
