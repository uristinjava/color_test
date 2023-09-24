<?php

/* https://api.telegram.org/bot6568987992:AAEogExsR47qukGD6uJT7zPJ2gki4LaJwtc
/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['userName'];
$phone = $_POST['user_phone'];
$userColors = $_POST['userColors'];
$token = "6568987992:AAEogExsR47qukGD6uJT7zPJ2gki4LaJwtc";
$chat_id = "-4068564691a";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Colors' => $userColors
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>