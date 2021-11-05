$(document).ready(function(){




var a = $("nav div.nav-link a");

a.click(function(){
    a.removeClass('active');
    $(this).addClass('active');

  
});







// when button clicks in mobile-navbar, menu appears
var button = $("div.mobile-navbar div.bar button");

button.click(function(){
    $("div.mobile-menu").toggleClass('mobile-menu-active')
});




// main manu of page scrolling
$(window).scroll(function() {
    // console.log(window.scrollY);
    if (window.scrollY > 80) {
        $("nav").addClass("active");
        
    } else {
        $("nav").removeClass("active");
    }
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



//when links press in nav , automatically returns its page 
var nav_a = $("#home div.nav-link a");

    nav_a.click(function() {
        var data = $(this).data("target");
        // alert(data)
        var t = $(data).offset().top;
        $("html, body").animate({
            scrollTop: t
        }, 1000)
    });



//when links press in mobile-navbar , automatically returns its page 

var mob_a = $("#home div.mobile-menu a");

    mob_a.click(function() {
        var data = $(this).data("target");
        // alert(data)
        var m = $(data).offset().top;
        $("html, body").animate({
            scrollTop: m
        }, 1000)
    });



var scrll = $(".scroll-nav")

$(window).scroll(function() {
    scrll.each(function(index, el){
        var top = $(el).offset().top;
        var bottom = top + $(el).height();
        if(window.scrollY >= top - 10 && window.scrollY <= bottom) {
            a.removeClass('active');
            $("nav div.nav-link a[data-target='#" + el.id + "']").addClass('active'); 
            ab.removeClass('mobile-active');
            $("div.mobile-menu a[data-target='#" + el.id + "']").addClass('mobile-active');  
            
        }
    });
});



var ab = $("div.mobile-menu a");

ab.click(function(){
    ab.removeClass('mobile-active');
    $(this).addClass('mobile-active');

  
});





});