$(document).ready(function(){
    $("#form").validate({
        errorClass: 'error',
        rules: {
            user: {
                required: true,
                minlength: 10,
            
            },
            email: {
                required: true,
            },
            pass: {
                required: true,
                minlength: 8
            },
            cpass: {
                required:  true,
                minlength: 8,
                equalTo: "pass"
            }
        }
      
    })
})