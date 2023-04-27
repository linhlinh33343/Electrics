
$(document).ready(function () {
	$(".slick-list-categories").slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: true,
		
    responsive: [
      {
          breakpoint: 1199,
          settings: {
              slidesToShow: 6,
              slidesToScroll: 6
          }
      },
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 479,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 400,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },

  ]
	});
	$(".prev-btn").click(function () {
		$(".slick-list-categories").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".slick-list-categories").slick("slickNext");
	});
	// $(".prev-btn").addClass("slick-disabled");
	// $(".slick-list").on("afterChange", function () {
	// 	if ($(".slick-prev").hasClass("slick-disabled")) {
	// 		$(".prev-btn").addClass("slick-disabled");
	// 	} else {
	// 		$(".prev-btn").removeClass("slick-disabled");
	// 	}
	// 	if ($(".slick-next").hasClass("slick-disabled")) {
	// 		$(".next-btn").addClass("slick-disabled");
	// 	} else {
	// 		$(".next-btn").removeClass("slick-disabled");
	// 	}
	// });

  
});




$(document).ready(function () {
	$(".slick-list-testimonial").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: false,
    responsive: [{
      breakpoint: 1199,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
      }
  }

]
	});
	$(".prev-testimonial").click(function () {
		$(".slick-list-testimonial").slick("slickPrev");
	});

	$(".next-testimonial").click(function () {
		$(".slick-list-testimonial").slick("slickNext");
	});

});

$(document).ready(function () {
	$(".slick-list-arrivals").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		
		arrows: false,
		infinite: true,
		autoplay: false,
    responsive: [{
      breakpoint: 1199,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
      }
  }

]
	});
	$(".prev-arrivals").click(function () {
		$(".slick-list-arrivals").slick("slickPrev");
	});

	$(".next-arrivals").click(function () {
		$(".slick-list-arrivals").slick("slickNext");
	});

});

$(document).ready(function () {
	$(".slick-list-products").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		rows:2,
		arrows: false,
		infinite: true,
		autoplay: false,
		
    responsive: [{
      breakpoint: 1199,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
      }
  }

]
	});
	$(".prev-products").click(function () {
		$(".slick-list-products").slick("slickPrev");
	});

	$(".next-products").click(function () {
		$(".slick-list-products").slick("slickNext");
	});

});


$(document).ready(function () {

    $('.slider-content-activation-one').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        focusOnSelect: false,
        speed: 500,
        fade: true,
        autoplay: false,
        asNavFor:".slick-list-slider"
      
    });
	
});

$(document).ready(function () {
	$(".slick-list-slider").slick({
		slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        dots: true,
        speed: 300,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
		asNavFor:".slider-content-activation-one",
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
	});


  
});



$(window).on('scroll', function() {
        // Sticky Class Add
      
        if ($('body').hasClass('body-header')) {
            var stickyPlaceHolder = $('#axil-sticky-placeholder'),
                menu = $('.axil-mainmenu'),
                menuH = menu.outerHeight(),
                topHeaderH = $('.axil-header-top').outerHeight() || 0,
                headerCampaign = $('.header-top-campaign').outerHeight() || 0,
                targrtScroll = topHeaderH + headerCampaign;
            if ($(window).scrollTop() > targrtScroll) {
                menu.addClass('axil-sticky');
                stickyPlaceHolder.height(menuH);
            } else {
                menu.removeClass('axil-sticky');
                stickyPlaceHolder.height(0);
            }
        }
    });



    $('.mobile-nav-toggler').on('click', function(e) {
        $('body').toggleClass('open')
        $('.header-main-nav').toggleClass('open');
       

    });

    $('.toggle-search').on('click', function(e) {
        $('body').toggleClass('open')
        $('.header-search-modal').toggleClass('open');
       

    });

    $('.toggle-cart').on('click', function(e) {
        $('body').toggleClass('open')
        $('.cart-dropdown').toggleClass('open');
       

    });
    $('.toggle-account').on('click', function(e) {
        $('.my-account-dropdown').toggleClass('open');
       

    });


    $('.menu-item-has-children > a').on('click', function(e) {

        var targetParent = $(this).parents('.header-main-nav');
        var target = $(this).siblings('.axil-submenu');

        if (targetParent.hasClass('open')) {
            $(target).slideToggle(400);
            $(this).parent('.menu-item-has-children').toggleClass('open');
        }

    });

    $(document).ready(function () {

        $('.slick-campaign').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            speed: 500,
            cssEase: 'linear',
            rtl: false
        });
        $(".prev-campain").click(function () {
            $(".slick-campaign").slick("slickPrev");
        });
    
        $(".next-campain").click(function () {
            $(".slick-campaign").slick("slickNext");
        });
    });

  

    $('input:checkbox.checbox-input1').change(function(){
        
        if($(this).is(":checked")) {
            $('.categori-item1').addClass("current-cat");
        } else {
            $('.categori-item1').removeClass("current-cat");
        }
    });
    $('input:checkbox.checbox-input2').change(function(){
        
        if($(this).is(":checked")) {
            $('.categori-item2').addClass("current-cat");
        } else {
            $('.categori-item2').removeClass("current-cat");
        }
    });
    $('input:checkbox.checbox-input3').change(function(){
        
        if($(this).is(":checked")) {
            $('.categori-item3').addClass("current-cat");
        } else {
            $('.categori-item3').removeClass("current-cat");
        }
    });
    $('input:checkbox.checbox-input4').change(function(){
        
        if($(this).is(":checked")) {
            $('.categori-item4').addClass("current-cat");
        } else {
            $('.categori-item4').removeClass("current-cat");
        }
    });
    $('input:checkbox.checbox-input5').change(function(){
        
        if($(this).is(":checked")) {
            $('.categori-item5').addClass("current-cat");
        } else {
            $('.categori-item5').removeClass("current-cat");
        }
    });
    $('input:checkbox.checbox-input6').change(function(){
        
        if($(this).is(":checked")) {
            $('.categori-item6').addClass("current-cat");
        } else {
            $('.categori-item6').removeClass("current-cat");
        }
    });
    $('input:checkbox.checbox-input7').change(function(){
        
        if($(this).is(":checked")) {
            $('.categori-item7').addClass("current-cat");
        } else {
            $('.categori-item7').removeClass("current-cat");
        }
    });
    $('input:checkbox.checbox-input8').change(function(){
        
        if($(this).is(":checked")) {
            $('.categori-item8').addClass("current-cat");
        } else {
            $('.categori-item8').removeClass("current-cat");
        }
    });
