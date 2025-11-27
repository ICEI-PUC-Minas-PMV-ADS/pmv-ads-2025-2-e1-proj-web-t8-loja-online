// ==========================
// Máscara de CPF
// ==========================
document.getElementById('cpf').addEventListener('input', function(e){
    let v = e.target.value.replace(/\D/g,'');
    v = v.replace(/^(\d{3})(\d)/,'$1.$2');
    v = v.replace(/^(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
    v = v.replace(/\.(\d{3})(\d)/,'.$1-$2');
    e.target.value = v;
});

// ==========================
// Máscara de celular
// ==========================
document.getElementById('celular').addEventListener('input', function(e){
    let v = e.target.value.replace(/\D/g,'');
    v = v.replace(/^(\d{2})(\d)/g,'($1) $2');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    e.target.value = v;
});

// ==========================
// Função para salvar dados atuais temporariamente
// ==========================
function salvarDadosTemporarios() {
    const dados = {
        usuario: {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            tipo: document.getElementById('tipo').value,
            cpf: document.getElementById('cpf').value
        },
        endereco: {
            cep: document.getElementById('cep').value,
            logradouro: document.getElementById('logradouro').textContent,
            bairro: document.getElementById('bairro').textContent,
            cidade: document.getElementById('cidade').textContent,
            uf: document.getElementById('uf').textContent
        },
        mensagem: document.getElementById('mensagem').value
    };
    
    localStorage.setItem('dadosTemporarios', JSON.stringify(dados));
}

// ==========================
// Função para salvar checkout completo no histórico
// ==========================
function salvarCheckoutCompleto() {
    const totalCompra = parseFloat(document.getElementById('total-price').textContent.replace('R$', '').replace(',', '.'));
    const pagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked').id;

    // Verifica se todos os dados obrigatórios estão preenchidos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('cep').value;
    
    if (!nome || !email || !cep) {
        console.log('Dados incompletos, não salvando no histórico');
        return false;
    }

    const dados = {
        id: Date.now(), // ID único baseado no timestamp
        timestamp: new Date().toISOString(),
        usuario: {
            nome: nome,
            email: email,
            celular: document.getElementById('celular').value,
            tipo: document.getElementById('tipo').value,
            cpf: document.getElementById('cpf').value
        },
        endereco: {
            cep: cep,
            logradouro: document.getElementById('logradouro').textContent,
            bairro: document.getElementById('bairro').textContent,
            cidade: document.getElementById('cidade').textContent,
            uf: document.getElementById('uf').textContent
        },
        frete: {
            sudeste: {
                preco: document.getElementById('price-sudeste').textContent,
                dias: document.getElementById('days-sudeste').textContent
            },
            outros: {
                preco: document.getElementById('price-outros').textContent,
                dias: document.getElementById('days-outros').textContent
            }
        },
        pagamento: pagamentoSelecionado,
        total: `R$${totalCompra.toFixed(2)}`,
        mensagem: document.getElementById('mensagem').value
    };

    let historico = JSON.parse(localStorage.getItem('historicoCheckout')) || [];

    // Verifica se já existe um checkout com os mesmos dados principais
    const checkoutExistente = historico.find(item => 
        item.usuario.email === dados.usuario.email && 
        item.usuario.cpf === dados.usuario.cpf &&
        item.total === dados.total
    );

    // Se não existir, adiciona ao histórico
    if (!checkoutExistente) {
        historico.unshift(dados);
        
        // Mantém apenas os 5 registros mais recentes
        if (historico.length > 5) {
            historico = historico.slice(0, 5);
        }

        localStorage.setItem('historicoCheckout', JSON.stringify(historico));
        console.log('Novo checkout salvo no histórico:', dados);
    } else {
        console.log('Checkout já existe no histórico');
    }

    return true;
}

// ==========================
// Função para carregar dados temporários
// ==========================
function carregarDadosTemporarios() {
    const dadosSalvos = JSON.parse(localStorage.getItem('dadosTemporarios'));
    if (!dadosSalvos) return;

    document.getElementById('nome').value = dadosSalvos.usuario.nome || '';
    document.getElementById('email').value = dadosSalvos.usuario.email || '';
    document.getElementById('celular').value = dadosSalvos.usuario.celular || '';
    document.getElementById('tipo').value = dadosSalvos.usuario.tipo || '';
    document.getElementById('cpf').value = dadosSalvos.usuario.cpf || '';

    document.getElementById('cep').value = dadosSalvos.endereco.cep || '';
    document.getElementById('logradouro').textContent = dadosSalvos.endereco.logradouro || '-';
    document.getElementById('bairro').textContent = dadosSalvos.endereco.bairro || '-';
    document.getElementById('cidade').textContent = dadosSalvos.endereco.cidade || '-';
    document.getElementById('uf').textContent = dadosSalvos.endereco.uf || '-';
    if(dadosSalvos.endereco.cep) document.getElementById('address-box').style.display = 'block';

    document.getElementById('mensagem').value = dadosSalvos.mensagem || '';
}

// ==========================
// Função para carregar todo o histórico
// ==========================
function carregarHistoricoCompleto() {
    const historico = JSON.parse(localStorage.getItem('historicoCheckout')) || [];
    console.log('Histórico completo de checkouts:', historico);
    return historico;
}

// ==========================
// Limpar formulário
// ==========================
function limparFormulario() {
    ['nome','email','celular','tipo','cpf','cep','mensagem'].forEach(id => {
        document.getElementById(id).value = '';
    });
    document.getElementById('address-box').style.display = 'none';
    document.getElementById('logradouro').textContent = '-';
    document.getElementById('bairro').textContent = '-';
    document.getElementById('cidade').textContent = '-';
    document.getElementById('uf').textContent = '-';
    document.getElementById('price-sudeste').textContent = 'R$0,00';
    document.getElementById('days-sudeste').textContent = '0 dias';
    document.getElementById('price-outros').textContent = 'R$0,00';
    document.getElementById('days-outros').textContent = '0 dias';
    document.getElementById('total-price').textContent = 'R$0,00';
    document.querySelector('input[name="pagamento"][id="pix"]').checked = true;
    
    // Remove os dados temporários
    localStorage.removeItem('dadosTemporarios');
}

// ==========================
// Executa ao carregar a página
// ==========================
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-address');
    const totalProduto = 80.00;
    document.getElementById('total-price').textContent = `R$${totalProduto.toFixed(2)}`;

    // Carrega apenas os dados temporários (formulário em preenchimento)
    carregarDadosTemporarios();

    // Salva temporariamente a cada input (sem adicionar ao histórico)
    ['nome','email','celular','tipo','cpf','cep','mensagem'].forEach(id => {
        document.getElementById(id).addEventListener('input', salvarDadosTemporarios);
    });

    document.querySelectorAll('input[name="pagamento"]').forEach(radio => {
        radio.addEventListener('change', salvarDadosTemporarios);
    });

    searchBtn.addEventListener('click', async function(event) {
        event.preventDefault();
        const cep = document.getElementById('cep').value.replace(/\D/g, '');
        if (!cep) return alert('Digite um CEP válido!');

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert('CEP não encontrado!');
                return;
            }

            document.getElementById('logradouro').textContent = data.logradouro || '-';
            document.getElementById('bairro').textContent = data.bairro || '-';
            document.getElementById('cidade').textContent = data.localidade || '-';
            document.getElementById('uf').textContent = data.uf || '-';
            document.getElementById('address-box').style.display = 'block';

            const sudeste = ['SP','RJ','MG','ES'];
            let freteSudeste = 19.90;
            let diasSudeste = 3;
            let freteOutros = 28.90;
            let diasOutros = 8;

            let isSudeste = sudeste.includes(data.uf);

            document.getElementById('price-sudeste').textContent = `R$${freteSudeste.toFixed(2)}`;
            document.getElementById('days-sudeste').textContent = `${diasSudeste} dias`;
            document.getElementById('price-outros').textContent = `R$${freteOutros.toFixed(2)}`;
            document.getElementById('days-outros').textContent = `${diasOutros} dias`;

            const freteAtual = isSudeste ? freteSudeste : freteOutros;
            const totalCompra = totalProduto + freteAtual;
            document.getElementById('total-price').textContent = `R$${totalCompra.toFixed(2)}`;

            salvarDadosTemporarios();

        } catch (error) {
            console.error(error);
            alert('Erro ao buscar endereço.');
        }
    });

    // Finalizar Compra
    document.querySelector('.btn-primary').addEventListener('click', function() {
        // Salva o checkout completo no histórico apenas quando finalizar
        const salvou = salvarCheckoutCompleto();
        
        if (salvou) {
            // Carrega e exibe o histórico no console para debug
            const historico = carregarHistoricoCompleto();
            console.log('Checkout finalizado. Histórico atual:', historico);
            
            window.location.href = '../CompraFinalizada/compra.html';
            limparFormulario();
        } else {
            alert('Por favor, preencha todos os dados obrigatórios antes de finalizar a compra.');
        }
    });
});
