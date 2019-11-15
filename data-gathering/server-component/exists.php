<?php

header('Access-Control-Allow-Origin: *');
include 'utility.php';
$fn = url2filename($_GET['url']);
header('Content-Type: text/plain');
if (file_exists($fn)) {
  $lines = file($fn);
  echo $lines[1];
} else {
  echo 'n/a';
}

?>