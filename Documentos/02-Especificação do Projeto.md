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

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | Autenticar e autorizar usuários com login, logout, controle de sessão e verificação de permissões. | Alta | 
| RF-02 | Adicionar, editar, ativar/inativar e remover produtos no catálogo da loja. | Alta | 
| RF-03 | Exibir lista de produtos com filtros, detalhes técnicos, imagens e avaliações públicas. | Alta | 
| RF-04 | Adicionar, remover e atualizar itens no carrinho, com cálculo automático de totais. | Alta | 
| RF-05 | Calcular valor e prazo do frete por CEP, com simulação disponível sem login. | Alta | 
| RF-06 | Finalizar compra com seleção de endereço, pagamento, aplicação de cupom e validação de dados. | Alta | 
| RF-07 | Cadastrar, editar e listar endereços de entrega e pedidos, com atualização de status por administrador. | Alta | 
| RF-08 | Editar dados pessoais do cliente e permitir que admin corrija erros nos cadastros. | Alta | 
| RF-09 | Permitir que o cliente acompanhe o status e etapas do pedido até a entrega. | Alta | 
| RF-10 | Solicitar recuperação de senha via e-mail, validar token e redefinir senha. | Alta | 
| RF-11 | Atualizar estoque, impedir venda de produto esgotado e alertar estoque baixo. | Alta | 
| RF-12 | Listar e editar informações dos clientes, com histórico de pedidos por cliente. | Média | 
| RF-13 | Criar e gerenciar promoções por produto ou categoria com validade definida. | Média | 
| RF-14 | Criar, aplicar e validar cupons de desconto no carrinho e checkout. | Média | 
| RF-15 | Notificar automaticamente o administrador quando o estoque atingir limite mínimo. | Média | 
| RF-16 | Adicionar, remover e visualizar produtos na lista de desejos (favoritos). | Média | 
| RF-17 | Permitir clientes que compraram avaliarem produtos com nota e comentário. | Baixa | 
| RF-18 | Gerenciar tipos de usuários e permissões de acesso (admin, colaborador, cliente). | Baixa | 
| RF-19 | Salvar preferências de idioma e tema (claro/escuro) para uso automático em acessos futuros. | Baixa | 
| RF-20 | Notificar o usuário sobre acessos simultâneos à conta e permitir logout remoto. | Baixa | 
| RF-21 | Listar histórico de compras com detalhes e opção de recompra. | Baixa |
| RF-22 | Gerar, salvar e exibir pedidos recentes do cliente, armazenando número e data/hora. | Baixa |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | Disponibilizar interface intuitiva e responsiva, acessível via desktop e dispositivos móveis. | Alta | 
| RNF-02 | Garantir processo de checkout simples, com o menor número de etapas possível. | Alta| 
| RNF-03 | Carregar as páginas em até 2 segundos em condições normais de rede. | Alta | 
| RNF-04 | Permitir login seguro com autenticação e proteção contra ataques comuns. | Alta | 
| RNF-05 | Assegurar alta disponibilidade do sistema. | Alta | 
| RNF-06 | Manter o histórico de pedidos e ações do administrador para auditoria. | Alta | 
| RNF-07 | Garantir funcionamento correto da aplicação nos navegadores que atendam aos requisitos mínimos. | Alta | 
| RNF-08 | Assegurar design responsivo. | Alta | 
| RNF-09 | Alertar o usuário em caso de login simultâneo em outro dispositivo com o mesmo usuário. | Alta | 
| RNF-10 | Armazenar informações pessoais dos clientes de forma segura (ex.: criptografia de senha). | Média | 
| RNF-11 | Desenvolver com arquitetura modular para facilitar atualizações futuras.. | Média | 
| RNF-12 | Permitir que os administradores atualizem informações sem necessidade de conhecimento técnico. | Média | 
| RNF-13 | Armazenar localmente preferências do usuário (ex.: idioma, modo escuro) via cookies ou localStorage. | Média | 
| RNF-14 | Oferecer Modo Escuro (Dark Mode) (opcional, mas valorizado pelo usuário). | Baixa | 

**Prioridade: Alta / Média / Baixa. 

