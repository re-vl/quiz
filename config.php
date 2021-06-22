<?php
$__smtp = array(
    "host" => 'smtp.mail.ru', // SMTP сервер
    "debug" => 0, // Уровень логирования
    "auth" => true, // Авторизация на сервере SMTP. Если ее нет - false
    "port" => '465', // Порт SMTP сервера
    "username" => 'support@vk-podhod.ru', // Логин запрашиваемый при авторизации на SMTP сервере
    "password" => '123456pod', // Пароль
    "addreply" => 'direkt0001@yandex.ru', // Почта для ответа
    "secure" => 'ssl', // Тип шифрования. Например ssl или tls
    "mail_title" => 'Заявка', // Заголовок письма
    "mail_name" => 'name' // Имя отправителя
); 