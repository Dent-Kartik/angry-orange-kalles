//jQuery_T4NT(document).ready((function(n){n(document).on("variant:changed",(function(n){}))}));
jQuery_T4NT(document).on('keydown', '#t4s-mini_cart .t4s-btn__checkout', function(event) {
	//var checkoutButton = $('.t4s-btn__checkout');
	var closeButton = $('.t4s-drawer__close');
	// Add an event listener to the checkout button to trap focus
	if(event.shiftKey && event.key === 'Tab'){

    }else if (event.key === 'Tab') {
		event.preventDefault(); // Prevent default tab behavior
		closeButton.focus(); // Move focus to the close button
	}
});
jQuery_T4NT(document).on('keydown', '.t4s-push-menu-btn', function(event) {
	//var checkoutButton = $('.t4s-btn__checkout');
	var closeButton = $('.t4s-drawer-menu__close');
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Tab') {
		event.preventDefault(); // Prevent default tab behavior
		closeButton.focus(); // Move focus to the close button
	}
});

jQuery_T4NT(document).on('keydown', '.t4s-quantity-selector', function(event) {
     var clickedQuantityId = "#"+$(event.target).attr('id');
	if (event.key === 'Enter') {
    	setTimeout(function() {
            console.log(clickedQuantityId);
    		event.preventDefault(); // Prevent default tab behavior
    		$(clickedQuantityId).focus(); // Move focus to the close button
        },1500);
      }
});

jQuery_T4NT(document).on('click', '.t4s-quantity-selector', function(event) {
     var clickedQuantityId = "#"+$(this).attr('id');
      console.log("clicked");
    	setTimeout(function() {
            console.log(clickedQuantityId);
    		 // event.preventDefault(); // Prevent default tab behavior
    		$(clickedQuantityId).focus(); // Move focus to the close button
        },1500);
});
jQuery_T4NT(document).on('change', '.t4s-quantity-input', function(event) {
     var clickedQuantityId = "#"+$(event.target).attr('id');
        console.log('clickedQuantityId');
	// Add an event listener to the checkout button to trap focus
    jQuery_T4NT(document).on('keydown', '.t4s-quantity-input', function(event) {
    	if (event.key === 'Tab') {
          console.log("keypress");
    	setTimeout(function() {
            console.log(clickedQuantityId);
    		event.preventDefault(); // Prevent default tab behavior
    		$(clickedQuantityId).focus(); // Move focus to the close button
        },2500);
    	}
      });
});
jQuery_T4NT(document).on('keydown', '.t4s-drawer-menu__close', function(event) {
	//var checkoutButton = $('.t4s-btn__checkout');
	var closeButton = $('.menumob1 a');
	var restoreBtn = $('.t4s-push-menu-btn');
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Tab') {
		event.preventDefault(); // Prevent default tab behavior
		closeButton.focus(); // Move focus to the close button
	} else if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			restoreBtn.focus(); // Move focus to the close button
		}, 25);
	}
});
jQuery_T4NT(document).on('keydown', '.t4s-site-nav__cart a[href="/cart"]', function(event) {
	//  var cartLink = $('.t4s-site-nav__cart a[href="/cart"]');
	var miniCart = $('#t4s-mini_cart .t4s-drawer__close');
	setTimeout(function() {
		// Prevent the default link behavior
      console.log(miniCart);
		event.preventDefault();
		localStorage.setItem('lastFocusedElement', 'header-cart');
      localStorage.setItem('tabShiftElement', '#t4s-mini_cart .t4s-btn__checkout ');
		// Check if the pressed key is Enter (key code 13)
		if (event.key === 'Enter') {
			// Move focus to the mini cart
			miniCart.focus();
		}
	}, 25);
});
// jQuery_T4NT(document).on('keydown', '.t4s-mini_cart__edit', function(event) {
// 	//  var cartLink = $('.t4s-site-nav__cart a[href="/cart"]');
// 	var miniCart = $('#t4s-mini_cart .t4s-modal-close');
// 	setTimeout(function() {
// 		// Prevent the default link behavior
// 		event.preventDefault();
// 		localStorage.setItem('lastFocusedElement', 'header-cart');
// 		// Check if the pressed key is Enter (key code 13)
// 		if (event.key === 'Enter') {
// 			// Move focus to the mini cart
// 			miniCart.focus();
// 		}
// 	}, 250);
// });
// jQuery_T4NT(document).on('keydown', '#product-edit-modal .t4s-modal-close', function(event) {
// 	//  var cartLink = $('.t4s-site-nav__cart a[href="/cart"]');
// 	var editCart = $('#t4s-mini_cart .t4s-modal-close');
// 	setTimeout(function() {
// 		// Prevent the default link behavior
// 		event.preventDefault();
// 		localStorage.setItem('lastFocusedElement', $(this).attr("class"));
//         var lastfocus = $(this).attr("class");
// 		// Check if the pressed key is Enter (key code 13)
// 		if (event.key === 'Enter') {
// 			// Move focus to the mini cart
// 			lastfocus.focus();
// 		}
// 	}, 250);
// });
jQuery_T4NT(document).on('keydown', '.t4s-product-form__submit', function(event) {
	var miniCart = $('#t4s-mini_cart .t4s-drawer__close');
	setTimeout(function() {
		// Prevent the default link behavior
		event.preventDefault();
		// Check if the pressed key is Enter (key code 13)
		if (event.key === 'Enter') {
			// Move focus to the mini cart
			miniCart.focus();
		}
	}, 25);
});
jQuery_T4NT(document).on('keydown', '.signup_btn', function(event) {
	//var suButton = $('.signup_btn');
	var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');
	// Add an event listener to the checkout button to trap focus
	if(event.shiftKey && event.key === 'Tab'){
event.preventDefault();
$('.t4s_btn_submmit').focus();
    }else if (event.key === 'Tab') {
		event.preventDefault(); // Prevent default tab behavior
		closesuButton.focus(); // Move focus to the close button
	}else if (event.key == 'Enter'){
       localStorage.setItem('tabShiftElement', '#t4s-login-sidebar .login_linka.backsign');
    }
});


