$(document).ready(function() {

    $('#demo-htmlselect').ddslick({
        width: 80,
    });
    $("#next-item button").click(function() {
        $(this).fadeOut();
        $("#save-number").fadeIn();
        $("#verity").css({ display: "flex" });

    })
    $("#save-item-phone").click(function() {
        $("#box-phone-change").fadeOut();
    })

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });
    $("#flatpickr").flatpickr({
        enableTime: false,
        dateFormat: "d/F/ Y"
    });
    $("#change-passWord").click(
        function() {
            $("#box-password-change").css({ display: "flex" })
        }
    )
    $("#change-phone").click(
        function() {
            $("#box-phone-change").css({ display: "flex" })
        }
    )
    $("#save-change-pass").click(function() {
        $("#box-password-change").css({ display: "none" })
    })
    $(".toggle-password ").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var toggle = $(this).attr("toggle");
        let stateInput = $("." + toggle).attr("type");
        if (stateInput == "password") {
            $("." + toggle).attr("type", "text");
        } else {
            $("." + toggle).attr("type", "password");
        }
    });
})