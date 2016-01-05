// JavaScript source code
$(document).ready(function (e) {
	$('.btn-subscribe').click(function () {
		var email = $('#emailfield').val();

		if ($.trim(email).length == 0) {
			alert('All fields are mandatory');
			e.preventDefault();
		}

		if (validateEmail(email)) {
			alert('Valid Email Address');
		}

		else {
			alert('Invalid Email Address');
			e.preventDefault();
		}
	});
});


function validateEmail(email) {
	var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
	if (filter.test(email)) {
		return true;
	}
	else {
		return false;
	}
}