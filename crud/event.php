<?php

class Event {

    public $id;
    public $title;
    public $description;
    public $color;
    public $allDay;
    public $start;
    public $end;

    // Constructs an Event object from the given array of key=>values.
    public function __construct($array) {

        $this->id = $array['id'];
        $this->title = $array['title'];
        $this->description = $array['description'];
        $this->description = $array['description'];
        $this->color = $array['color'];

        if (isset($array['allDay'])) {
            $this->allDay = (bool)$array['allDay'];
        }

        $this->start = new DateTime($array['start']);
        $this->end = isset($array['end']) ? new DateTime($array['end']) : null;
    }

    // Converts this Event object back to a plain data array, to be used for generating JSON
    public function toArray() {

        $array = array();
        $array['id'] = $this->id;
        $array['title'] = $this->title;
        $array['description'] = $this->description;
        $array['color'] = $this->color;

        // Figure out the date format. This essentially encodes allDay into the date string.
        if ($this->allDay) {
            $format = 'Y-m-d'; // output like "2013-12-29"
        } else {
            $format = 'c'; // full ISO8601 output, like "2013-12-29T09:00:00+08:00"
        }

        $array['start'] = $this->start->format($format);
        if (isset($this->end)) {
            $array['end'] = $this->end->format($format);
        }

        return $array;
    }
}
?>