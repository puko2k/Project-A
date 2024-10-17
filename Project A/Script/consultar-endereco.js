let cep = document.querySelector('#zip');
let rua = document.querySelector('#street');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#city');
let estado = document.querySelector('#state');

cep.value = '';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=pupularForm';
    document.body.appendChild(script);
});

function pupularForm(resposta) {

    if ("erro" in resposta) {
        alert('cep não encontrado')
        return;
    }

    console.log(resposta);
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}