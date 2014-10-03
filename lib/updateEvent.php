<?php

	// Require DB Connection  
	
	require_once('connect.php');

	$sth = $dbh->prepare("UPDATE events SET title = ?, description = ? WHERE id = ?");
		
	$sth->execute(array($_POST['title'], $_POST['description'], $_POST['id']));
	
