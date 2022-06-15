function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

// Função Recursivas

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


/* 
 * Formulário envio de dados para cálculo da média 
 */

document.getElementById('formulario-01').addEventListener('submit', function( evento ){

    evento.preventDefault();
    evento.stopPropagation();

    if(this.getAttribute('class').match(/erro/)){
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {
  
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; //valida ser um número

        if(!isNaN(numero)){
            notas.push(numero);
        }

    }

    console.log(notas);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

});

function validaCampo(elemento){
    elemento.addEventListener('focusout', function(event){
    event.preventDefault();
    
    if (this.value == ""){
        document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento !!!';
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
    } else{
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
    }
});

} 

function validaCampoNumero(elemento){

    elemento.addEventListener('focusout', function(event){
   
        event.preventDefault();

    let numero = this.value.match(/[\d]5-[\d]3/) ? this.value.repplace(/-/, "") : this.value;

    if (numero != "" && numero.match(/^[0-9]*/)){
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
    } 
    else{             
        document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento !!!';
        this.classList.add('erro');
        this.parentNode.classList.add('erro')
        return false;
    }
});
} 

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event){
   
        event.preventDefault();

    if (this.value.match(/@/) && this.value.match(/.com/)){
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
    } 
    else{             
        document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento !!!';
        this.classList.add('erro');
        this.parentNode.classList.add('erro')
        return false;
    }
});
} 

function validaUF(elemento){

    elemento.addEventListener('focusout', function(event){
   
        event.preventDefault();

    if (this.value.match(/[A-Za-z]{2}/)){
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
    } 
    else{             
        document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento';
        this.classList.add('erro');
        this.parentNode.classList.add('erro')
        return false;
    }
});
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');

let camposNumericos = document.querySelectorAll('input.numero');

let campoEmail = document.querySelectorAll('input.email');

let campoUF = document.querySelectorAll('input.uf')

for (let emFoco of camposObrigatorios){
    validaCampo(emFoco);
};

for (let emFoco of camposNumericos){
    validaCampoNumero(emFoco);
};

for (let emFoco of campoEmail){
    validaEmail(emFoco);
};

for (let emFoco of campoUF){
    validaUF(emFoco);
};