/*global $ */
'use strict';
var todaysDate = new Date();

function getDayOfWeek(dayIndex) {
    var weekDays = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];
    return weekDays[dayIndex];
}

var day = '.' + getDayOfWeek(todaysDate.getDay());

$(document).ready(function () {
    function showTodaysEvents() {
        $(day).removeClass('hidden');
    }
    showTodaysEvents();
});
