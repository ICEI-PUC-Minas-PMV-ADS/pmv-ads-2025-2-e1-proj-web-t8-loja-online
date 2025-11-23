# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e1-proj-web-t8-loja-online/tree/main/documentos/02-Especificacao-do-Projeto.md">Especificação do Projeto</a></span>, 
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e1-proj-web-t8-loja-online/tree/main/documentos/04-Projeto-de-Interface.md">Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul>
  <li>Site publicado na internet;</li>
  <li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

---
## Checkout

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar cálculo de frete por CEP</td>
  <td>
   <ul>
    <li>RF-05: Calcular valor e prazo do frete por CEP, com simulação disponível sem login.</li>
   </ul>
  </td>
  <td>Validar se o sistema retorna corretamente</td>
  <td>
   <ol>
    <li>Acessar a página de checkout.</li>
    <li>Inserir um CEP válido.</li>
    <li>Clicar no botão "Buscar endereço".</li>
   </ol>
  </td>
  <td>O endereço completo deve ser exibido e o valor/prazo do frete calculado automaticamente.</td>
  <td>Isabella</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar finalização de compra</td>
  <td>
   <ul>
    <li>RF-06: Finalizar compra com seleção de endereço, pagamento, aplicação de cupom e validação de dados.</li>
   </ul>
  </td>
  <td>Testar se o sistema salva os dados do checkout e exibe mensagem de sucesso após finalizar a compra.</td>
  <td>
   <ol>
    <li>Acessar a página de checkout.</li>
    <li>Preencher todos os campos obrigatórios (nome, e-mail, CPF, endereço, forma de pagamento).</li>
    <li>Clicar em "Finalizar compra".</li>
   </ol>
  </td>
  <td>O sistema deve exibir a mensagem "Transação realizada com sucesso!" e limpar o formulário após salvar os dados.</td>
  <td>Isabella</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar armazenamento local de dados do checkout</td>
  <td>
   <ul>
    <li>RNF-13: Armazenar localmente preferências do usuário (cookies ou localStorage).</li>
   </ul>
  </td>
  <td>Garantir que os dados do formulário e preferências sejam armazenados corretamente no localStorage.</td>
  <td>
   <ol>
    <li>Acessar a página de checkout.</li>
    <li>Preencher campos como nome, e-mail e forma de pagamento.</li>
    <li>Atualizar ou recarregar a página.</li>
   </ol>
  </td>
  <td>Os dados preenchidos devem permanecer salvos.</td>
  <td>Isabella</td>
 </tr>
</table>

---
## Compra Finalizada

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
     </tr>
  <tr>
    <td>CT-01: Verificar exibição das informações do pedido</td>
      <td>
      <ul>
        <li>RF-22: Gerar, salvar e exibir pedidos recentes do cliente, armazenando número e data/hora.</li>
      </ul>
    </td>
     <td>
      Validar se a tela de compra finalizada exibe corretamente o número do pedido e a data/hora.
    </td> 
    <td>
      <ol>
        <li>Acessar a página de Compra Finalizada</li>
        <li>Observar as informações exibidas.</li>
    </ol>
    </td>
        <td>
      <ul>
        <li>O número do pedido deve ser exibido corretamente.</li>
        <li>A data e hora da compra devem aparecer no formato esperado.</li>
        <li>As informações devem corresponder ao pedido recém-finalizado.</li>
           </ul>
    </td>
        <td>Isabella</td>
  </tr>
</table>


<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-02: Verificar armazenamento local de dados do horário/data e número do pedido</td>
    <td>
      <ul>
        <li>RNF-13: Armazenar localmente preferências do usuário (cookies ou localStorage).</li>
      </ul>
    </td>
    <td>
      Garantir que os dados do formulário e preferências sejam armazenados corretamente no localStorage.
    </td>
    <td>
      <ol>
        <li>Acessar a página de Compra Finalizada.</li>
        <li>Atualizar ou recarregar a página.</li>
      </ol>
    </td>
<td>
      Os dados preenchidos devem permanecer salvos.
    </td>
      <td>Isabella</td>
  </tr>
</table>

## Login

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Fazer login com email ou sites parceiros</td>
  <td>
   <ul>
    <li>RF-01: Autenticar e autorizar usuários com login, logout, controle de sessão e verificação de permissões.</li>
   </ul>
  </td>
  <td>Validar se o sistema retorna corretamente os acessos</td>
  <td>
   <ol>
    <li>Acessar a Homepage</li>
    <li>Inserir usuario e senha</li>
    <li>Clicar no botão "Login".</li>
   </ol>
  </td>
  <td>Fazer o login corretamente</td>
  <td>Phillipe</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar armazenamento local de dados do login</td>
  <td>
   <ul>
    <li>RNF-13: Armazenar localmente preferências do usuário (cookies ou localStorage).</li>
   </ul>
  </td>
  <td>Garantir que os dados do formulário e preferências sejam armazenados corretamente no localStorage.</td>
  <td>
   <ol>
    <li>Acessar a página de Login.</li>
    <li>Preencher campos como usuario e senha</li>
    <li>Atualizar ou recarregar a página.</li>
   </ol>
  </td>
  <td>Os dados preenchidos devem permanecer salvos.</td>
  <td>Phillipe</td>
 </tr>
</table>


