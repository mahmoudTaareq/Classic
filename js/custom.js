/*global $, alert, console*/

$(function () {
   'use stricrt';
 
    var myHeader = $('.header');
        
    myHeader.height($(window).height());
    
    $(window).resize(function () {
      
      myHeader.height($(window).height());
    });
    
    $('.links li').click(function () {
        
       $(this).addClass('active').siblings().removeClass('active')
        
    });
    
    //adjust bxslider list item center
    
    //adjust bx slider items center
    
 $('.bxslider').each(function () {
     
  $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
     
 });

   //bx slider
    
  $('.bxslider').bxSlider({
      
      pager: false
  });
//smoth scroll to div
    
$('.links li a').click(function () {
    
    $('html, body').animate({
        
        scrollTop:$('#' + $(this).data('value')).offset().top
        
    }, 1000 );
    
    console.log($(this).data('value'));
    
});   
    
    //Our Auto Slider Code
    
(function autoSlider()
    {
        $(".slider .active").delay(2000).fadeOut(2000,function()
        {
            $(this).removeClass("active");
            var next = ($(this).index() + 1 ) % 5;
            $(".slider div").eq(next).addClass("active").fadeIn();
             autoSlider();
        });   
    })();
    
    //Trigger mixit up
var mixer = mixitup('#Container');    
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 1000
    }
});
    
  //shuffle 
  $('.shuffle li').click(function () {
      
     $(this).addClass('selected').siblings().removeClass('selected'); 
      
  });  
  
    //trigger nicescrol;
    
$("html").niceScroll();        

    
});