jQuery_T4NT(document).on('click', '.t4s-site-nav__account a[href="/account"]', function(event) {
	// var accountLink = $('.t4s-site-nav__account a[href="/account"]');
	var miniAc = $('#t4s-login-sidebar .t4s-drawer__close');
	//console.log('Working');
      console.log(miniAc);
	setTimeout(function() {
		// Prevent the default link behavior
		event.preventDefault();
		localStorage.setItem('lastFocusedElement', 'header-account');
        localStorage.setItem('tabShiftElement', '#t4s-login-sidebar .signup_btn');
		// Check if the pressed key is Enter (key code 13)
			// Move focus to the mini cart
			miniAc.focus();
	}, 25);
});
jQuery_T4NT(document).on('keydown', '.t4s-site-nav__account a[href="/account"]', function(event) {
	// var accountLink = $('.t4s-site-nav__account a[href="/account"]');
	var miniAc = $('#t4s-login-sidebar .t4s-drawer__close');
	//console.log('Working');
      console.log(miniAc);
	setTimeout(function() {
		// Prevent the default link behavior
		event.preventDefault();
		localStorage.setItem('lastFocusedElement', 'header-account');
        localStorage.setItem('tabShiftElement', '#t4s-login-sidebar .signup_btn');
		// Check if the pressed key is Enter (key code 13)
		if (event.key === 'Enter') {
			// Move focus to the mini cart
			miniAc.focus();
		}
	}, 25);
});
jQuery_T4NT(document).on('keydown', '.login_linka', function(event) {
	//var suButton = $('.signup_btn');
	var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');
	// Add an event listener to the checkout button to trap focus
	if(event.shiftKey && event.key === 'Tab'){
event.preventDefault();
if ($(this).hasClass('backrec')) {
$('#recover_login-sidebar .t4s_btn_submmit').focus();
}else{
$('#create_login-sidebar .t4s_btn_submmit').focus();   
}
    }else if (event.key === 'Tab') {
		event.preventDefault(); // Prevent default tab behavior
		closesuButton.focus(); // Move focus to the close button
	} else if (event.key === 'Enter') {
localStorage.setItem('tabShiftElement', '#t4s-login-sidebar .signup_btn');
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			closesuButton.focus(); // Move focus to the close button 
		}, 25);
	}
});
jQuery_T4NT(document).on('keydown', '.precover_link', function(event) {
	//var suButton = $('.signup_btn');
	var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
localStorage.setItem('tabShiftElement', '#t4s-login-sidebar .login_linka.backrec');
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			closesuButton.focus(); // Move focus to the close button 
		}, 25);
	}
});
jQuery_T4NT(document).on('keydown', '.t4s-drawer__close', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			      // console.log('Working');
			var lastFocusedElementId = localStorage.getItem('lastFocusedElement');
			if (lastFocusedElementId) {
				$('#' + lastFocusedElementId).focus();
			} else {
				$('header').focus();
			}
		}, 25);
	}else if(event.shiftKey && event.key === 'Tab'){
      setTimeout(function() {
            event.preventDefault();
      var tabShiftElementId = localStorage.getItem('tabShiftElement');            
        console.log(tabShiftElementId);
        if(tabShiftElementId){
          $(tabShiftElementId).focus();    
        }
      	}, 25);
    }
});

