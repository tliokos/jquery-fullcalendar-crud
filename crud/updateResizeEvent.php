<?php
	// Require DB Connection
	require_once('connect.php');
    // Update Event
	$sth = $dbh->prepare("UPDATE events SET end = ? WHERE id = ?");
	$sth->execute(array($_POST['end'], $_POST['id']));