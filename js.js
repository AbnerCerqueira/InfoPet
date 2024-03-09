document.addEventListener('DOMContentLoaded', function() {
    var carrosel = document.querySelectorAll('.carousel.carousel-slider');
    var instance = M.Carousel.init(carrosel, ({
        fullWidth: true,
        indicators: true,
        duration: 200
    }))
    var carousel_instance = instance[0];
    var move_next = document.querySelector('.moveNextCarousel');
    move_next.addEventListener('click', function(){
        carousel_instance.next(1)
    })
    var move_prev = document.querySelector('.movePrevCarousel');
    move_prev.addEventListener('click', function(){
        carousel_instance.prev(1);
    })
  });