jQuery_T4NT(document).on('click', '.t4s-drawer__close', function(event) {
	// Add an event listener to the checkout button to trap focus
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			      // console.log('Working');
			var lastFocusedElementId = localStorage.getItem('lastFocusedElement');
			if (lastFocusedElementId) {
				$('#' + lastFocusedElementId).focus();
			} else {
				$('header').focus();
			}
		}, 25);
});
jQuery_T4NT(document).on('keydown', '.mi3', function(event) {
	// Check if the pressed key is 'Tab' (key code 9)
	if (event.which === 9) {
		// Remove the 'is-action__hover' class from the menu item
		$('.t4s-menu-item.has--children').removeClass('is-action__hover');
	}
});
jQuery_T4NT(document).on('keydown', '.t4s-pr__notify-stock', function(event) {
	var closesuButton = $('#t4s-pr-popup__notify-stock input[type="email"]');
 var tabButton = jQuery_T4NT('.t4s-modal-close');
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
setTimeout(function() {
		event.preventDefault(); // Prevent default tab behavior
		closesuButton.focus(); // Move focus to the close button
	}, 250);
	}else if (event.shiftKey && event.key === 'Tab') {
       
    }else if (event.key === 'Tab') {
       if (jQuery_T4NT(this).closest('.t4s-product-quick-shop').length) {
      event.preventDefault();
      tabButton.focus();       
}
    }
});
jQuery_T4NT(document).on('keydown', '.mfp-close', function(event) {
	var closesuButton = $('#t4s-pr-popup__notify-stock input[type="email"]');
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Tab') {
		event.preventDefault(); // Prevent default tab behavior
		closesuButton.focus(); // Move focus to the close button
	}
});

jQuery_T4NT(document).on('keydown', '#t4s-backToTop', function(event) {
	var closesuButton = $('#item_drop_UJtWkH');
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			closesuButton.focus(); // Move focus to the close button
		}, 25);
	}
});
jQuery_T4NT(document).on('keydown', '.mini_cart_tool_btn.is--note', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			localStorage.setItem('lastFocusedElementClass', 'mini_cart_tool_btn.is--note');
			localStorage.setItem('resumeElement', 'CartSpecialInstructions');
			$('#CartSpecialInstructions').focus();
		}, 25);
	}
});

jQuery_T4NT(document).on('click', '.mini_cart_tool_btn.is--note', function(event) {
	// Add an event listener to the checkout button to trap focus
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			localStorage.setItem('lastFocusedElementClass', 'mini_cart_tool_btn.is--note');
			localStorage.setItem('resumeElement', 'CartSpecialInstructions');
			$('#CartSpecialInstructions').focus();
		}, 25);
});
jQuery_T4NT(document).on('keydown', '.t4s-pr__pswp-btn', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			$('.pswp__button--zoom').focus();
		}, 25);
	}
});

