$(document).ready(function(){
    $(".btn-menu").click(function(){
        $(".menu").slideToggle();
    })

    $("#telefone").mask("(00) 00000-0000");

    $("form").validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            veiculoInteresse:{
                required: false
            },
            mensagem:{
                required: true
            }
        },
        messages:{
            nome: `<span > Por favor, insira seu nome </span> `,
            telefone: `<span > Por favor, insira seu número de telefone</span>`,
            email: `<span > E-mail invalido </span> `,
        },
    })
})