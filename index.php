<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8' />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
        <link href='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.6.0/fullcalendar.min.css' rel='stylesheet' />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.6.0/fullcalendar.print.css' rel='stylesheet' media='print' />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/css/bootstrapValidator.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
        <link href="css/bootstrap-colorpicker.min.css" rel="stylesheet" />
        <link href="css/main.css" rel="stylesheet" />
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
                        <form class="form-horizontal" id="crud-form">
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="title">Title</label>
                                <div class="col-md-4">
                                    <input id="title" name="title" type="text" class="form-control input-md" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-offset-4 col-md-8">
                                    <div class="checkbox">
                                        <label><input id="allday" type="checkbox"> AllDay</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="time">Start</label>
                                <div class="col-md-4 input-append bootstrap-timepicker">
                                    <input id="startDate" name="startDate" type="text" class="form-control input-md datetime" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="time">End</label>
                                <div class="col-md-4 input-append bootstrap-timepicker">
                                    <input id="endDate" name="endDate" type="text" class="form-control input-md datetime" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="description">Description</label>
                                <div class="col-md-4">
                                    <textarea class="form-control" id="description" name="description"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="color">Color</label>
                                <div class="col-md-4">
                                    <input id="color" name="color" type="text" class="form-control input-md" readonly="readonly" />
                                    <span class="help-block">Click to pick a color</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- JavaScript placed at the end of the document so the pages load faster -->
        <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.1/moment.min.js'></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.6.0/fullcalendar.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>
        <script src='js/bootstrap-colorpicker.min.js'></script>
        <script src='js/main.js'></script>
    </body>
</html>