jQuery_T4NT(document).on('click', '.t4s-pr__pswp-btn', function(event) {
	// Add an event listener to the checkout button to trap focus
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			$('.pswp__button--zoom').focus();
		}, 25);
});


jQuery(document).on('keydown','.t4s-pr__pswp-btn',function(event){
  
  setTimeout(function(){
        var dialog = $('.pswp__t4s');
        console.log(dialog);
        var firstFocusableElement = $('.pswp__button--zoom');
        var lastFocusableElement = $(".pswp_thumb_item").last();
      $('.pswp__t4s').on('keydown', function(e) {
     console.log(firstFocusableElement[0]);
     console.log(lastFocusableElement[0]);
        if(lastFocusableElement){
        if (e.key === 'Tab' || e.keyCode === 9) {
            if (e.shiftKey) { // shift + tab
                if (document.activeElement === firstFocusableElement[0]) {
                  console.log("No shift");
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else { // tab
                if (document.activeElement === lastFocusableElement[0]) {
                  console.log("shift");
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
        } else{
        if (e.key === 'Tab' || e.keyCode === 9) {
            if (e.shiftKey) { // shift + tab
                if (document.activeElement === firstFocusableElement[0]) {
                  console.log("No shift");
                     $(".pswp__button--close").focus();
                    e.preventDefault();
                }
            } else { // tab
                if (document.activeElement === lastFocusableElement[0]) {
                  console.log("shift");
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
          
        }
        }
      });
 },25);
});

jQuery_T4NT(document).on('keydown', '.pswp__button--close', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
    		// console.log('Working');
			$('.t4s-pr__pswp-btn').focus();
		}, 25);
}
});

jQuery_T4NT(document).on('click', '.pswp__button--close', function(event) {
	// Add an event listener to the checkout button to trap focus
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
    		// console.log('Working');
			$('.t4s-pr__pswp-btn').focus();
		}, 25);
});
jQuery_T4NT(document).on('keydown', '#CartSpecialInstructions', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.shiftKey && event.key === 'Tab') {		
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			$('.t4s-mini_cart-tool__content.is--note .t4s-mini_cart-tool__back').focus();
	}
});

jQuery_T4NT(document).on('keydown', '#ShippingCountry_mini_cart', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.shiftKey && event.key === 'Tab') {		
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			$('.t4s-mini_cart-tool__content.is--rates  .t4s-mini_cart-tool__back').focus();
	}
});
jQuery_T4NT(document).on('keydown', '.mini_cart_tool_btn.is--rates', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			localStorage.setItem('lastFocusedElementClass', 'mini_cart_tool_btn.is--rates');
			localStorage.setItem('resumeElement', 'ShippingCountry_mini_cart');
			$('#ShippingCountry_mini_cart').focus();
		}, 25);
	}
});

jQuery_T4NT(document).on('click', '.mini_cart_tool_btn.is--rates', function(event) {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			localStorage.setItem('lastFocusedElementClass', 'mini_cart_tool_btn.is--rates');
			localStorage.setItem('resumeElement', 'ShippingCountry_mini_cart');
			$('#ShippingCountry_mini_cart').focus();
		}, 25);
});
jQuery_T4NT(document).on('keydown', '.mini_cart_tool_btn.is--discount', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			localStorage.setItem('lastFocusedElementClass', 'mini_cart_tool_btn.is--discount');
			localStorage.setItem('resumeElement', 'CartDiscountcode');
			$('#CartDiscountcode').focus();
		}, 25);
	}
});
jQuery_T4NT(document).on('click', '.mini_cart_tool_btn.is--discount', function(event) {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			localStorage.setItem('lastFocusedElementClass', 'mini_cart_tool_btn.is--discount');
			localStorage.setItem('resumeElement', 'CartDiscountcode');
			$('#CartDiscountcode').focus();
		}, 25);
});
jQuery_T4NT(document).on('keydown', '.t4s-mini_cart-tool__back', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Tab') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			var resumeElement = localStorage.getItem('resumeElement');
			$('#' + resumeElement).focus();
		}, 25);
	} else if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
          console.log(lastFocusedElementClass);
			$('.' + lastFocusedElementClass).focus();
		}, 25);
	}
});
jQuery_T4NT(document).on('click', '.t4s-mini_cart-tool__back', function(event) {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
          console.log(lastFocusedElementClass);
			$('.' + lastFocusedElementClass).focus();
		}, 25);
});

