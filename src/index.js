import './mis/css/bootstrap.css';
import './styles/main.scss';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import 'bootstrap';
import './mis/icons/style.css';
import 'animate.css';

const servicesUrl = 'https://swapi.co/api/people/'
const callAlert = ( alertType) =>{

    if(alertType == 'error'){
        let alert = $('#errorAlert');
            alert.removeClass('fadeOutLeft');
            alert.addClass('animated fadeInRight').css({'display': 'block'});
        setTimeout(() => {
            alert.removeClass('fadeInRight').addClass('fadeOutLeft');
        }, 2000);
    }

    else if(alertType == 'success'){
        let alert = $('#successAlert');
            alert.removeClass('fadeOutLeft');
            alert.addClass('animated fadeInRight').css({'display': 'block'});
        setTimeout(() => {
            alert.removeClass('fadeInRight').addClass('fadeOutLeft');
        }, 2000);
    }
}

const callServices = () =>{
    $.ajax({
        type: "GET",
        url: servicesUrl,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msg) {
            console.log(msg);
        },
        error: function(e){
            console.log(e);
        }
    });
}

$( "#LoginForm" ).submit(function( event ) {
    let password =$('#inputEmail').val(); 
    let email = $('#inputPassword').val();
    if( password != '' &&  email != ''){
       callAlert('success');
       callServices();
    }
    else{
        callAlert('error')
    }
    event.preventDefault();
});

 