$('.click-me').click(function() {
  $('.modal').css('display', 'flex');
});
$('.close').click(function() {
  $('.modal').toggle();
});
$('.register').click(function() {
  $('.modal-body').toggle();
});


