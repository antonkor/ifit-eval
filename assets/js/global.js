(function($) {

  pushBody();

  $(".page-header").headroom({
    "tolerance": 5,
    //"offset": 205,
  });


  var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoHeight: true,
      autoplay: 3000,
      effect: 'fade'
  });


  // animate hero section
  var $page_header = $('#page_header'),
  $hero_height = $('.hero-wrap').height()/2;

  $(window).on('scroll', function() {
      var top = $(this).scrollTop();
      $('.hero-inner').css({
          'margin-top' : -(top/5)+"px",
          'opacity' : 1 - top/$hero_height
      });
      $page_header.css('background-color', '')
  });


  // search animation
  $('.search-icon').click(function() {
    if($('.search-wrap').hasClass('active')) {
      reloadPage(); // emulate search
    } else {
      $('.search-wrap').addClass('active');
    }
  });

  $('.search-close').click(function() {
    $('.search-wrap').removeClass('active');
  });


})(jQuery);



// Fire every second of resizing browser window
$(window).on("throttledresize", function( event ) {

});
// Fire after 2 seconds of resizing browser window
$(window).on("debouncedresize", function( event ) {
  pushBody();
});

// Reload page after each major breakpoint
enquire.register("screen and (max-width: 767px)", {
  unmatch : function() {
    reloadPage();
  }
});
enquire.register("screen and (min-width: 768px) and (max-width: 991px)", {
  unmatch : function() {
    reloadPage();
  }
});
enquire.register("screen and (min-width: 992px) and (max-width: 1199px)", {
  unmatch : function() {
    reloadPage();
  }
});
enquire.register("screen and (min-width: 1200px)", {
  unmatch : function() {
    reloadPage();
  }
});
function reloadPage() {
  location.reload(false);
}



// Header magic for fixed headers
function pushBody(includeSubHeader) {
  var topNavHeight = $('.fixed-header').outerHeight();

  if(includeSubHeader === undefined) {
    topNavHeight += $('.sub-header').outerHeight();
  }

  $('body').css({paddingTop: topNavHeight});
}
