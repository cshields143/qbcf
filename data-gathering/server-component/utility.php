<?php

function url2filename($url) {
  $fn = 'raw' . DIRECTORY_SEPARATOR . hash('md5', $url) . '.txt';
  return $fn;
}

?>