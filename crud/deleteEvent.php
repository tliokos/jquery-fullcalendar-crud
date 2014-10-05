<?php
	// Require DB Connection
	require_once('connect.php');
    // Delete Event
	$sth = $dbh->prepare("DELETE FROM events WHERE id = ?");
	$sth->execute(array($_GET['id']));
	
