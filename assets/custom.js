
$(function () {
    $("#datepicker").datepicker();
   
});


$(document).ready(function(){
    console.log('hello')
    $(window).on('scroll',function(ev){
        var scroll = $(window).scrollTop();
        if(scroll>490){
            $(".custom-navbar").addClass('full-menu');
            console.log('scroll',scroll);
        }else{
            $(".custom-navbar").removeClass('full-menu');
        }
    });
  });