
//typedJs
var typed = new Typed('#element', {
  strings: [ '"Save 50% with Sales Coupon"'],
  typeSpeed: 20,
  
});
//dialogBox
$(document).ready(function() {
  $("#dialog").dialog({
    autoOpen: true,
    width: 400,  // Set the width to 400px
    position: { my: "left bottom", at: "left bottom", of: window },
    resizable: false,
    draggable: false,
    create: function(event, ui) {
      $(this).closest('.ui-dialog').css({
        'position': 'fixed' // Change to fixed
      });
    }
  });

  $("#later").click(function() {
    $("#dialog").dialog("close");
  });

  $("#allow").click(function() {
    window.location.href = "contactUs.html"; // Change to your subscribe page URL
  });
  
  console.log("i am done");
});
//LighboxSlider
    $(document).ready(function () {

        $('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerPadding: '0',
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        console.log(" i am done");
    });

    lightGallery(document.querySelector('.LightBoxSlider'));
    $( function() {
      $( "#accordion" ).accordion();
      console.log("i am done");
    } );
    