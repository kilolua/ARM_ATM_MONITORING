'use strict';

$(document).ready(function() {
    var heightContent = $('body').height() - 111;
   /* var scrollBlock = $('.scroll-pane');

    scrollBlock.css('height', heightContent);

    scrollBlock.jScrollPane({
        contentWidth: '0px'
    });

    var api = scrollBlock.data('jsp');
    if (typeof api != 'undefined' && api != null) {
        setInterval(
            function () {
                api.getContentPane();
                api.reinitialise();
            }
        );
    }*/

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.btn-scroll-to').bind('click', function() {
            api.scrollTo(parseInt(), parseInt(document.getElementById("scroll-to").offsetTop));
            return false;
        }
    );

    $('.spoiler-head').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.preloader').on('click', function(e) {
        e.preventDefault();
        $('.loader-wrap').removeClass('hide');
        setTimeout(function() {
            $('.loader-wrap').addClass('hide');
        }, 2000);
    });

    $(".file-upload-name input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").text(filename);
    });

    $('.select').styler();

    $( ".datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "images/calendar.svg",
        buttonImageOnly: true,
        showOtherMonths: true,
        selectOtherMonths: true
    });

    $(".eye").click(function() {
        $(this).toggleClass('openEye');
        var passVal = $(".password-input").attr('type');
        if ( passVal === 'password' ) {
            $(this).prev().attr('type', 'text');
        }
        else {
            $(this).prev().attr('type', 'password');
        }
    });

    $(".btn-modal").click(function() {
        $('.modal-block').addClass('open');
    });
    $(".close-btn-modal, .modal-block .overflow").click(function() {
        $('.modal-block').removeClass('open');
    });


    /*** Checkbox all ***/

    $(document).on('change', 'input[type=checkbox]', function () {
        var $this = $(this),
            $chks = $(document.getElementsByName(this.name)),
            $all = $chks.filter(".chk-all");

        if ($this.hasClass('chk-all')) {
            $chks.prop('checked', $this.prop('checked'));
        } else switch ($chks.filter(":checked").length) {
            case +$all.prop('checked'):
                $all.prop('checked', false).prop('indeterminate', false);
            break;
            case $chks.length - !!$this.prop('checked'):
                $all.prop('checked', true).prop('indeterminate', false);
            break;
            default:
                $all.prop('indeterminate', true);
        }
    });

    /*** Progressbar ***/

    $( "#progressbar" ).progressbar({
        value: 37
    });


    $(document).mouseup(function(e){
        var check = $('.time-block input[type=checkbox]:checked');
        var div = $(".time-block--dropdown");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            check.prop('checked', false);
        }
    });
});
