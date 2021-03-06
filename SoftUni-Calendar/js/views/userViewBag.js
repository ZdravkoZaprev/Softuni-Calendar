var app = app || {};

app.userViewBag = (function () {
    function showLoginPage(selector) {
        $.get('templates/login.html', function (templ) {
            $(selector).html(templ);
            $('#login-button').on('click', function () {
                var username = $('#username').val(),
                    password = $('#password').val();

                var data = {
                    username: username,
                    password: password
                };

                Sammy(function() {
                    this.trigger('login', data);
                })
            })
        })
    }

    function showRegisterPage(selector) {
        $.get('templates/register.html', function (templ) {
            $(selector).html(templ);
            $('#register-button').on('click', function () {
                var username = $('#username').val(),
                    password = $('#password').val(),
                    confirmPassword = $("#confirm-password").val();

                if (password !== confirmPassword) {
                    console.log("Password do not match");
                } else {
                    var data = {
                        username : username,
                        password : password,
                        confirmPassword: confirmPassword
                    };

                    Sammy(function() {
                        this.trigger('register', data);
                    })
                }
            })
        })
    }

    return {
        load: function () {
            return {
                showLoginPage: showLoginPage,
                showRegisterPage: showRegisterPage
            }
        }
    }
}());