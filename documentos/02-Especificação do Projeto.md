# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2"> Administrador </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsável pela gestão de produtos, pedidos, promoções e cadastros de clientes.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Adicionar, editar e remover produtos de forma simples.
Visualizar relatórios de vendas, estoque e pedidos.
Gerenciar cadastros de clientes e endereços de entrega.
Atualizar informações de forma rápida para evitar erros e inconsistências.</td>
</tr>
<th colspan="2"> Cliente Sem Cadastro </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário que acessa a loja pela primeira vez ou que deseja apenas explorar os produtos antes de se registrar. Pode se tornar um cliente fidelizado se tiver uma boa experiência inicial.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Navegação fluida, sem precisar se cadastrar para ver informações básicas.
Visualizar descrições, preços, fotos e prazos de entrega.
Simular frete sem criar conta.</td>
</tr>
<tr align=center>
<th colspan="2"> Cliente Cadastrado </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário principal da loja, já possui cadastro e realiza compras com frequência. Busca praticidade, confiança e rapidez no processo de compra.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Login simples e seguro.
Editar e manter dados atualizados (endereços, formas de pagamento).
Visualizar histórico de compras e status de pedidos.
Checkout rápido, transparente e confiável.
Acesso a imagens, informações detalhadas dos produtos.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Administrador | Cadastrar, editar e remover produtos do catálogo | Manter as informações da loja sempre atualizada |
| Administrador | Visualizar as compras e estoque | Gerenciar melhor a logística e evitar produtos indisponíveis. |
| Administrador | Acessar os cadastros dos clientes | Corrigir erros e oferecer suporte quando necessário. |
| Administrador | Gerenciar pedidos e endereços de entrega | Garantir que o cliente receba o produto corretamente. |
| Administrador | Aplicar promoções e descontos em produtos ou categorias | Aumentar as vendas em períodos estratégicos. |
| Administrador | Controlar permissões de acesso de outros colaboradores | Garantir a segurança das informações da loja. |
| Administrador | Ser notificado quando um produto estiver com estoque baixo | Para agir rapidamente e evitar indisponibilidade na loja. |
| Cliente Cadastrado | Realizar login de forma simples e rápida | Acessar minha conta e acompanhar meus pedidos sem dificuldades |
| Cliente Cadastrado | Editar meus dados pessoais e endereço| Manter minhas informações sempre corretas na hora da entrega. |
| Cliente Cadastrado | Visualizar imagens e detalhes técnicos das roupas | Ter confiança na minha escolha sem precisar ver a peça fisicamente. |
| Cliente Cadastrado | Simular frete antes da compra | Verificar valor do frete e tempo de entrega. |
| Cliente Cadastrado | Finalizar minha compra em poucas etapas | Não perder tempo e evitar frustração no checkout. |
| Cliente Cadastrado | Acompanhar o status da entrega | Saber quando meu pedido vai chegar. |
| Cliente Cadastrado | Salvar produtos em uma lista de favoritos | Poder comprá-los mais tarde ou acompanhar descontos. |
| Cliente Cadastrado | Aplicar um cupom de desconto durante o check out | Economizar na compra. |
| Cliente Cadastrado | Que o site lembre minhas preferências de idioma e modo escuro | Não precisa configurar tudo novamente em cada acesso. |
| Cliente Cadastrado | Ser alertado se minha conta for acessada em outro local ao mesmo tempo | Manter minha conta segura. |
| Cliente Sem Cadastro | Visualizar avaliações e comentários dos produtos | Decidir melhor antes de comprar. |
| Cliente Sem Cadastro | Pesquisar e visualizar produtos e descrições detalhadas | Decidir se vale a pena comprar antes de me cadastrar |
| Cliente Sem Cadastro | Simular frete e prazo de entrega sem precisar criar uma conta | Avaliar os custos rapidamente. |




## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | Autenticar e autorizar. | Alta | 
| RF-02 | Gerenciar os produtos. | Alta | 
| RF-03 | Catalogar os produtos. | Alta | 
| RF-04 | Gerenciar carrinho de compras. | Alta | 
| RF-05 | Calcular o frete. | Alta | 
| RF-06 | Finalizar a compra. | Alta | 
| RF-07 | Gerenciar os pedidos. | Alta | 
| RF-08 | Gerenciar os dados do cliente. | Alta | 
| RF-09 | Acompanhar os pedidos. | Alta | 
| RF-10 | Recuperar a senha | Alta | 
| RF-11 | Gerenciar os clientes. | Média | 
| RF-12 | Gerenciar as promoções. | Média | 
| RF-13 | Aplicar cupons de desconto. | Média | 
| RF-14 | Notificar estoque baixo. | Média | 
| RF-15 | Listar os desejos. | Média | 
| RF-16 | Avaliar e comentar produtos. | Baixa | 
| RF-17 | Controlar a permissão de usuários. | Baixa | 
| RF-18 | Gerenciar preferências do usuário. | Baixa | 
| RF-19 | Alertar sobre o acesso de conta. | Baixa | 
| RF-20 | Verificar o histórico de compra. | Baixa | 




**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  ...                    | ...   | 
| ...    |  ...                    | ...   | 

**Prioridade: Alta / Média / Baixa. 

