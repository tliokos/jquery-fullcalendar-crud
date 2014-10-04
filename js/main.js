$(function(){
    $('#calendar').fullCalendar({
        height: 650,
        header: {
            left: 'prev, next, today',
            center: 'title',
            right: 'month, agendaWeek, agendaDay'
        }
    });
	/*var currentDate; // Holds the day clicked when adding a new event
	var currentEvent; // Holds the event object when editing an event
	// Fullcalendar
	$('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
		// Get all events stored in database
		events: 'lib/getEvents.php',
		// Handle click on a day in fullcalendar
		dayClick: function(date, jsEvent, view) {
			// Set currentDate variable according to the date clicked in the calendar
			setCurrentDate(date);
			// Open modal to add event
	 		openModal({
	 			// Availale buttons when adding
	 			buttons: {
	 				add: {
	 					label: 'Add', // Buttons label
	 					id: 'addEvent', // Buttons id
	 					cls: 'btn-success' // Buttons class
	 				},				 				
	 			},
	 			header: 'Add Event' // Modal title
	 		});
		},
		// Event mouseover event
		eventMouseover: function(calEvent, jsEvent, view){
			var tooltip = '<div class="event-tooltip"><b>' + calEvent.title + '</b><div class="event-description">' + calEvent.description + '</div></div>';
    		$("body").append(tooltip);
    		$(this).mouseover(function(e) {
        		$(this).css('z-index', 10000);
        		$('.event-tooltip').fadeIn('500');
        		$('.event-tooltip').fadeTo('10', 1.9);
    		}).mousemove(function(e) {
        		$('.event-tooltip').css('top', e.pageY + 10);
        		$('.event-tooltip').css('left', e.pageX + 20);
    		});
		},
		eventMouseout: function(calEvent, jsEvent) {
    		$(this).css('z-index', 8);
    		$('.event-tooltip').remove();
		},
		// Handle click on an existing event
		eventClick: function(calEvent, jsEvent, view) {
			// Set currentEvent variable according to the event clicked in the calendar
			currentEvent = calEvent;
			// Open modal to edit or delete event
			openModal({
				// Availale buttons when editing
	 			buttons: {
	 				update: {
	 					label: 'Update',
	 					id: 'updateEvent',
	 					cls: 'btn-success'
	 				},
	 				delete: {
	 					label: 'Delete',
	 					id: 'deleteEvent',
	 					cls: 'btn-danger'
	 				}	 				
	 			},
	 			header: 'Update Event',
	 			title: calEvent.title, // Current event's title
	 			description: calEvent.description // Current event's description
 			});
		}
	 });
	 // Prepares the modal window according to the params passed
	 function openModal(params) {
	 	// Set modal title
	 	$('.modal-title').html(params.header);
	 	// Clear modal buttons
	 	$('.modal-footer').html('')
		// Set input values
	 	$('#title').val(params.title ? params.title : '');
	 	$('#description').val(params.description ? params.description : '');
	 	// Create Butttons
	 	$.each(params.buttons, function(index, button){
	 		$('.modal-footer').append('<button type="button" id="' + button.id  + '" class="btn ' + button.cls + '">' + button.label + '</button>');
	 	})
	 	// Always add calcel button at the end
	 	$('.modal-footer').append('<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>')
	 	//Show Modal
	 	$('.modal').modal('show');
	 }
	 // Handle click on Add Event Button
	 $('.modal').on('click', '#addEvent',  function(e){
	 	if(validator(['title', 'description'])) {
	 		$.post('lib/addEvent.php', { title: $('#title').val(), description: $('#description').val(), date: currentDate}, function(result){
		 		$('.modal').modal('hide');
		 		$('#calendar').fullCalendar("refetchEvents");
        	});
	 	}
	 });
	 // Handle click on Delete Event Button
	 $('.modal').on('click', '#deleteEvent',  function(e){
 		$.get('lib/deleteEvent.php?id=' + currentEvent._id, function(result){
	 		$('.modal').modal('hide');
	 		$('#calendar').fullCalendar("refetchEvents");
    	});
	 });
	 // Handle click on Delete Event Button
	 $('.modal').on('click', '#updateEvent',  function(e){
		if(validator(['title', 'description'])) {
	 		$.post('lib/updateEvent.php', {id: currentEvent._id, title: $('#title').val(), description: $('#description').val()}, function(result){
		 		$('.modal').modal('hide');
		 		$('#calendar').fullCalendar("refetchEvents");
        	});
	 	}
	 })
	 // Basic validation for inputs
	 function validator(elements) {
	 	var errors = 0;
	 	$.each(elements, function(index, element){
	 		if($('#' + element).val() == '') errors++;				 		
	 	});
	 	if(errors) {
	 		$('.error').html('Please insert title and description');
	 		return false;
	 	}
	 	return true;
	 }
	 // Set Current Working Date
	 function setCurrentDate(date) {
		currentDate = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
	 }*/
}); 