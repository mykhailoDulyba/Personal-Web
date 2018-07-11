

        $(".owl-carousel").owlCarousel({
          items:1,
          center: true,
          smartSpeed:700

        });




    window.onscroll = function() { stickyMenu() };
    function stickyMenu() {
        const menu = document.getElementById('menu');
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            menu.classList.add('stick');
        }
        else {
            menu.classList.remove('stick');
        }
    }
    
    
    $(".work-bt").click(function(){
      var value = $(this).attr("data-filter");
      if (value == "all")
      {
        $(".filter").show("1000");
      }
      else
      {
        $(".filter").not("."+value).hide("1000");
        $(".filter").filter("."+value).show("1000");
      }
    });
        //Active class
        $(".work-bt").click(function(){
          $(this).addClass('activer').siblings().removeClass('activer');

    });

/*=========Skill bar =============*/
$(document).scroll(function () {
    var top = $(document).scrollTop(),
        skillsTop = $("#skills").offset().top;
    if(top > skillsTop-300){
        console.log(skillsTop);
        console.log(top);
        $('.bar-width').each(function(){
            $(this).animate({
                width:$(this).attr('data-percent')
            },2000);
        });
    }
});




   $(document).ready(function(){
      var touch = $('#burger-menu');
        var menu = $('#nav');
     
        $(touch).click(function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 760 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
        
    });
    
    
    
    $('.test-popup-link').magnificPopup({
  type: 'image',
  gallery:{
  	enabled: true
  },
   removalDelay: 300,
   mainClass: 'mfp-fade'
  // other options
});
$(document).ready(function() {
  $('.zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
});

