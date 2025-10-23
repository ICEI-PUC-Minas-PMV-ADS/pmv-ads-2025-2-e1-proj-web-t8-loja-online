# Programação de Funcionalidades

### Tela de Checkout (RF-006)  
**Responsável:** Isabella Lima

**Descrição:**  
O acesso à tela de checkout é feito a partir do carrinho de compras. Essa tela permite ao usuário visualizar produtos, revisar quantidade e preço, preencher dados cadastrais, gerenciar endereços de entrega, selecionar forma de entrega e pagamento, adicionar observações e finalizar a compra. 

Exemplo da tela de checkout:

![Tela Checkout](img/screencapture-checkout.png)

**Requisitos atendidos:**  
- RF-04: Adicionar, remover e atualizar itens no carrinho, com cálculo automático de totais.  
- RF-05: Calcular valor e prazo do frete por CEP, com simulação disponível sem login.  
- RF-06: Finalizar compra com seleção de endereço, pagamento e validação de dados.  
- RF-07: Cadastrar, editar e listar endereços de entrega e pedidos. 
- RF-08: Editar dados pessoais do cliente.  

**Artefatos da funcionalidade:**  
- `index.html` → contém toda a estrutura da página de checkout.  
- `style.css` → contém o estilo visual da página (cores, fontes, layout).  
- `script.js` → contém a lógica da página (cálculo do total, validação de campos, seleção de frete e pagamento).  

**Instruções de acesso:**  
1. Abra um navegador de Internet e informe a URL principal do projeto:  
https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2025-2-e1-proj-web-t8-loja-online/loja/index.html
2. Clique no ícone do carrinho de compras no menu superior.  
3. O usuário será redirecionado para a página de checkout.  
4. Na tela de checkout, revise os produtos no carrinho.  
5. Preencha ou confirme os dados cadastrais.  
6. Selecione ou adicione um endereço de entrega.  
7. Escolha a forma de entrega (SEDEX ou PAC) e a forma de pagamento (PIX, Cartão ou Boleto).  
8. Se desejar, adicione uma observação sobre o pedido.  
9. Clique em “Finalizar compra” para concluir o pedido.


### Tela de Login (RF-001)  
**Responsável:** Phillipe Dias

**Descrição:**  
O acesso à tela de login, fazer login com outros serviços, e fazer um pré-cadastro para ser direcionado a pagina de cadastro

**Requisitos atendidos:** 
- RF-01	Autenticar e autorizar usuários com login, logout, controle de sessão e verificação de permissões.
- RF-10	Solicitar recuperação de senha via e-mail, validar token e redefinir senha.


**Artefatos da funcionalidade:**  
- `index.html` → contém toda a estrutura da página de login.  
- `style.css` → contém o estilo visual da página (cores, fontes, layout).  
- `script.js` → contém a lógica da página ( Alterar entre a tela de login e de pré-cadastro, controla a aberta do menu )


**Exemplo da tela de checkout:**

![Tela Checkout](img/<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/03f99be8-1149-4495-8a22-a6136410b6e9" />)

Tela de cadastro (RF-001)
Responsável: Matheus Dias

Descrição:

A tela "Cadastro do Usuário" tem como objetivo permitir que novos usuários realizem o registro no sistema, preenchendo suas informações pessoais e de contato.
Ela apresenta um formulário simples, responsivo e intuitivo, garantindo uma boa experiência de uso.

Requisitos funcionais atendidos:

RF-01	Cadastro de Usuário	O sistema deve permitir que o usuário preencha um formulário com suas informações pessoais e envie os dados.
RF-02	Validação de Campos	O sistema deve validar campos obrigatórios (como nome, e-mail e CPF) antes de enviar o formulário.
RF-03	Máscara de Entrada	O formulário deve aplicar máscaras nos campos de CPF, CEP, Telefone e Data de Nascimento.
RF-04	Envio de Dados	Os dados devem ser enviados ao backend para armazenamento (via API ou banco de dados).
RF-05	Feedback ao Usuário	Após o envio, o sistema deve apresentar uma mensagem de sucesso ou erro.

Requisitos não funcionais atendidos:

RNF-01	Usabilidade	Interface limpa, organizada e de fácil compreensão para o usuário.
RNF-02	Responsividade	O layout adapta-se a diferentes tamanhos de tela (desktop, tablet, celular).
RNF-03	Acessibilidade	Campos possuem rótulos descritivos e estrutura semântica para leitores de tela.
RNF-04	Desempenho	O carregamento da página é rápido e eficiente.


<img width="1914" height="870" alt="image" src="https://github.com/user-attachments/assets/60914ab9-ec22-46e0-bef5-c416a029f24c" />



