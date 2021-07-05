$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 500) {
        $('#gaHeader').addClass("colorear");
       } else {
        $("#gaHeader").removeClass("colorear");
       }
    });
});