jQuery_T4NT(document).on('keydown', '.t4s-mini_cart-tool__content', function(event) {
  
      if (event.key === 'Escape' || event.keyCode === 27){
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
			console.log(lastFocusedElementClass);
			$('.' + lastFocusedElementClass).focus();
		}, 25);
	}
});

jQuery_T4NT(document).on('keydown', '.is--note .t4s-mini_cart-tool__primary', function(event) {
  
      if (event.key === 'Enter' || event.keyCode === 13){
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
            var textarea = document.getElementById('CartSpecialInstructions');
            console.log(textarea.value.trim());
            if (textarea.value.trim() !== "") {
    			console.log(lastFocusedElementClass);
               $('.' + lastFocusedElementClass + '.is--editNote').focus();
            } else{
    			console.log(lastFocusedElementClass);
    			$('.' + lastFocusedElementClass).focus();
            }
		}, 450);
	}
});

jQuery_T4NT(document).on('click', '.is--note .t4s-mini_cart-tool__primary', function(event) {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
            var textarea = document.getElementById('CartSpecialInstructions');
            console.log(textarea.value.trim());
            if (textarea.value.trim() !== "") {
    			console.log(lastFocusedElementClass);
               $('.' + lastFocusedElementClass + '.is--editNote').focus();
            } else{
    			console.log(lastFocusedElementClass);
    			$('.' + lastFocusedElementClass).focus();
            }
		}, 450);
});
jQuery_T4NT(document).on('keydown', '.is--discount .t4s-mini_cart-tool__primary', function(event) {
  
      if (event.key === 'Enter' || event.keyCode === 13){
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
    			console.log(lastFocusedElementClass);
               $('.' + lastFocusedElementClass).focus();
		}, 250);
	}
});

jQuery_T4NT(document).on('click', '.is--discount .t4s-mini_cart-tool__primary', function(event) {
  
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
    			console.log(lastFocusedElementClass);
               $('.' + lastFocusedElementClass).focus();
		}, 250);
});
jQuery_T4NT(document).on('keydown', '#CartDiscountcode', function(event) {
  
      if(event.shiftKey && event.key === 'Tab'){
              console.log("workgins");
    		event.preventDefault(); // Prevent default tab behavior
    		$(".is--discount .t4s-mini_cart-tool__back").focus(); // Move focus to the close button
    
        }else if (event.key === 'Tab') {
    	}
});

jQuery_T4NT(document).on('click', '#CartDiscountcode', function(event) {
              console.log("workgins");
    		event.preventDefault(); // Prevent default tab behavior
    		$(".is--discount .t4s-mini_cart-tool__back").focus(); // Move focus to the close button
    
});
jQuery(document).ready(function() {
	localStorage.setItem('ci', -1);
	localStorage.setItem('cp', 1);
	// $('.flickityt4s-page-dots .dot').each(function() {
	// 	$(this).on('keydown', function(event) {
	// 		if (event.key === 'Enter' || event.keyCode === 13) {
	// 			$(this).click();
	// 		}
	// 	});
	// });
	setTimeout(function() {
		checkHidden();
		$('.t4s-drawer__header span').attr("role", "heading").attr("aria-level", "1");
	}, 25);
});

jQuery_T4NT(document).on('keydown', '.flickityt4s-prev-next-button, .dot', function(event) {
if (event.key == 'Enter') {
event.preventDefault();
  $(this).click();
//console.log('Working');
}
});

