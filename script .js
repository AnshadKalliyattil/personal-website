$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:3,
            },
            place:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            number:{
                required:true,
                minlength:3,
                maxlength:10,
                number:true
            
            },
            Message:{
                required:true,
                minlength:6
            }

        }
    })
})
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwalpp-BcxA8Yp5TOcLE45YDxvdq-q_hFjdOfLCeNfzKsq1tttw8geQRtXAx22eSel4/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
