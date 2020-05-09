$(document).ready(function () {

    let Med = [{ name: "one" },
    { name: "two" },
    { name: "thre" },
    { name: "four" }];
    $('.inputs-med .inp').on('keyup', function () {
        let empty = false;
        $('.inputs-med .inp').filter('.inp[required]').each(function () {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#addMedical').attr('disabled', true);
        }
        else {
            $('#addMedical').attr('disabled', false);
        }

    });
    $("#addMedical").click(function () {
        let nameMed = $("#medicalName").val();
        let medItem = {
            name: nameMed
        }
        Med.push(medItem);

        showMed();

    })
    /*
! Demo display med
? it is cancel
*/
    function showMed() {
        if (Med.length != 0) {
            let temp = ``;
            for (let i = 0; i < Med.length; i++) {
                temp += `<div class="col-4 my-2">
              <div class="item-medical py-2 bg-white shadow text-center rounded-pill">
                 ${Med[i].name}</div >
</div >`
            }
            document.getElementById("itemMed").innerHTML = temp;
        }
    } showMed();



})