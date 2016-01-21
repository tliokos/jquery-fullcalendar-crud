<?php
	// Require DB Connection
	require_once('connect.php');
    // Update Event
	$sth = $dbh->prepare("UPDATE events SET title = ?, start = ?, end = ?, allDay = ?, description = ?, color = ? WHERE id = ?");
	$sth->execute(array($_POST['title'], $_POST['start'], empty($_POST['end']) ? null : $_POST['end'], $_POST['allday'], $_POST['description'], $_POST['color'], $_POST['id']));