$(document).ready(function(){
    $(".btn-menu").click(function(){
        $(".menu").slideToggle();
    })

    $("#telefone").mask("(00) 00000-0000");

    $("form").validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            menssagem:{
                required:true
            },
        },
    })

})