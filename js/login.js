$(document).ready(function () {
     $('.toggle-password').click(function() {
          $(this).toggleClass('fa-eye fa-eye-slash');
          const toggle = $(this).attr('toggle');
          const stateInput = $('.' + toggle).attr('type');
          if (stateInput === 'password') {
              $('.' + toggle).attr('type', 'text');
          } else {
              $('.' + toggle).attr('type', 'password');
          }
      });
})