jQuery(document).on('keydown', '.t4s-search-header__input', function(event) { 
    if (event.key != 'Tab') {
      //  event.preventDefault();
        $('.t4s-frm-search__results').css({
            'opacity': '1',
            'visibility': 'visible',
            'pointer-events': 'all'
        });
    }
});
 
  jQuery(document).on('keydown', function(event) {
    if (!$(event.target).closest('.t4s-pa.t4s-frm-search__results').length) {
      return;
    }
let searchResults = $('.t4s-pa.t4s-frm-search__results a');
    if (searchResults.length === 0) return;
 // Retrieve the current index from localStorage
    let currentIndex = parseInt(localStorage.getItem('ci'), 10);
    if (isNaN(currentIndex)) {
        currentIndex = -1;
    }

    switch (event.key) {
        case 'ArrowDown':
            if (currentIndex < searchResults.length - 1) {
                currentIndex++;
                searchResults.eq(currentIndex).focus();
                localStorage.setItem('ci', currentIndex); // Update localStorage
            }
            break;
        case 'ArrowUp':
            if (currentIndex > 0) {
                currentIndex--;
                searchResults.eq(currentIndex).focus();
                localStorage.setItem('ci', currentIndex); // Update localStorage
            }
            break;
        case 'Enter':
            searchResults = $('.t4s-pa.t4s-frm-search__results a');
            currentIndex = 0;
            searchResults.eq(currentIndex).focus();
            localStorage.setItem('ci', currentIndex); // Update localStorage
            break;
        case 'Tab':
            currentIndex++;
            localStorage.setItem('ci', currentIndex); // Update localStorage
            break;
        case 'Escape':
            $('.t4s-pa.t4s-frm-search__results').css({'opacity': '0', 'visibility': 'hidden'});
            $('.t4s-search-header__input').focus();
$('.t4s-search-header__input').removeAttr('aria-activedescendant');
            currentIndex = -1;
            localStorage.setItem('ci', currentIndex); // Update localStorage
            break;
    }
if (currentIndex >= 0 && currentIndex < searchResults.length) {
        const currentId = searchResults.eq(currentIndex).attr('data-rid');
$('.t4s-search-header__input').attr('aria-activedescendant',currentId);
     //   console.log('Current id:', currentId);
    }
   // console.log(currentIndex);
});
jQuery_T4NT(document).on('keydown', '.t4s-page_cart__edit', function(event) {
	var miniCart = $('.t4s-drawer__close');	
		// Check if the pressed key is Enter (key code 13)
		if (event.key === 'Enter') {
setTimeout(function() {
		// Prevent the default link behavior
		event.preventDefault();
			localStorage.setItem('lastModalElement', '.t4s-page_cart__edit');
			localStorage.setItem('tabModalElement', '.t4s-product-qs__title a');
          localStorage.setItem('tabShiftElement', 'button[data-testid="sheet-open-button"]');
 localStorage.setItem('escElement', '.t4s-page_cart__edit');
			// Move focus to the mini cart
			miniCart.focus();
}, 25);
		}	
});
jQuery_T4NT(document).on('keydown', '.t4s-mini_cart__edit', function(event) {
	var miniCart = $('.t4s-modal-close');
     var clickedEdidteId = "#"+$(event.target).attr('id');
         // clickedEdidteId = `${clickedEdidteId}`;
	 localStorage.setItem('clickedEdidteId', clickedEdidteId);
          console.log(clickedEdidteId);
		// Check if the pressed key is Enter (key code 13)
		if (event.key === 'Enter') {
setTimeout(function() {
		// Prevent the default link behavior
		event.preventDefault();
			localStorage.setItem('lastModalElement', clickedEdidteId);
			localStorage.setItem('tabModalElement', '.t4s-product-qs__title a');
          localStorage.setItem('tabShiftElement', '.shopify-payment-button__more-options');
  localStorage.setItem('escElement', '#header-cart');
			// Move focus to the mini cart
			miniCart.focus();
	}, 25);
		}
  jQuery_T4NT(document).on('keydown', '.shopify-payment-button__more-options', function(event) {
    	//var checkoutButton = $('.t4s-btn__checkout');
    	var closeButton = $( "#product-edit-modal>.t4s-modal__inner .t4s-modal-close" );
    	// Add an event listener to the checkout button to trap focus
    	if(event.shiftKey && event.key === 'Tab'){
    
        }else if (event.key === 'Tab') {
              console.log(closeButton);
    		event.preventDefault(); // Prevent default tab behavior
    		$(closeButton).focus(); // Move focus to the close button
    	}
    });
  // jQuery_T4NT(document).on('keydown', '#product-edit-modal>.t4s-modal__inner .t4s-modal-close', function(event) {
  //   	//var checkoutButton = $('.t4s-btn__checkout');
  //   	var closeButton = $( ".shopify-payment-button__more-options" );
  //   	// Add an event listener to the checkout button to trap focus
  //   	if(event.shiftKey && event.key === 'Tab'){
    
  //       }else if (event.key === 'Tab') {
  //             console.log(closeButton);
  //   		event.preventDefault(); // Prevent default tab behavior
  //   		$(closeButton).focus(); // Move focus to the close button
  //   	} 
  //   });
});

