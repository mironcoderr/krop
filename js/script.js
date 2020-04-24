


//MENU PART JAVA SCRIPT PART START

$(window).on("scroll", function(){
    
    var scrolling = $(this).scrollTop();
    
    if (scrolling > 130) {
        $(".menu_head").addClass("menu_fix");
    } else {
        $(".menu_head").removeClass("menu_fix");
    }
});

//MENU PART JAVA SCRIPT PART END






//BACK TO TO BUTTON JAVA SCRIPT PART START

$(window).on("scroll", function(){
    
    var miron = $(this).scrollTop();
    
    if (miron > 1000) {
        $(".back_btn").fadeIn();
    } else {
        $(".back_btn").fadeOut();
    }
});

//BACK TO TO BUTTON JAVA SCRIPT PART END






//COUNTER PART JAVA SCRIPT PART START

$('.count').counterUp({
    delay: 10,
    time: 1000
});

//COUNTER PART JAVA SCRIPT PART END






//FEEDBACK PART JAVA SCRIPT PART START

$('.feedback_slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//FEEDBACK PART JAVA SCRIPT PART END






//PROTFOLIO PART JAVA SCRIPT PART START

var mixer = mixitup('.miron');

//PROTFOLIO PART JAVA SCRIPT PART END





//PRELOADER PART JAVA SCRIPT PART START

window.addEventListener("load", function(){
    var miron = document.querySelector(".preloader");
    miron.classList.add("load_finish");
});


$('.js-preloader').preloadinator();


//PRELOADER PART JAVA SCRIPT PART END


