<?php
	// Require DB Connection
	require_once('connect.php');
    // Add Event
	$sth = $dbh->prepare("INSERT INTO events (title, description, color, start, end, allDay) VALUES (?,?,?,?,?,?)");
	$sth->execute(array($_POST['title'], $_POST['description'], $_POST['color'], $_POST['start'], empty($_POST['end']) ? null : $_POST['end'], $_POST['allday']));