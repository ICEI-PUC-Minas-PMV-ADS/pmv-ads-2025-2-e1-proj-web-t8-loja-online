// Máscara de CPF
document.getElementById('cpf').addEventListener('input', function(e){
    let v = e.target.value.replace(/\D/g,'');
    v = v.replace(/^(\d{3})(\d)/,'$1.$2');
    v = v.replace(/^(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
    v = v.replace(/\.(\d{3})(\d)/,'.$1-$2');
    e.target.value = v;
});

// Máscara de celular
document.getElementById('celular').addEventListener('input', function(e){
    let v = e.target.value.replace(/\D/g,'');
    v = v.replace(/^(\d{2})(\d)/g,'($1) $2');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    e.target.value = v;
});

// Adicionar endereço
document.getElementById('add-address').addEventListener('click', function(){
    let box = document.getElementById('address-box');
    let novoEndereco = prompt('Digite seu endereço:');
    if(novoEndereco) box.textContent = novoEndereco;
});
