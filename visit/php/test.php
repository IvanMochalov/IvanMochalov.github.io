<?php
$email = $_POST["user_email"];
$phone = $_POST["user_phone"];
$radio = $_POST["radios"];
$checkbox = $_POST["check"];

echo "Скрипт сработал <br>". $email . "<br>" . $phone . "<br>" . $radio . "<br>" . $checkbox;

?>