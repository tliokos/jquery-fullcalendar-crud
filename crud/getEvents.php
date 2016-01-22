<?php
	include_once('event.php');

	// Require DB Connection
	require_once('connect.php');
    // Get ALl Event
	$sth = $dbh->prepare("SELECT * FROM events WHERE start BETWEEN ? AND ? ORDER BY start ASC");
	$sth->execute(array($_GET['start'], $_GET['end']));
	$result = $sth->fetchAll(PDO::FETCH_ASSOC);

	$output_arrays = array();
	foreach($result as $row) {
		$event = new Event($row);
		$output_arrays[] = $event->toArray();
	}

	// Send JSON to the client.
	echo json_encode($output_arrays);
?>