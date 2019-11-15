<?php

header('Content-type: text/plain');
$filenames = scandir('raw/');
array_shift($filenames);
array_shift($filenames);
$bucket = array();
$hdr = array();
foreach ($filenames as $fn) {
  $fn = "raw/$fn";
  $lines = file($fn, FILE_IGNORE_NEW_LINES);
  array_shift($lines);
  array_shift($lines);
  array_shift($lines);
  $hdr = array_shift($lines);
  $bucket = array_merge($bucket, $lines);
}
echo implode("\n", array_merge(array($hdr), $bucket));

?>