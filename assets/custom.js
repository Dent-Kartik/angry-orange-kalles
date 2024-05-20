//jQuery_T4NT(document).ready((function(n){n(document).on("variant:changed",(function(n){}))}));
 jQuery_T4NT(document).on('keydown','.t4s-btn__checkout',function(event){
//var checkoutButton = $('.t4s-btn__checkout');
  var closeButton = $('.t4s-drawer__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closeButton.focus(); // Move focus to the close button
    }
 
});

    jQuery_T4NT(document).on('keydown','.t4s-site-nav__cart a[href="/cart"]',function(event){
  //  var cartLink = $('.t4s-site-nav__cart a[href="/cart"]');
      

    var miniCart = $('#t4s-mini_cart .t4s-drawer__close');
        setTimeout(function() {
            // Prevent the default link behavior
            event.preventDefault();
 localStorage.setItem('lastFocusedElement', 'header-cart');
            // Check if the pressed key is Enter (key code 13)
            if (event.key === 'Enter') {
                // Move focus to the mini cart
                miniCart.focus();
            }
        }, 500);
    

});
  jQuery_T4NT(document).on('keydown','.t4s-product-form__submit',function(event){
   
    var miniCart = $('#t4s-mini_cart .t4s-drawer__close');
        setTimeout(function() {
            // Prevent the default link behavior
            event.preventDefault();

            // Check if the pressed key is Enter (key code 13)
            if (event.key === 'Enter') {
                // Move focus to the mini cart
                miniCart.focus();
            }
        }, 500);
    

});
  jQuery_T4NT(document).on('keydown','.signup_btn',function(event){
//var suButton = $('.signup_btn');
  var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button
    }
 
});

    jQuery_T4NT(document).on('keydown','.t4s-site-nav__account a[href="/account"]',function(event){
   // var accountLink = $('.t4s-site-nav__account a[href="/account"]');
    var miniAc = $('#t4s-login-sidebar .t4s-drawer__close');
//console.log('Working');
        setTimeout(function() {
            // Prevent the default link behavior
            event.preventDefault();
localStorage.setItem('lastFocusedElement', 'header-account');
            // Check if the pressed key is Enter (key code 13)
            if (event.key === 'Enter') {
                // Move focus to the mini cart
                miniAc.focus();
            }
        }, 500);
    

});
  jQuery_T4NT(document).on('keydown','.login_linka',function(event){
//var suButton = $('.signup_btn');
  var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button
    }else if (event.key === 'Enter'){
      setTimeout(function(){
     event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button 
},500);
    }
      });
  jQuery_T4NT(document).on('keydown','.precover_link',function(event){
//var suButton = $('.signup_btn');
  var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter'){
      setTimeout(function(){
     event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button 
},500);
    }
});
jQuery_T4NT(document).on('keydown','.t4s-drawer__close',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
      //       console.log('Working');
var lastFocusedElementId = localStorage.getItem('lastFocusedElement');
      
       if (lastFocusedElementId) {
      $('#' + lastFocusedElementId).focus();
    }else{
         $('main').focus();
       }
        },500);
    }
 
});
 
 jQuery_T4NT(document).on('keydown', '.mi3', function(event) {
    // Check if the pressed key is 'Tab' (key code 9)
    if (event.which === 9) {
      // Remove the 'is-action__hover' class from the menu item
      $('.t4s-menu-item.has--children').removeClass('is-action__hover');
    }
  });
jQuery_T4NT(document).on('keydown','.t4s-pr__notify-stock',function(event){
//var suButton = $('.signup_btn');
  var closesuButton = $('#t4s-pr-popup__notify-stock input');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button
    }
 
});
jQuery_T4NT(document).on('keydown','#t4s-backToTop',function(event){
    console.log('Working');
//var suButton = $('.signup_btn');
  var closesuButton = $('main');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
      event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button
        },500);
    }
 
});
jQuery_T4NT(document).on('keydown','.mini_cart_tool_btn.is--note',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
localStorage.setItem('lastFocusedElementClass','mini_cart_tool_btn.is--note');
localStorage.setItem('resumeElement','CartSpecialInstructions');        
         $('#CartSpecialInstructions').focus();
       
        },500);
    }
 
});

jQuery_T4NT(document).on('keydown','.mini_cart_tool_btn.is--rates',function(event){
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
localStorage.setItem('lastFocusedElementClass','mini_cart_tool_btn.is--rates');
localStorage.setItem('resumeElement','ShippingCountry_mini_cart');      
         $('#ShippingCountry_mini_cart').focus();
       
        },500);
    }
 
});
jQuery_T4NT(document).on('keydown','.mini_cart_tool_btn.is--discount',function(event){
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
localStorage.setItem('lastFocusedElementClass','mini_cart_tool_btn.is--discount');
localStorage.setItem('resumeElement','CartDiscountcode');      
         $('#CartDiscountcode').focus();
       
        },500);
    }
 
});
jQuery_T4NT(document).on('keydown','.t4s-mini_cart-tool__back',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
var resumeElement = localStorage.getItem('resumeElement');
      
         $('#'+resumeElement).focus();
       
        },500);
    }else if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
      
         $('.'+lastFocusedElementClass).focus();
       
        },500);
    }
 
});
jQuery(document).ready(function() {
        $('.flickityt4s-page-dots .dot').each(function() {
            $(this).on('keydown', function(event) {
                if (event.key === 'Enter' || event.keyCode === 13) {
                    $(this).click();
                }
            });
        });
  setTimeout(function () {
  $('.t4s-tabs-collection .flickityt4s-prev-next-button').removeAttr('disabled','disabled');   
  },2000);
    });

jQuery(document).ready(function() {
        $('.video-section-inner .flickity-button').attr("role","button");
      $('.video-section-inner .flickity-button').attr("tabindex","0");
      $('.video-section-inner .flickity-page-dots li').attr("tabindex","0");
        $('.flickityt4s-page-dots ul').attr("role","button");
    });
function activateTab($tab) {
      $('.t4s-tabs-collection .t4s-tab-item a').removeClass('t4s-active').attr('aria-selected', 'false');
      $tab.addClass('t4s-active').attr('aria-selected', 'true');
    $tab.click();
    }

    jQuery('.t4s-tabs-collection .flickityt4s-prev-next-button.next').click(function() {
      var $active = $('.t4s-tabs-collection .t4s-tab-item a.t4s-active');
      var $next = $active.parent().next().find('a');
      if ($next.length) {
        activateTab($next);
      }
    });

   jQuery('.t4s-tabs-collection .flickityt4s-prev-next-button.previous').click(function() {
      var $active = $('.t4s-tabs-collection .t4s-tab-item a.t4s-active');
      var $prev = $active.parent().prev().find('a');
      if ($prev.length) {
        activateTab($prev);
      }
    });