<?php

	// Require DB Connection 
	
	require_once('connect.php');

	$sth = $dbh->prepare("SELECT * FROM events WHERE id = ?");
	
	$sth->execute(array($_GET['id']));

	$result = $sth->fetch(PDO::FETCH_ASSOC);
		
	echo json_encode($result);
