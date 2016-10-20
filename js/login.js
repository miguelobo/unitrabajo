// Login Form

$(function() {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });


     var button2 = $('#loginButton2');
    var box2 = $('#loginBox2');
    var form2 = $('#loginForm2');
    button2.removeAttr('href');
    button2.mouseup(function(login) {
        box2.toggle();
        button2.toggleClass('active');
    });
    form2.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginButton2').length > 0)) {
            button2.removeClass('active');
            box2.hide();
        }
    });
});
