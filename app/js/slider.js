$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,

        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
    
          800: {
            items: 2,
          },
    
          1000: {
            items: 3,
          }
        },
      });
    
    $('.owl-prev span')[0].innerHTML = '<i class="far fa-arrow-alt-circle-left"></i>';
    $('.owl-next span')[0].innerHTML = '<i class="far fa-arrow-alt-circle-right"></i>';


    $('.card').click( ()=>{
      Avgrund.show( "#default-popup" );
    });

    $('#btn_close').click( ()=>{
      Avgrund.hide();
    })
});