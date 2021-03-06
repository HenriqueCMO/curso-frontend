// instancia jQuery e evita conflitos //
// jQuery(function ($) {        //<----- EXEMPLO 

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
    $('h4');  //TAG
    $('.featured-item');  //class
    $('#featured');   //id
    
    // manipulação de html pelo jQuery
    // configurando produtos

    $('.featured-item a').addClass('btn btn-dark strech-link');
    $('.featured-item:first h4').append('<span class="badge bg-info">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    //$('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    // $('.featured-item:first h4').css('color', '#f00')
    // $("body").css('background-color', '#FFF8DC')


    // $('.featured-item h4').click(function(){ 
    //   $(this).css({
    //     'color' : '#6f42c1',
    //     'background' : '	#E6E6FA',
    //     'font-weight': 'bold',
    //     'width' : '210px',
    //     'border-radius' : '10px',
    //     'text-align' : 'center',
    //   })  
    // });

    //mouseenter, mouseleave, hover, 
    //blur(ação apos retirar foco do mouse pode ser utilizado para validar campo de formulário)

    // $('.featured-item').mouseenter(function(){ 
    //   console.log($(this).find('h4').text());  
    // });


    /*
    * Manipulação de eventos
    */

    $('.featured-item a').on('click', function (event) {

        event.preventDefault();
        alert('Produto esgotado');

    })

    /*
    * Callback
    * Entendendo ações que começam ao término de outra
    */

    $('.featured-item:nth(1)')
        .hide(500, function () {
            //este é o callback
            console.log($(this).find('h4').text() + 'Esgotado')
        })
        .show(500, function () {
            //este é o callback
            console.log($(this).find('h4').text() + 'Em estoque')
        })

    /*
    * Animações
    */

    const duracao = 1000 // milisegundos equivalente a 1 seg.
    $('.featured-item:nth(0)')
        .hide(duracao)
        .show(duracao)
        .fadeOut(duracao)
        .fadeIn(duracao)
        .toggle(duracao)
        .toggle(duracao)

    $('#form-submit').on('click', function (event) {
        event.preventDefault()
        if ($('#email').val() != null) {
            $('#email').animate({
                opacity: 'toggle',
                left: '-950'
            }, duracao, function () {
                console.log($(this).val())
            })
        }return false
    })

    /*
    * Ouvinte de eventos .nav-modal-open
    */
   
    $('.nav-modal-open').on('click', function (e){
        e.preventDefault();
        let elem = $(this).attr('rel')
        $('.modal-body').html($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())
        let myModal = new bootstrap.Modal($('#modelId'))
        myModal.show()
    })

    function validate(elemento){
        if(elemento.val() == ''){
            console.log('O campo de '+ elemento.attr('name') + ' é obrigatório');
            elemento.parent().find('.text-muted').show()
            elemento.addClass('invalid')
            return false
        } else{
            elemento.parent().find('.text-muted').hide()
            elemento.removeClass('invalid')
        }
    }

    $('body').on('submit', '.modal-body .form', function(e){
        e.preventDefault()
        
        const inputName = $('#nome')
        const inputEmail = $('#email')

        validate(inputName)
        validate(inputEmail)

        if(inputName.hasClass('invalid') || inputName.hasClass('invalid')){
            console.log('verificar campos obrigatórios')
            return false
        } else{
            $(this).submit()
        }       
    })

    $('body').on('blur','#nome', function(){     
        validate($(this))
    })    
    $('body').on('blur','#email', function(){
        validate($(this))
    })
    $('body').on('blur','#email', function(){
        validate($(this))
    })
    $('body').on('focus','#date', function(){
        $(this).datepicker();
    })
    $('body').on('blur','#date', function(){
        validate($(this))
        $(this).mask('00/00/0000');
    })
    $('body').on('blur','#time', function(){
        validate($(this))
        $(this).mask('00:00');
    })
    $('body').on('blur','#cep', function(){
        validate($(this))
        $(this).mask('00000-000');
    })
    $('body').on('blur','#phone', function(){
        validate($(this))
        $(this).mask('0000-0000');
    })
    $('body').on('blur','#cpf', function(){
        validate($(this))
        $(this).mask('000.000.000-00', {reverse: true});
    })
    


})