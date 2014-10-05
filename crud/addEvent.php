<?php
	// Require DB Connection
	require_once('connect.php');
    // Add Event
	$sth = $dbh->prepare("INSERT INTO events (title,  events.date, description, color) VALUES (?,?,?,?)");
	$sth->execute(array($_POST['title'], $_POST['date'], $_POST['description'], $_POST['color']));
	
