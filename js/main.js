$(function() {
    var currentDate; // Holds the day clicked when adding a new event
    var currentEvent; // Holds the event object when editing an event

    $('.datetime').datetimepicker({
        format: 'DD/MM/YYYY HH:mm'
    });
    $('#allday').change(function() {
        if ($(this).is(":checked")) {
            $('#startDate').data("DateTimePicker").format('DD/MM/YYYY');
            $('#endDate').data("DateTimePicker").format('DD/MM/YYYY');
        } else {
            $('#startDate').data("DateTimePicker").format('DD/MM/YYYY HH:mm');
            $('#endDate').data("DateTimePicker").format('DD/MM/YYYY HH:mm');
        }
    });

    $('#color').colorpicker(); // Colopicker
    // Fullcalendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        // Get all events stored in database
        events: 'crud/getEvents.php',
        // Handle Day Click
        dayClick: function(date, event, view) {
            currentDate = date.format();
            // Open modal to add event
            modal({
                // Available buttons when adding
                buttons: {
                    add: {
                        id: 'add-event', // Buttons id
                        css: 'btn-success', // Buttons class
                        label: 'Add' // Buttons label
                    }
                },
                title: 'Add Event' // Modal title
            });
        },
        // Event Mouseover
        eventMouseover: function(calEvent, jsEvent, view) {
            var tooltip = '<div class="event-tooltip">' + calEvent.description + '</div>';
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
        // Handle Existing Event Click
        eventClick: function(calEvent, jsEvent, view) {
            // Set currentEvent variable according to the event clicked in the calendar			
			currentEvent = calEvent;
            // Open modal to edit or delete event
            modal({
                // Available buttons when editing
                buttons: {
                    delete: {
                        id: 'delete-event',
                        css: 'btn-danger',
                        label: 'Delete'
                    },
                    update: {
                        id: 'update-event',
                        css: 'btn-success',
                        label: 'Update'
                    }
                },
                title: 'Edit Event "' + calEvent.title + '"',
                event: calEvent
            });
        },
		eventDrop: function(  event, delta, revertFunc, jsEvent, ui, view  ) {
			$.post('crud/updateDropEvent.php', {
                id: event.id,
				allday: event.allDay ? '1' : '0',
				start: event.start.format(),
                end: event.end ? event.end.format() : null
            }, function(result) {
                // nothing
            });
		},
		eventResize: function(event, delta, revertFunc) {
			$.post('crud/updateResizeEvent.php', {
                id: event.id,
                end: event.end.format()
            }, function(result) {
                // nothing
            });
		}
    });
    // Prepares the modal window according to data passed
    function modal(data) {

        // Set modal title
        $('.modal-title').html(data.title);
        // Clear buttons except Cancel
        $('.modal-footer button:not(".btn-default")').remove();
        // Set input values
        $('#title').val(data.event ? data.event.title : '');

        if (data.event) {
            $('#allday').attr('checked', data.event.allDay);
            var f = data.event.allDay ? 'DD/MM/YYYY' : 'DD/MM/YYYY HH:mm';
            $('#startDate').val(getDate(data.event.start, f));
            $('#endDate').val(getDate(data.event.end, f));
        } else {
            $('#startDate').val(moment(currentDate, 'YYYY-MM-DD').format('DD/MM/YYYY HH:mm'));
            $('#endDate').val('');
            $('#allday').attr('checked', false);
        }

        $('#description').val(data.event ? data.event.description : '');
        $('#color').val(data.event ? data.event.color : '#3a87ad');

        // Create Butttons
        $.each(data.buttons, function(index, button) {
            $('.modal-footer').prepend('<button type="button" id="' + button.id + '" class="btn ' + button.css + '">' + button.label + '</button>')
        });
        //Show Modal
        $('.modal').modal('show');
    }
    // Handle Click on Add Button
    $('.modal').on('click', '#add-event', function(e) {
        if (validator(['title', 'description', 'startDate'])) {
            $.post('crud/addEvent.php', {
                title: $('#title').val(),
                description: $('#description').val(),
                color: $('#color').val(),
                start: getMySQLDate($('#startDate').val()),
                end: getMySQLDate($('#endDate').val()),
                allday: $('#allday').is(":checked") ? '1' : '0'
            }, function(result) {
                $('.modal').modal('hide');
                $('#calendar').fullCalendar("refetchEvents");
            });
        }
    });
    // Handle click on Update Button
    $('.modal').on('click', '#update-event', function(e) {
        if (validator(['title', 'description'])) {
            $.post('crud/updateEvent.php', {
                id: currentEvent._id,
                title: $('#title').val(),
                description: $('#description').val(),
                color: $('#color').val(),
                start: getMySQLDate($('#startDate').val()),
                end: getMySQLDate($('#endDate').val()),
                allday: $('#allday').is(":checked") ? '1' : '0'
            }, function(result) {
                $('.modal').modal('hide');
                $('#calendar').fullCalendar("refetchEvents");
            });
        }
    });
    // Handle Click on Delete Button
    $('.modal').on('click', '#delete-event', function(e) {
        $.get('crud/deleteEvent.php?id=' + currentEvent._id, function(result) {
            $('.modal').modal('hide');
            $('#calendar').fullCalendar("refetchEvents");
        });
    });

    // Get Formated Time From Timepicker
    function getMySQLDate(date) {

        if (!$.trim(date)) {
            return '';
        }

        var m = moment(date, 'DD/MM/YYYY HH:mm');
        return m.format('YYYY-MM-DD HH:mm');
    }

    function getDate(date, pattern) {
        if (!$.trim(date)) {
            return '';
        }
        var m = moment(date, 'YYYY-MM-DD HH:mm');
        return m.format(pattern);
    }
    // Dead Basic Validation For Inputs
    function validator(elements) {
        var errors = 0;
        $.each(elements, function(index, element) {
            if ($.trim($('#' + element).val()) == '') errors++;
        });
        if (errors) {
            $('.error').html('Please insert title, start and description.');
            return false;
        }
        return true;
    }
});