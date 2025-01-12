$(document).ready(function() {
  setTimeout(function(){
    $('.overlay').fadeIn(400,
      function() {
          $('.comeback')
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  }, 2000);
  $('.comeback__close, .overlay').click(function () {
    $('.comeback')
      .animate({opacity: 0, top: '45%'}, 200,
      function() {
          $(this).css('display', 'none');
          $('.overlay').fadeOut(400);
      }
      );
  });
});
