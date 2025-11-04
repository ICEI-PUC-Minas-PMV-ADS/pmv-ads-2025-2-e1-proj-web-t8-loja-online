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
  <td>CT-02: Verificar cálculo de frete por CEP</td>
  <td>
   <ul>
    <li>RF-05: Calcular valor e prazo do frete por CEP, com simulação disponível sem login.</li>
   </ul>
  </td>
  <td>Validar se o sistema retorna corretamente o valor e o prazo de entrega ao inserir um CEP válido.</td>
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

---

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
  <td>CT-03: Verificar finalização de compra</td>
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

---

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
  <td>CT-04: Verificar armazenamento local de dados do checkout</td>
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
