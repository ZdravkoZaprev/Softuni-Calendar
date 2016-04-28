var app = app || {};

app.lecturesViewBag = (function () {

    function showAllLectures(selector, data) {
        $.get("templates/calendar.html", function(templ){
           var output = Mustache.render(templ, data);
            selector.html(output);
            $('#calendar').fullCalendar({
                theme: false,
                header: {
                    left: 'prev,next today addEvent',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                defaultDate: '2016-01-12',
                selectable: false,
                editable: false,
                eventLimit: true,
                events: data,
                customButtons: {
                    addEvent: {
                        text: 'Add Event',
                        click: function () {
                            //TODO: redirect to add event page
                        }
                    }
                },
                eventClick: function (calEvent, jsEvent, view) {
                    $.get('templates/modal.html', function (templ) {
                        var rendered = Mustache.render(templ, calEvent);
                        $('#modal-body').html(rendered);
                        $('#editLecture').on('click', function() {
                            //TODO: redirect to edit event page
                        });
                        $('#deleteLecture').on('click', function() {
                            //TODO: redirect to delete event page
                        })
                    });
                    $('#events-modal').modal();
                }
            });



        });
    }


    return {
        load: function () {
            return {
                showAllLectures: showAllLectures
            }
        }
    }
}());