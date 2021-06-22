<?php

$question1 = $_POST['question1'];
$question2 = $_POST['question2'];
$question3 = $_POST['question3'];
$question4 = $_POST['question4'];
$question5 = $_POST['question5'];
$fio = $_POST['fio'];
$phone = $_POST['phone'];
$dataset = $_POST['dataset'];




//обращаемся к глобальной переменной SERVER
$ip=$_SERVER['REMOTE_ADDR'];
//перенос строки
$eol = "\r\n";
//формируем строку для записи
$str='<strong>Вопрос 1: </strong>'.$question1.$eol.'<br/>
<strong>Вопрос 2: </strong>'.$question2.$eol.'<br/>
<strong>Вопрос 3: </strong>'.$question3.$eol.'<br/>
<strong>Вопрос 4: </strong>'.$question4.$eol.'<br/>
<strong>Вопрос 5: </strong>'.$question5.$eol.'<br/>
<strong>ФИО: </strong>'.$fio.$eol.'<br/>
<strong>Телефон: </strong>'.$phone.$eol.'<br/>
<strong>Источник: </strong>'.$dataset.$eol.'<br/>';

//открываем файл для записи.Если файл не существует-он будет создан
$fopen  =  fopen('my_form_reports.txt', 'a+');
//записываем строку
fputs ($fopen, $str);
//закрываем файл
fclose ($fopen);


// Читаем настройки config
require_once($_SERVER['DOCUMENT_ROOT'].'/config.php');

require_once($_SERVER['DOCUMENT_ROOT'].'/PHPMailer/PHPMailerAutoload.php'); //Файл автоматической подгрузки классов PHPMailer

try{
    $mail = new PHPMailer(true); // Создаем экземпляр класса PHPMailer

    $mail->IsSMTP(); // Указываем режим работы с SMTP сервером
    $mail->Host       = $__smtp['host'];  // Host SMTP сервера: ip или доменное имя
    $mail->SMTPDebug  = $__smtp['debug'];  // Уровень журнализации работы SMTP клиента PHPMailer
    $mail->SMTPAuth   = $__smtp['auth'];  // Наличие авторизации на SMTP сервере
    $mail->Port       = $__smtp['port'];  // Порт SMTP сервера
    $mail->SMTPSecure = $__smtp['secure'];  // Тип шифрования. Например ssl или tls
    $mail->CharSet="UTF-8";  // Кодировка обмена сообщениями с SMTP сервером
    $mail->Username   = $__smtp['username'];  // Имя пользователя на SMTP сервере
    $mail->Password   = $__smtp['password'];  // Пароль от учетной записи на SMTP сервере
    $mail->AddAddress('rva7171@gmail.com', 'Разработчик');  // Адресат почтового сообщения
    $mail->AddReplyTo($__smtp['addreply'], 'First Last');  // Альтернативный адрес для ответа
    $mail->SetFrom($__smtp['username'], $__smtp['mail_title']);  // Адресант почтового сообщения
    $mail->Subject = htmlspecialchars($__smtp['mail_title']);  // Тема письма
    $mail->MsgHTML($str); // Текст сообщения
    $mail->Send();

    echo 'Ваша Заявка Отправлена!';
}
catch (phpmailerException $e) {
}