// ddddddddddddddddd
    $('input:checkbox.checbox-gender1').change(function(){
        
        if($(this).is(":checked")) {
            $('.gender-item1').addClass("chosen");
        } else {
            $('.gender-item1').removeClass("chosen");
        }
    });
    $('input:checkbox.checbox-gender2').change(function(){
        
        if($(this).is(":checked")) {
            $('.gender-item2').addClass("chosen");
        } else {
            $('.gender-item2').removeClass("chosen");
        }
    });
    $('input:checkbox.checbox-gender3').change(function(){
        
        if($(this).is(":checked")) {
            $('.gender-item3').addClass("chosen");
        } else {
            $('.gender-item3').removeClass("chosen");
        }
    });

// radio 


$('input[name=color]').change(function(event){
    $(".color-input").each(function(index,ele) {
        
        if($(ele).is(":checked")){
            console.log();
            $(ele).parent().addClass(`chosen${$(ele).val()}`)
        }else{
            $(ele).parent().removeClass(`chosen${$(ele).val()}`)
        }
        });

});


$('input[name=size]').change(function(event){
    $(".size-input").each(function(index,ele) {
        
        if($(ele).is(":checked")){
            console.log();
            $(ele).parent().addClass(`chosen`)
        }else{
            $(ele).parent().removeClass(`chosen`)
        }
        });

});

$('input[name=price]').change(function(event){
    $(".price-input").each(function(index,ele) {
        
        if($(ele).is(":checked")){
            console.log();
            $(ele).parent().addClass(`chosen`)
        }else{
            $(ele).parent().removeClass(`chosen`)
        }
        });

});

    $('#slider-range').slider({
        range: true,
        min: 0,
        max: 5000,
        values: [0, 3000],
        slide: function(event, ui) {
            $('#amount').val('$' + ui.values[0] + '  $' + ui.values[1]);
        }
    });
    $('#amount').val('$' + $('#slider-range').slider('values', 0) +
        '  $' + $('#slider-range').slider('values', 1));

        $('.toggle-list > .title').on('click', function(e) {

            var target = $(this).parent().children('.shop-submenu');
            var target2 = $(this).parent();
            $(target).slideToggle();
            $(target2).toggleClass('active');
        });

        $('.toggle-btn').on('click', function(e) {

            var target = $(this).parent().siblings('.toggle-open');
            var target2 = $(this).parent();
            $(target).slideToggle();
            $(target2).toggleClass('active');
        });

$(document).ready(function () {
	$(".slick-list-product-detail").slick({
		slidesToShow: 4,
		slidesToScroll:4,
		rows:1,
		arrows: false,
		infinite: true,
		autoplay: false,
		
    responsive: [{
      breakpoint: 1199,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
      }
  }

]
	});
	$(".prev-products").click(function () {
		$(".slick-list-product-detail").slick("slickPrev");
	});

	$(".next-products").click(function () {
		$(".slick-list-product-detail").slick("slickNext");
	});

});

$('input[name=color-product]').change(function(event){
    $(".color-product").each(function(index,ele) {
        
        if($(ele).is(":checked")){
          
            $(ele).parent().addClass(`active`)
        }else{
            $(ele).parent().removeClass(`active`)
        }
        });

});


    // $('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
    // $('.pro-qty').append('<span class="inc qtybtn">+</span>');
    $('.qtybtn').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });


// $('input[name=range-variant-item]').change(function(event){
//     $(".range-variant-class").each(function(index,ele) {
        
//         if($(ele).is(":checked")){
           
//             $(ele).parent().addClass(`active`)
//         }else{
//             $(ele).parent().removeClass(`active`)
//         }
//         });

// });



    $(window).on('scroll', function() {
        // Sticky Class Add
        if ($('body').hasClass('sticky-header')) {
            var stickyPlaceHolder = $('#axil-sticky-placeholder'),
                menu = $('.axil-mainmenu'),
                menuH = menu.outerHeight(),
                topHeaderH = $('.axil-header-top').outerHeight() || 0,
                headerCampaign = $('.header-top-campaign').outerHeight() || 0,
                targrtScroll = topHeaderH + headerCampaign;
            if ($(window).scrollTop() > targrtScroll) {
                menu.addClass('axil-sticky');
                stickyPlaceHolder.height(menuH);
            } else {
                menu.removeClass('axil-sticky');
                stickyPlaceHolder.height(0);
            }
        }
    });


    $(document).ready(function () {
        $(".manager-team-slick").slick({
            slidesToShow: 4,
            slidesToScroll:1,
            rows:1,
            arrows: false,
            infinite: true,
            autoplay: false,
            
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        });
        $(".prev-manager-team").click(function () {
            $(".manager-team-slick").slick("slickPrev");
        });
    
        $(".next-manager-team").click(function () {
            $(".manager-team-slick").slick("slickNext");
        });
    
    });