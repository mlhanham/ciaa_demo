jQuery(document).ready(function ($) {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1500,
    animateOut: 'fadeOut',
    responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
    }
  });
 
});
