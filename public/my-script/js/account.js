$( document ).ready(function() {
    // Get the modal
var modal = $('#sign-in-form');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.hide()
    }
}
});

function show_form_sign_in(){
    $('#sign-in-form').show()
}

function show_form_sign_up(){
    $('#sign-up-form').show()
}

function signIn(){
    // need to check input. coming soon
    var data={
        "phone": $('#my_phone').val(),
        "password": $('#psw').val()
    }
    //send request sign in
    $.ajax({
        url: '/sign-in',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function (json) {
            console.log("signIn")
            localStorage.setItem("token",json['token'])
            $.ajax({
                headers: {
                    "x-access-token": localStorage.getItem("token")
                },
                url: '/',
                type: 'GET',
                dataType: 'json',
                success: function (json) {
                    console.log("reload")
                    
                }
            });
        }
    });
    
}

function signUp(){
    // need to check input. coming soon
    var data={
        phone: $('#my_phone').val(),
        password: $('#psw').val()
    }
    //send request sign in
    $.ajax({
        url: '/sign-up',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function (json) {
            console.log("signUp")
            console.log(JSON.stringify(json))

        }
    });
}

function logOut(){
    //send request sign in
    $.ajax({
        headers: {
            "x-access-token": localStorage.getItem("token")
        },
        url: '/log-out',
        type: 'POST',
        dataType: 'json',
        success: function (json) {
            console.log("logOut")
            console.log(JSON.stringify(json))
        }
    });
}


