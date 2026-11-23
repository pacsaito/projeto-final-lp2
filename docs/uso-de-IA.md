---
titulo: Uso de IA no projeto
descricao: Registro de todas as conversas com chatbot usadas no projeto, com data, etapa e finalidade.
autores: Nome Sobrenome, Nome Sobrenome
versao: v1.0
ultima_atualizacao: 2026-11-30
arquivos_relacionados: docs/04-versoes/ site/css/style.css
---

Cada uso de IA deve ser documentado neste documento. Caso haja uso de IA além do que for documentado, será atribuída nota zero para o trabalho.

A documentação ERRADA também será penalizada.

O uso de IA deve ser para assistencia, não execução do projeto. Os alunos ainda deverão responder a questões relacionadas ao desenvolvimento e código. A resposta incorreta será considerada como erro durante a avaliação e penalizará a nota.

## Regras de uso

- A IA responde dúvidas. O código é escrito pelo grupo.
- Cada integrante deve explicar, com as próprias palavras, qualquer trecho que tenha surgido de uma conversa.
- Copiar código gerado pela IA sem entendê-lo não é permitido. Se um trecho for usado, ele deve ser registrado na tabela.
- Ferramentas que editam o repositório ou geram código de forma autônoma (Claude Code, agentes do Copilot, Cursor agent e similares) não são permitidas. Se identificado, a nota do trabalho será zero.
- Linhas da tabela sem a respectiva print serão consideradas **ERROS** do grupo.

O modelo de dúvidas tiradas com a assistencia de IA deverão ter o seguinte formato:

| Data | Ferramenta | Etapa | Arquivo(s) afetado(s) | Motivo do uso e erro antes do uso | O que foi feito com a resposta | Link ou print |
|---|---|---|---|---|---|---|
| 2026-11-05 | ChatGPT | Estrutura HTML | site/index.html | Dúvida sobre a diferença entre `section` e `div`; a página tinha tudo dentro de `div`, o que dificultava ler a estrutura | Reorganizei o cabeçalho e as seções da página e testei no navegador | prints/ia-01.png |
| 2026-11-12 | Meta AI | Responsividade | site/css/estilo.css | O menu sumia no celular e não sabíamos como adaptar o layout; tentamos ajustar larguras fixas sem sucesso | Entendi o uso de `@media` e escrevi a regra do menu hambúrguer por conta própria | prints/ia-02.png |
| 2026-11-19 | Gemini | Validação do formulário | site/js/main.js | O envio aceitava campos vazios e e-mail inválido; não tínhamos certeza de como validar em JavaScript | Não usei o trecho sugerido; implementei a validação com `required` no HTML e revisei a lógica com o professor | prints/ia-03.png |



