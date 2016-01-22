<?php
	// Require DB Connection
	require_once('connect.php');
    // Update Event
	$sth = $dbh->prepare("UPDATE events SET start = ?, end = ?, allDay = ? WHERE id = ?");
	$sth->execute(array($_POST['start'], empty($_POST['end']) ? null : $_POST['end'], $_POST['allday'], $_POST['id']));