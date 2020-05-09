$(document).ready(function () {
     function readURL(input) {
          if (input.files && input.files[0]) {
              const reader = new FileReader();
              // tslint:disable-next-line:only-arrow-functions
              reader.onload = function(e) {
                  $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                  $('#imagePreview').hide();
                  $('#imagePreview').fadeIn(650);
              };
              reader.readAsDataURL(input.files[0]);
          }
      }
        $('#imageUpload').change(function() {
          readURL(this);
      });
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
        $('#flatpickr-birthdate').focus(function() {
      $(this).attr('type', 'date');
    });
        // tslint:disable-next-line:only-arrow-functions
    
        // tslint:disable-next-line:only-arrow-functions
        $('#Back2').click(function() {
      $('.sign-form').hide();
      $('.sign-in-form-one').show();
    
    });
        $('.button-form').click(function() {
          const idButton = $(this).attr('id');
          if (idButton === 'continue') {
            $('.sign-form').hide();
            $('.sign-in-form-three').show();
          }
        });
        flatpickr("#flatpickr-birthdate", {});

});