| Data | Ferramenta | Etapa | Arquivo(s) afetado(s) | Motivo do uso e erro antes do uso | O que foi feito com a resposta | Link ou print |
|---|---|---|---|---|---|---|
| | | | | | | prints/ia-01.png |
| | | | | | | prints/ia-02.png |
| | | | | | | prints/ia-03.png |
| | | | | | | prints/ia-04.png |
| | | | | | | prints/ia-05.png |
| | | | | | | prints/ia-06.png |
| | | | | | | prints/ia-07.png |
| | | | | | | prints/ia-08.png |
| | | | | | | prints/ia-09.png |
| | | | | | | prints/ia-10.png |
| | | | | | | prints/ia-11.png |
| | | | | | | prints/ia-12.png |
| | | | | | | prints/ia-13.png |
| | | | | | | prints/ia-14.png |
| | | | | | | prints/ia-15.png |
| | | | | | | prints/ia-16.png |
| | | | | | | prints/ia-17.png |
| | | | | | | prints/ia-18.png |
| | | | | | | prints/ia-19.png |
| | | | | | | prints/ia-20.png |
| | | | | | | prints/ia-21.png |
| | | | | | | prints/ia-22.png |
| | | | | | | prints/ia-23.png |
| | | | | | | prints/ia-24.png |
| | | | | | | prints/ia-25.png |
| | | | | | | prints/ia-26.png |
| | | | | | | prints/ia-27.png |
| | | | | | | prints/ia-28.png |
| | | | | | | prints/ia-29.png |
| | | | | | | prints/ia-30.png |
| | | | | | | prints/ia-31.png |
| | | | | | | prints/ia-32.png |
| | | | | | | prints/ia-33.png |
| | | | | | | prints/ia-34.png |
| | | | | | | prints/ia-35.png |
| Data | IA | Título / Assunto | Arquivo | Dúvida / Problema | Resposta / Solução | Print |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 2026-11-22 | ChatGPT | Correção do caminho do arquivo CSS | site/universo/teorias.html e site/css/teorias.css | Dúvida sobre o motivo de o arquivo CSS não estar sendo aplicado à página HTML. | Arrumei a  organização das pastas  desse jeito como orientado(site/css/ e site/universo/). | prints/ia-36.png |
| 2026-11-22 | ChatGPT | Imagem de fundo em uma div | site/css/teorias.css | Dúvida sobre como colocar uma imagem de fundo em uma div como se fosse um wallpaper. | Explicou o uso da propriedade CSS background-image com um exemplo de estrutura HTML e CSS. | prints/ia-37.png |
| 2026-11-22 | ChatGPT | Caminho relativo da imagem no CSS | site/css/teorias.css | Dúvida sobre quantos níveis de pasta (../) usar no caminho da imagem de fundo. | Indicou o caminho correto (url("../../img/ImagemInicial.png")) voltando dois níveis a partir de site/css/ igual a 36. | prints/ia-38.png |
| 2026-11-22 | ChatGPT | Verificação de caminho de imagens no HTML | site/universo/teorias.html | Dúvida para confirmar se o caminho ../../img/ estava certo para três imagens na mesma pasta. | Confirmou que o caminho utilizado nas tags img estava correto para a estrutura de site/universo/ igual a 36. | prints/ia-39.png |
| 2026-11-22 | ChatGPT | Ajuste de tamanho e repetição de fundo | site/css/teorias.css | Problema com imagens de fundo se repetindo infinitamente e dúvidas sobre medidas de borda/espaçamento. | Orientou a não usar parágrafos vazios para espaçamento e usar background-repeat: no-repeat e background-size: cover coloque no repeat para a imagem ficar quieta no lugar e só expandi o px. | prints/ia-40.png |
| 2026-11-22 | ChatGPT | Erro no endereço de exibição de imagem | site/css/objetos.css | Problema com uma imagem (image 15.png) que não estava aparecendo na página. | Apontou um erro de digitação no caminho (img/image/15.png em vez de img/image 15.png) 36. | prints/ia-41.png |
| 2026-11-22 | ChatGPT | Alinhamento vertical de imagens | site/css/teorias.css | Dificuldade em posicionar três imagens uma embaixo da outra na lateral direita da página. | Explicou que a propriedade columns: 1 não serve para esse tipo de layout e sugeriu ajustar a estrutura CSS. | prints/ia-42.png |
| 2026-11-22 | Gemini | Melhoria de resolução e transição de imagem | img/ | Pedido para melhorar a qualidade (evitar pixelização) e escurecer o topo de uma imagem para fundir com o banner. | Gerou uma nova versão da imagem em alta resolução com o topo escurecido para transição suave. | prints/ia-43.png |
| 2026-11-23 | Gemini | Renderização e transição entre imagens de fundo | img/ | Pedido para renderizar duas imagens (evitar pixelização) e igualar o final de uma com o início da outra para criar transição. | Gerou as duas imagens em alta resolução com tons compatíveis nas bordas para formar uma transição contínua. | prints/ia-44.png |
| 2026-11-23 | ChatGPT | Rolagem interna ao clicar em imagem | site/index.html | Dúvida sobre como fazer a página rolar para uma seção mais abaixo ao clicar em uma imagem. | Explicou o uso de âncora HTML (<a href="#id">) envolvendo a tag <img> para navegar até a seção desejada. | prints/ia-45.png |
| 2026-11-23 | ChatGPT | Posicionamento da regra @media no CSS | site/css/ | Dúvida sobre onde inserir o @media no arquivo CSS para ajustar o tamanho de uma div no mobile. | Orientou a colocar o bloco @media no final do arquivo CSS, após os estilos padrão de desktop. | prints/ia-46.png |
| 2026-11-23 | ChatGPT | Exemplo prático de responsividade com @media | site/css/ | Continuação da dúvida sobre como aplicar media queries para adaptar a altura e o espaçamento no celular. | Forneceu o código CSS com @media (max-width: 768px) ajustando min-height e padding da classe. | prints/ia-47.png |
| | | | | | | prints/ia-48.png |
| | | | | | | prints/ia-49.png |
| 2026-11-23 | ChatGPT | Estrutura HTML do menu | site/index.html | Dúvida sobre como criar um botão que abrisse um menu de navegação. | Recebi uma estrutura HTML com botão e links para as páginas do site. | prints/ia-50.jpeg |
| 2026-11-23 | ChatGPT | Ocultar menu com CSS | site/css/estilo.css | O menu precisava ficar escondido inicialmente e aparecer somente após o clique. | Entendi o uso de `display: none` para esconder o menu. | prints/ia-51.jpeg |
| 2026-11-23 | ChatGPT | Seleção de elementos JavaScript | site/js/script.js | Dúvida sobre como identificar o botão e o menu no JavaScript. | Aprendi a utilizar `getElementById()` e `addEventListener()`. | prints/ia-52.jpeg |
| 2026-11-23 | ChatGPT | Abertura e fechamento do menu | site/js/script.js; site/css/estilo.css | O botão precisava controlar a abertura e o fechamento do menu. | Utilizei `classList.toggle()` para alternar a classe de abertura. | prints/ia-53.jpeg |
| 2026-11-23 | ChatGPT | Personalização do menu | site/css/estilo.css | O menu precisava combinar com a identidade visual do site. | Ajustei as cores, bordas, espaçamentos e fontes conforme as orientações. | prints/ia-54.jpeg |
| 2026-11-23 | ChatGPT | Posicionamento CSS | site/css/estilo.css | Dúvidas sobre as propriedades necessárias para posicionar o menu. | Entendi o funcionamento de `position`, `top`, `right` e `flex-direction`. | prints/ia-55.jpeg |
| 2026-11-23 | ChatGPT | Análise do CSS | site/css/estilo.css | O posicionamento do menu precisava ser conferido. | Apresentei o código para análise e identificação dos ajustes necessários. | prints/ia-56.jpeg |
| 2026-11-23 | ChatGPT | Correção de seletores CSS | site/css/estilo.css | O seletor utilizado para abrir o menu estava incorreto. | Corrigi o seletor para `.menu.aberto` e ajustei o posicionamento. | prints/ia-57.jpeg |
| 2026-11-23 | ChatGPT | Revisão do menu | site/css/estilo.css; site/js/script.js | Necessidade de conferir se o CSS e o JavaScript estavam funcionando juntos. | Recebi uma versão revisada dos códigos para realizar os testes. | prints/ia-58.jpeg |
| 2026-11-23 | ChatGPT | Carregamento JavaScript | site/index.html; site/js/script.js | Dúvidas sobre o carregamento correto do arquivo JavaScript. | Recebi orientações sobre o atributo `defer` e os testes no navegador. | prints/ia-59.jpeg |
| 2026-11-23 | ChatGPT | Diagnóstico do posicionamento | site/css/estilo.css | O menu estava aparecendo do lado oposto ao botão. | Identifiquei a necessidade de ajustar a referência de posicionamento. | prints/ia-60.jpeg |
| 2026-11-23 | ChatGPT | Organização da estrutura HTML | site/index.html; site/css/estilo.css | O menu precisava ser posicionado em relação ao botão, e não à navbar inteira. | Recebi a orientação de agrupar o botão e o menu em uma `div.menu-container`. | prints/ia-61.jpeg |
| 2026-11-23 | ChatGPT | Ajuste final do posicionamento | site/css/estilo.css | O menu ainda precisava aparecer abaixo do botão e alinhado à esquerda. | Ajustei as propriedades `top: 100%` e `left: 0`. | prints/ia-62.jpeg |
| 2026-11-23 | ChatGPT | Personalização dos links | site/css/estilo.css | Os links apresentavam sublinhado e cores padrão do navegador. | Aprendi a utilizar `text-decoration: none`, `color` e `:hover`. | prints/ia-63.jpeg |





