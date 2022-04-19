<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST["user_email"];
$phone = $_POST["user_phone"];
$text = $_POST["user_message"];
$type = $_POST["type_site"];
$design = $_POST["design_site"];
$adaptive = $_POST["adaptive_site"];
$term = $_POST["order_term"];
$cost = $_POST["order_cost"];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mochalov.ivan2015@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 't61RfjheE27jPD1qrn8P'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mochalov.ivan2015@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('kelman.ivan2021@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на заказ';
$mail->Body    = '' . "!Скрипт сработал! <br>". "- Почта клиента: " . $email . "<br>" . "- Телефон клиента: " . $phone . "<br>" . "- Сообщение клиента: <br>" . $text ."<br>" . "- Тип сайта: " . $type .  "<br>" . "- Дизайн сайта: " . $design . "<br>" . "- Адаптив сайта: " . $adaptive . "<br>" . "- Сроки выполнения (в сутках): " . $term . "<br>" . "- Стоимость (в рублях): " . $cost;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>