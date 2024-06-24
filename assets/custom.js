//jQuery_T4NT(document).ready((function(n){n(document).on("variant:changed",(function(n){}))}));
jQuery_T4NT(document).on('keydown', '.t4s-btn__checkout', function(event) {
	//var checkoutButton = $('.t4s-btn__checkout');
	var closeButton = $('.t4s-drawer__close');
	// Add an event listener to the checkout button to trap focus
	if (event.key === 'Tab') {
		event.preventDefault(); // Prevent default tab behavior
		closeButton.focus(); // Move focus to the close button
	}
});