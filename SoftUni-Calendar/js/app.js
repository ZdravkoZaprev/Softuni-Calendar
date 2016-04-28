var app = app || {};

(function (){
    var router = Sammy(function(){
        var selector = $("#container");
        var menu = $("#menu");

        var requester = app.requester.load("kid_ZJhOgiN61b", "012675709a17493ab28ca8cff6bad778", "https://baas.kinvey.com/");

        var homeViewBag = app.homeViewBag.load();
        var userViewBag = app.userViewBag.load();
        var lectureViewBag = app.lecturesViewBag.load()

        var userModel = app.userModel.load(requester);
        var lectureModel = app.lecturesModel.load(requester);

        var homeController = app.homeController.load(homeViewBag);
        var userController = app.userController.load(userViewBag, userModel);
        var lecturesController = app.lecturesController.load(lectureViewBag, lectureModel);



        //this.before({except:{path:'#\/(login\/|register\/)?'}}, function() {
        //    if(!sessionStorage['sessionId']) {
        //        this.redirect('#/');
        //        return false;
        //    }
        //});

        this.before(function() {
            if(!sessionStorage['sessionId']){
                this.redirect("#/");
            }
        });

        this.get("#/", function(){
            if(!sessionStorage['sessionId']){
                homeController.loadWelcomePage(selector);
                homeController.loadMenuPage(menu);
            } else {
                homeController.loadHomePage(selector);
                homeController.loadMenuPage(menu);
            }
        });

        this.get("#/register/", function(){
            userController.loadRegisterPage(selector);
        });

        this.get("#/login/", function(){
            userController.loadLoginPage(selector);
        });

        this.get("#/logout/", function(){
           userController.logout();
        });

        this.get("#/calendar/list/", function(){
            lecturesController.loadAllLectures(selector);
        });





        this.bind("login", function(ev, data){
            userController.login(data);
        });

        this.bind("register", function(ev, data){
            userController.register(data);
        });

        this.bind("redirectUrl", function(ev, data){
            this.redirect(data.url);
        })

    });

    router.run("#/");
}());