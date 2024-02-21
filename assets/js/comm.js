$(document).ready(function() {
    $('.ani-title').each(function(index) {
      $(this).delay($(this).data('delay')).queue(function(){
        $(this).addClass('animate-in');
      });
    });
  });
  