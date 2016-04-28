var app = app || {};

app.lecturesController = (function (){
    function LecturesController(viewBag, model){
        this.viewBag = viewBag;
        this.model = model;
    }

    LecturesController.prototype.loadAllLectures = function(selector){
        _this = this;
        this.model.getAllLectures()
            .then(function(successData){
                var result = {
                    items: []
                };

                successData.forEach(function(lecture){
                    result.items.push({title: lecture.title, start: lecture.start, end: lecture.end});
                });

                _this.viewBag.showAllLectures(selector, result);
            })
    };

    return {
        load: function(viewBag, model){
            return new LecturesController(viewBag, model)
        }
    }
}());