## Tela de Cadastro

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Corrigir dados, pedidos e favoritos</td>
  <td>Validar se o usuário consegue visualizar, alterar e atualizar seus dados pessoais através da tela de “Cadastro do Usuário”, garantindo que as informações sejam exibidas corretamente e estejam sincronizadas com o armazenamento local.
   <ul>
    <li>RF-09: Permitir que o cliente acompanhe o status e etapas do pedido até a entrega..</li>
   </ul>
  </td>
  <td></td>
  <td>
   <ol>
    <li>Acessar a Homepage</li>
    <li>Inserir usuario e senha</li>
    <li>Clicar no botão "Login".</li>
    <li>Atualizar dados.</li>
   </ol>
  <td> Validar se o usuário consegue visualizar, alterar e atualizar seus dados pessoais através da tela de “Cadastro do Usuário”, garantindo que as informações sejam exibidas corretamente e estejam sincronizadas com o armazenamento local. </td> 
  <td>Fazer troca de dados, pedidos e ver os favoritos </td>
  <td>Matheus</td>
 </tr>
</table>

## Seleção do protudo

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td> CT-01: Verifique o funcionamento da Tela de Produto</td>
  <td>
   <ul>
    <li>RF-03: Exibir lista de produtos com filtros, detalhes técnicos e imagens.</li>
   </ul>
  </td>
  <td>Verificar se a tela de produto exibe corretamente as informações do item e se as imagens alternam ao clicar nas miniaturas.</td>
  <td>
   <ol>
    <li>Acessar o site no navegador.</li>
    <li>Verificar se nome, preço e produto são exibidos.</li>
    <li>Clicar nas miniaturas de imagens do produto e observar a troca da imagem principal..</li>
    <li>Verificar se nome, preço e produto são exibidos.</li>
   </ol>
   </td>
  <td>As informações do produto são exibidas corretamente. 
    A imagem principal é alterada ao clicar nas miniaturas.</td>
  <td>vitoria Ribeiro</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td> CT-02: Verifique o Simulação de frete por CEP</td>
  <td>
   <ul>
    <li>RF-05: Calcular valor e prazo do frete por CEP, com simulação disponível sem login.</li>
   </ul>
  </td>
  <td> Verificar se o sistema calcula corretamente o valor e o prazo de entrega ao inserir um CEP válido.</td>
  <td>
   <ol>
    <li>Acessar a tela de produto.</li>
    <li>Localizar o campo “Calcular Frete”.</li>
    <li>Inserir um CEP válido com 8 dígitos.</li>
    <li>Clicar no botão “Calcular”.</li>
    <li>Observar o resultado exibido.</li>
   </ol>
   </td>
  <td> <li>O sistema exibe mensagem com valor e prazo estimado.</li>
     <li>Caso o CEP seja inválido, exibe mensagem de erro.</li>
  </td>
  <td>vitoria Ribeiro</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td> CT-03: Verifique o armazenamento de dados no LocalStorage</td>
  <td>
   <ul>
    <li>RF-22: Gerar, salvar e exibir pedidos recentes do cliente, armazenando número e data/hora.</li>
   </ul>
  </td>
  <td> Verificar se o sistema salva corretamente no LocalStorage as informações de imagem principal, tamanho selecionado e CEP informado, mantendo-as após recarregar a página.</td>
  <td>
   <ol>
    <li>Acessar a tela de produto.</li>
    <li>Selecionar um tamanho de roupa..</li>
    <li>Clicar em uma miniatura de imagem para alterar a principal.</li>
    <li>Verificar se o tamanho, a imagem e o CEP permanecem salvos.</li>
  
   </ol>
   </td>
  <td> Os dados preenchidos devem permanecer salvos.
  </td>
  <td>vitoria Ribeiro</td>
 </tr>
</table>

---
## Carrinho de Compra

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Adicionar e remover a quantidade do mesmo produto.</td>
  <td>
    <ul>
      <li>RF-04: Adicionar, remover e atualizar itens no carrinho, com cálculo automático de totais.</li>
    </ul>
  </td>
  <td>Verificar se adicionou ou removeu o mesmo produto ao carrinho.</td>
  <td>
    <ol>
      <li>Acessar a tela do carrinho.</li>
      <li>Selecionar o - ou +.</li>
    </ol>
  </td>
  <td>O sistema deve alterar o preço do produto selecionado.</td>
  <td>Gabriel Felipe e Gabriel Passos.</td>
 </tr>
</table>


<table>
  <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Remover produto do carrinho.</td>
  <td>
    <ul>
      <li>RF-04: Adicionar, remover e atualizar itens no carrinho, com cálculo automático de totais.</li>
    </ul>
  </td>
  <td>Verificar se removeu o produto do carrinho.</td>
  <td>
    <ol>
      <li>Acessar a tela do carrinho.</li>
      <li>Apertar o botão X na cor vermelha.</li>
    </ol>
  </td>
  <td>O sistema deve remover o produto e alterar o preço final.</td>
  <td>Gabriel Felipe e Gabriel Passos.</td>
 </tr>
</table>


<table>
  <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Cálculo final do carrinho.</td>
  <td>
    <ul>
      <li>RF-04: Adicionar, remover e atualizar itens no carrinho, com cálculo automático de totais.</li>
    </ul>
  </td>
  <td>Verificar se alterou o preço final do carrinho conforme adiciona ou remove o produto.</td>
  <td>
    <ol>
      <li>Acessar a tela do carrinho.</li>
      <li>Ver se altera o preço no final da tela.</li>
    </ol>
  </td>
  <td>O sistema deve alterar o preço final do carrinho.</td>
  <td>Gabriel Felipe e Gabriel Passos.</td>
 </tr>
</table>
