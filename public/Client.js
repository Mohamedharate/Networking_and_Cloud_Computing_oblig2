// initial function
$(function () {
    //Skjuler alle feedbacks.
    $("#danger_feedback").hide()
    $("#success_feedback").hide()
    $("#warning_feedback").hide()
})

let current_user;

// index.html
function login(){

    current_user = $("#login_username").val();

    let user = {
        username: current_user
    }

    $.ajax({
        type: "post",
        url: "/api/login",
        data: user,
        success: function(data) {
            window.location.assign('home.html');
            console.log(data);
            $("#test_home").html('Tekst fra server: ' + data)
            $("#danger_feedback").hide();

        },
        error: function (xhr, textStatus) {
            console.log(textStatus + " " + xhr.responseText);
            $("#danger_feedback").show();
        }});
}

// Signup.html
function create_user(){

    const input_Register_user = $("#register_username").val();

    let user = {
        username: input_Register_user
    }

    $.ajax({
        type: "post",
        url: "/api/users",
        data: user,
        success: function(data, status_text, xhr) {
            console.log(data);
            $("#success_feedback").show().html('<strong>Success!</strong> ' + xhr.responseText)
            $("#warning_feedback").hide();
        },
        error: function (xhr) {
            console.log(xhr.responseText);
            $("#success_feedback").hide();
            if(xhr.status == 400) {
                $("#warning_feedback").show().html('<strong>Warning!</strong> ' + xhr.responseText);
            } else if (xhr.status == 409) {
                $("#warning_feedback").show().html('<strong>Warning!</strong> ' + xhr.responseText);
            } else {
                $("#warning_feedback").show().html('<strong>Warning!</strong> Something went wrong! Error code: ' + xhr.status + " " + xhr.responseText);
            }
        }});
}

// home.html

function get_user_rooms() {
    
}

function get_all_rooms() {
    
}

function get_all_messages() {
    
}



/*
function selectUser(){

}

function joinUser(){
    const name = $("#name").val();  //vil velge fra index.html id, feil?

    const data ={name};

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/api/users', options);
}

function joinRoom(){

}
function messages() {
}
 */
