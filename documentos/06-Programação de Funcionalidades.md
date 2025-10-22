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