jQuery_T4NT(document).on('keydown', '.t4s-modal-close', function(event) {
	// Add an event listener to the checkout button to trap focus
if (event.shiftKey && event.key === 'Tab') {
			event.preventDefault(); // Prevent default tab behavior
			 console.log('Working');
			var tabShiftElement = localStorage.getItem('tabShiftElement');
			$(tabShiftElement).focus();
	} else if (event.key === 'Tab') {
			event.preventDefault(); // Prevent default tab behavior
			 console.log('Working');
			var tabModalElement = localStorage.getItem('tabModalElement');
             console.log(tabModalElement);
			$(tabModalElement).focus();
	} else if (event.key === 'Enter') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			var lastModalElement = localStorage.getItem('lastModalElement');
            console.log(lastModalElement);
			$(lastModalElement).focus();
		}, 25);
	}
});
// Attach a click event handler to the element with attribute 'data-dropdown-open'
function handleDropdownOpen() {
	// Check if the element does not have class 'is--clicked'
	if (!$('[data-dropdown-open]').hasClass('is--clicked')) {
		// Add aria-expanded="true"
		$('[data-dropdown-open]').attr('aria-expanded', 'true');
		var selectedId = $('[data-sticky-select] .is--selected').attr('id');
		$('[data-dropdown-open]').attr('aria-activedescendant', selectedId);
	} else {
		$('[data-dropdown-open]').attr('aria-expanded', 'false');
		$('[data-dropdown-open]').attr('aria-activedescendant', '');
	}
}
$('[data-dropdown-open]').on('click', handleDropdownOpen);
// Handle Enter key press
$('[data-dropdown-open]').on('keydown', function(event) {
	if (event.key === 'Enter' || event.keyCode === 13) {
		handleDropdownOpen.call(this);
	}
});
$('[data-sticky-select] [data-dropdown-item]').on('click', handleDropdownOpen);

jQuery(document).on('click','.t4s-swatch__item',function(event){
setTimeout(function(){
  //  $('.t4s-swatch__item.is--selected').attr('aria-current','true');
  // $('.t4s-swatch__item.is--selected').siblings().attr('aria-current','false');
 $('.t4s-carousel__nav-item.is-nav-selected').attr('aria-current','true');
  $('.t4s-carousel__nav-item.is-nav-selected').siblings().attr('aria-current','false');
},25);
});
jQuery(document).on('click','.flickity-page-dots .dot',function(event){
setTimeout(function(){
   $('.dot.is-selected').attr('aria-current','true');
  $('.dot.is-selected').siblings().attr('aria-current','false');
},25);
});
jQuery(document).on('click','.t4s-carousel__nav-item',function(event){
setTimeout(function(){
   $('.t4s-carousel__nav-item.is-nav-selected').attr('aria-current','true');
  $('.t4s-carousel__nav-item.is-nav-selected').siblings().attr('aria-current','false');
},25);
});

jQuery(document).on('click','.t4s-pr__pswp-btn',function(event){
   
  // Add an event listener to the checkout button to trap focus
       let slide_number = $(".pswp__counter").text();
      $(".pswp__top-bar .sr-only").html("Image "+slide_number);

      
});

