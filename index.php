<!DOCTYPE html>
<html>
	<head>
		<title>Full Calendar CRUD</title>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
		<link href='//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.1.1/fullcalendar.min.css' rel='stylesheet' />
        <link href='//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.1.1/fullcalendar.print.css' rel='stylesheet' />
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.3/moment.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.1.1/fullcalendar.min.js"></script>
		<script src="js/main.js"></script>
	</head>
	<body>
        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <div id='calendar'></div>
                </div>
            </div>
        </div>
        <div class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                        <div class="error"></div>
                        <form class="form-horizontal">
                            <div class="control-group">
                                <label class="control-label" for="title">Event Title</label>
                                <div class="controls">
                                    <input id="title" name="title" type="text" class="input-xlarge">
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="description">Event Description</label>
                                <div class="controls">
                                    <textarea id="description" name="description"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </div>
	</body>
</html>