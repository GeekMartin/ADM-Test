$(document).ready(function ($) {
    //---------------------Accordion-------------------------//
    $('#accordion').find('.accordion-toggle').click(function () {

        //Expand or collapse this panel
        $(this).next().slideToggle('slow');

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('slow');

    });
    //------------------Accordion Button1----------------------//
    $("#button1").click(function () {

        $('#content1').slideUp('slow');
        $('#content2').slideToggle('slow');

    });
    //------------------Accordion Button2----------------------//
    $("#button2").click(function () {

        $('#content2').slideUp('slow');
        $('#content3').slideToggle('slow');

    });
    //------------------Accordion Button2----------------------//
    $("#button3").click(function () {

        $('#content3').slideUp('slow');
        $('#content4').slideToggle('slow');

    });

    //----------------Accordion-1 checkbox limit---------------//
    $("input[name='accordion1checkBx']").change(function () {
        var maxAllowed = 3;
        var cnt = $("input[name='accordion1checkBx']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('Valida saab maksimaalselt ' + maxAllowed + ' artiklit.');
        }
    });

    //----------------Accordion-2 checkbox limit---------------//
    $("input[name='accordion2checkBx']").change(function () {
        var maxAllowed = 3;
        var cnt = $("input[name='accordion2checkBx']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('Valida saab maksimaalselt ' + maxAllowed + ' artiklit.');
        }
    });

    //----------------Accordion-3 checkbox limit---------------//
    $("input[name='accordion3checkBx']").change(function () {
        var maxAllowed = 3;
        var cnt = $("input[name='accordion3checkBx']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('Valida saab maksimaalselt ' + maxAllowed + ' artiklit.');
        }
    });
    //----------------Accordion-4 checkbox limit---------------//
    $("input[name='accordion4checkBx']").change(function () {
        var maxAllowed = 3;
        var cnt = $("input[name='accordion4checkBx']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('Valida saab maksimaalselt ' + maxAllowed + ' artiklit.');
        }
    });

    //------------------Checkbox-1 counter---------------------//
    var $checkboxes1 = $('#accordion-1 input[type="checkbox"]');

    $checkboxes1.change(function () {
        var countCheckedCheckboxes1 = $checkboxes1.filter(':checked').length;
        $('#count-checked-checkboxes-accordion1').text(countCheckedCheckboxes1);
    });
    //------------------Checkbox-2 counter---------------------//
    var $checkboxes2 = $('#accordion-2 input[type="checkbox"]');

    $checkboxes2.change(function () {
        var countCheckedCheckboxes2 = $checkboxes2.filter(':checked').length;
        $('#count-checked-checkboxes-accordion2').text(countCheckedCheckboxes2);
    });
    //------------------Checkbox-3 counter---------------------//
    var $checkboxes3 = $('#accordion-3 input[type="checkbox"]');

    $checkboxes3.change(function () {
        var countCheckedCheckboxes3 = $checkboxes3.filter(':checked').length;
        $('#count-checked-checkboxes-accordion3').text(countCheckedCheckboxes3);
    });
    //------------------Checkbox-3 counter---------------------//
    var $checkboxes4 = $('#accordion-4 input[type="checkbox"]');

    $checkboxes4.change(function () {
        var countCheckedCheckboxes4 = $checkboxes4.filter(':checked').length;
        $('#count-checked-checkboxes-accordion4').text(countCheckedCheckboxes4);
    });

    //---------------------Pop-up-box------------------------//
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("tingimused");
    var span = document.getElementsByClassName("closebtn")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