jQuery_T4NT(document).on('keydown', '.pswp--open', function(event) {
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Escape') {
		setTimeout(function() {
			event.preventDefault(); // Prevent default tab behavior
			//  console.log('Working');
			$('.t4s-pr__pswp-btn').focus();
		}, 25);
	}
});
jQuery(document).on('click','.pswp__button',function(event){
   
  // Add an event listener to the checkout button to trap focus
       let slide_number = $(".pswp__counter").text();
    slide_number = slide_number.replace("/", "of");
      console.log("Image "+slide_number);
      $(".pswp__top-bar .sr-only").html("Image "+slide_number);
 jQuery(document).on('click','.pswp__button--zoom', function (e) {
          console.log('works');
          if($('.pswp__button--zoom').attr("aria-label") == 'Zoom in'){
            $('.pswp__button--zoom').attr("aria-label","Zoom out")
          } else{
            $('.pswp__button--zoom').attr("aria-label","Zoom in")
            
          }
  });
 jQuery(document).on('click','.pswp__button--share', function (e) {
          if($('.pswp__button--share').attr("aria-expanded") == 'false'){
            $('.pswp__button--share').attr("aria-expanded","true")
          } else{
            $('.pswp__button--share').attr("aria-expanded","false")
            
          }
  });
 
});
jQuery( document ).ready(function() {
  $('.blog_slider').removeAttr('tabindex'); 
  $('.video-section-inner').removeAttr('tabindex'); 
  $('.t4s-flicky-slider').removeAttr('tabindex'); 
  $('.t4s-footer-content a img').attr("alt","Angry Orange Home link");
});
// jQuery( document ).ready(function() {

// jQuery(document).on('keydown','.t4s-mini_cart__edit',function(event){
// setTimeout(function(){

// var dialog_product = $('.t4s-modal');
// var dialog = document.querySelector('.t4s-modal');
// var firstFocusableElement = dialog.querySelector('.t4s-modal-close');
// var lastFocusableElement = dialog.querySelector('.t4s-product-form__submit');
// console.log(dialog_product);
// console.log(dialog);
// dialog.addEventListener('keydown', function(e) {
//       if(e.target == firstFocusableElement && e.key == 'Tab' && e.shiftKey) {
//         e.preventDefault();
//         lastFocusableElement.focus();
//       } else if(e.target == lastFocusableElement && e.key == 'Tab' && !e.shiftKey) {
//         e.preventDefault();
//         firstFocusableElement.focus();
//       }
//     });
// },2500);
//   });

//   });
jQuery(document).on('click','.t4s-modal',function(event){

var dialog_product = $('.t4s-modal');
var dialog = document.querySelector('.t4s-modal');
var firstFocusableElement = dialog.querySelector('.t4s-modal-close');
var lastFocusableElement = dialog.querySelector('.t4s-product-form__submit');
console.log(dialog_product);
console.log(dialog);
dialog.addEventListener('keydown', function(e) {
      if(e.target == firstFocusableElement && e.key == 'Tab' && e.shiftKey) {
        e.preventDefault();
        lastFocusableElement.focus();
      } else if(e.target == lastFocusableElement && e.key == 'Tab' && !e.shiftKey) {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    });
  });

jQuery_T4NT(document).on('keydown', '#ot-sdk-btn', function(event) {
	var closesuButton = $('#t4s-backToTop');
     console.log
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Tab') {
			event.preventDefault(); // Prevent default tab behavior
			closesuButton.focus(); // Move focus to the close button
	}
});
$(document).ready(function () {

$('#t4s-mini_cart').on('keydown', function(e) {
   setTimeout(function(){
         if (e.key === 'Escape' || e.keyCode === 27) {
			$('#header-cart').focus();
         }
 },25);
  
});
$('#t4s-login-sidebar').on('keydown', function(e) {
   setTimeout(function(){
       
         if (e.key === 'Escape' || e.keyCode === 27) {
			$('#header-account').focus();
         }
 },25);
  
});
});