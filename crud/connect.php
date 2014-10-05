<?php
	try {
	  $dbh = new PDO("mysql:host=localhost;dbname=calendar", 'root', '');
	}
	catch(PDOException $e) {
	    echo $e->getMessage();
	}