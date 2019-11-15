<?php

header('Access-Control-Allow-Origin: *');
include 'utility.php';
$url = urldecode($_POST['src']);
$fn = url2filename($url);
$txt = urldecode($_POST['txt']);
echo file_put_contents($fn, $txt);

?>