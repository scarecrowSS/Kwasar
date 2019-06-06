<?php
    $theme="Новая заявка Kwasar";
    error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
    // создание переменных из полей формы		
    if (isset($_POST['name']))			{$name			= $_POST['name'];		if ($name == '')	{unset($name);}}
    if (isset($_POST['mail']))			{$mail			= $_POST['mail'];		if ($mail == '')	{unset($mail);}}
    if (isset($_POST['message']))          {$message          = $_POST['message'];       if ($message == '')    {unset($message);}}
    //стирание треугольных скобок из полей формы
    // адрес почты куда придет письмо
    $address="moonmh@mail.ru";
    // текст письма 
    $note_text="Тема : $theme \r\nИмя : $name \r\nMail : $mail \r\nСообщение : $message";
    
    if (isset($name)) {
    mail($address,$theme,$note_text,"Content-type:text/plain; windows-1251"); 
    }
?>