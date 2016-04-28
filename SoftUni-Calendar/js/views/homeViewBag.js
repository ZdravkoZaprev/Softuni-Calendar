var app = app || {};

app.homeViewBag = (function () {
    function showWelcomePage(selector) {
        $.get("templates/welcome-guest.html", function(templ){
            selector.html(templ);
        })
    }

    function showHomePage(selector, data) {
        $.get("templates/welcome-user.html", function(templ){
            var output = Mustache.render(templ, data);
            selector.html(output);
        })
    }

    function showMenuPage(selector) {
        if(sessionStorage['sessionId']) {
            $.get("templates/menu-home.html", function(templ){
                selector.html(templ);
            })
        } else {
            $.get("templates/menu-login.html", function(templ){
                selector.html(templ);
            })
        }
    }

    return {
        load: function () {
            return {
                showWelcomePage: showWelcomePage,
                showHomePage: showHomePage,
                showMenuPage: showMenuPage
            }
        }
    }
}());