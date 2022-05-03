$(document).ready(function () {
  //Used js for Product Box and Product Thumbs Slider
  $('#home-category-slider,#sub-category-slider,#manufacturer-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["prev", "next"],
    autoPlay: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 1
      },
      768: {
        items: 3
      },
      980: {
        items: 3
      },
      1199: {
        items: 3
      }
    }
  });
  $('#product-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["prev", "next"],
    autoPlay: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 2
      },
      640: {
        items: 2
      },
      768: {
        items: 3
      },
      980: {
        items: 3
      },
      1199: {
        items: 3
      }
    }
  });
  $('#crosssell-products-slider,#home-bestseller-slider,#home-features-slider,#related-products-slider,#also-purchased-products-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["prev", "next"],
    autoPlay: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 1
      },
      768: {
        items: 3
      },
      980: {
        items: 3
      },
      1199: {
        items: 4
      }
    }
  });
  /* Used js for BackTop Page Scrolling*/
  (function ($) {
    $.fn.backTop = function (options) {
      var backBtn = this;
      var settings = $.extend({
        'position': 400,
        'speed': 500,
      }, options);

      //Settings
      var position = settings['position'];
      var speed = settings['speed'];

      backBtn.css({
        'right': 40,
        'bottom': 40,
        'position': 'fixed',
      });

      $(document).scroll(function () {
        var pos = $(window).scrollTop();

        if (pos >= position) {
          backBtn.fadeIn(speed);
        } else {
          backBtn.fadeOut(speed);
        }
      });

      backBtn.click(function () {
        $("html, body").animate({
          scrollTop: 0
        },
          {
            duration: 1200
          });
      });
    }
  }(jQuery));

  $('#backTop').backTop({
    'position': 200,
    'speed': 500,
  });
  $('#home-news-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["prev", "next"],
    autoPlay: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 1
      },
      768: {
        items: 2
      },
      980: {
        items: 2
      },
      1199: {
        items: 2
      }
    }
  })
});