
$('.modal-item').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
});

$('.click-me').click(function() {
  $('.modal').removeClass('modan');
  setTimeout(function() {
    $('.modal-overlay, .modal').css('display', 'block');
  }, 800);
  $('.modal-item').slick('refresh');
});

$('.close').click(function() {
  $('.modal').addClass('modan');
  setTimeout(function() {
    $('.modal-overlay, .modal').css('display', 'none');
  }, 800);
});

$('.btn-login').on('click', function(event) {
    event.preventDefault();
    $('.modal-item').slick('slickNext'); 
});

$('.btn-register').on('click', function(event) {
    event.preventDefault();
    $('.modal-item').slick('slickPrev'); 
});
