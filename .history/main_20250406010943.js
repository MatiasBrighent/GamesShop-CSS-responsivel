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
        message:{
            nome:`<span>Por favor, insira seu nome</span>`,
            email:`<span>E-mail inválido</span>`,
            menssagem:`<span>Por favor, insira sua mensagem</span>`,
        },
        submitHandler:function(form){
            console.log(form);
        }
    })
})