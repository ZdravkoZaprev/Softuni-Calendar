var app = app || {};

app.lecturesModel = (function() {
    function LecturesModel(requester) {
        this.requester = requester;
        this.serviceUrl = requester.baseUrl + 'appdata/' + requester.appId + '/' + "lectures/";
    }

    LecturesModel.prototype.getAllLectures = function(){
        return this.requester.get(this.serviceUrl, true);
    };
    
    return {
        load: function(requester) {
            return new LecturesModel(requester);
        }
    }
}());