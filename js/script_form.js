$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
		$(document).on('click', '.send', function(e){
		e.preventDefault();
		//создаем экземпляр класс FormData, тут будем хранить всю информацию для отправки
		var form_data = new FormData();

		var name  = $(this).closest('form').find('input[name="name"]').val();
		var email  = $(this).closest('form').find('input[name="email"]').val();
		var phone  = $(this).closest('form').find('input[name="tel"]').val();
		var agree  = $(this).closest('form').find('input[name="agree"]').val();
		// console.log($(this).closest('form'));
		// console.log(phone); return false;
		//var name = $("input[name='name']").val();
		//var email = $("input[name='email']").val();
		//var phone = $("input[name='tel']").val();
		//var agree = $("input[name='agree-mod']:checked");
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var valid_email = pattern.test(email);
		//var re = /^\d[\d\(\)\ -]{4,14}\d$/;
		//var valid_phone = re.test(phone);
		if (name == '') {
			alert('Введите Ваше имя!');
			return false;
		}
		if (phone == '') {
			alert('Введите номер телефона!');
		 	return false;
		 }
		if (email == '') {
			alert('Введите Ваш Email!');
			return false;
		}
		if (valid_email){
			output = 'E-mail введен правильно!';
			/*alert(output);*/
		} else {
			output = 'E-mail введен неправильно!';
			alert(output);
			return false;
		}

		if (agree.length == 0) {
			alert('Подтвердите согласие на обработку данных!');
			return false;
		}

		if(name != '') {
			/*form_data.append('action', 'sendForm');*/
			form_data.append('name', name);
			form_data.append('phone', phone);
			form_data.append('email', email);

			$.ajax({
				url: 'includes/custom-functions.php',
				type: 'post',
				data: form_data,
				contentType: false,
				processData: false,
				success: function (response) {
					console.log(response);
					// alert(response.message);
					$('#message').show();
					$('.fancybox-close-small').trigger('click');

					//if (response.result == 'success') {
						/*form.reset();*/
					//	$('#send_form').trigger('reset');
					//}
				}
			});
			return false;
		} else {
			alert('Вы не заполнили все поля!');
		}
	});
	$(document).on('click', '.message__close', function(e){
		e.preventDefault();
		$('#message').hide();
	});

});

function closeModal() {
	var message = document.getElementById('message');
	message.style.display = 'none';

}

jQuery(function($){
	$("#phone").mask("+9(999) 999-99-99");
});
jQuery(function($){
	$("#phone__mod").mask("+9(999) 999-99-99");
});
jQuery(function($){
	$("#phone__adv").mask("+9(999) 999-99-99");
});
jQuery(function($){
	$("#phone__key").mask("+9(999) 999-99-99");
});