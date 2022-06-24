// instancia jQuery e evita conflitos //
// jQuery(function ($) {        //<----- EXEMPLO 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    $('h4');  //TAG
    $('.featured-item');  //class
    $('#featured');   //id
})

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

$('.featured-item a').on('click', function(event){

  event.preventDefault();
  alert('Produto esgotado');

})