<?php
/**
 * Created by PhpStorm.
 * User: Neo
 * Date: 02.10.2017
 * Time: 14:22
 */

function sendForm() {
	if ( $_POST ) {
		// обрабатываем запрос
		$adminEmail = "inbox@krio5.ru";
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];


		$message = 'Имя: ' . $name . '<br>';
		$message .= 'Телефон: ' . $phone . '<br>';
		$message .= 'E-mail: ' . $email . '<br>';

		if ( mail($adminEmail,'Заявка на обратный звонок', $message, 'content-type: text/html')) {
			$result = [
				'result' => 'success',
				'message' => 'Ваше сообщение успешно отправлено'
			];
		} else {
			$result = [
				'result' => 'error',
				'message' => 'Возникла ошибка при отправке сообщения. Попробуйте позже'
			];
		}
		header('Content-Type: application/json');
		// возвращаем результат
		echo json_encode($result);
	}
	die();
}

sendForm();