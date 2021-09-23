

$(document).ready(function(){

  'use strict';

    // banner slick slider;

    $('.banner-slider').slick({
      arrows:true,
      prevArrow: '.banner-btn1',
      nextArrow: '.banner-btn2',
    });

    // portfolio venobox;

    $('.venobox').venobox(); 

    // services part slick;

   $('.service-slider').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     vertical: true,
     prevArrow: '.prev-btn',
     nextArrow: '.next-btn',
   });

    // feedback part slick;

    $('.feedback-image-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      arrows:true,
      asNavFor: '.feedback-text-slider',
      prevArrow: '.fbtn1',
      nextArrow: '.fbtn2',
      centerMode: true,
      centerPadding: '0px',
    });

    // feedback text slider;

    $('.feedback-text-slider').slick({
      slidesToShow: 1,
      asNavFor: '.feedback-image-slider',
      arrows: false,
      
    });


    // counter up;

    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

  // themeforest slick;

  $('.themeforest-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
  });


    






})