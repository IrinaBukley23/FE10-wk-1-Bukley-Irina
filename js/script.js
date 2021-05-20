//menu
$(document).ready(function(){
  $('.header-burger').click(function(event){
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

//works-slider

$(document).ready(function(){

  $('.works-slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
             responsive: [
          {
              breakpoint: 2048,
              settings: "unslick",
          },
          {
              breakpoint: 1100,
              settings: { 
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true, 
              }
            },
          {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true, 
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ],
    });
    
  $('.works-slider').slick('setPosition');

})

//client-slider
$(document).ready(function(){
    $('.client-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        responsive: [
           {
            breakpoint: 1024,
            settings: {
              infinite: true,
              dots: true, 
              appendDots:$('.dots-block'),
            }
          },
        ],
    });
    
});
