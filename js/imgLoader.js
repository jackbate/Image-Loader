
var emailAddress = document.getElementById('email');

$('#btn').on('click', function() {
    var img = ""
    var img = $('<img />', {src : 'http://webpage.com/images/' + $('#imagesize').val() +'.png'});
    img.appendTo('body');
    
});

function formSubmit(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this);
}
