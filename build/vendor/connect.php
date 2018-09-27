<?php
	require_once 'autoload.php';
	$loader = new Twig_Loader_Filesystem('views');
	$twig = new Twig_Environment($loader);
?>