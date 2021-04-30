$(document).ready(function(){
    $('.client-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
           {
            breakpoint: 1024,
            settings: {
              infinite: true,
              dots: false, 
            }
          },
        ],
    });
    
});

$(document).ready(function(){
    $('.works-slider').slick({
        arrows: false,
        dots: false,
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
                    dots: false, 
                }
              },
            {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false, 
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
})