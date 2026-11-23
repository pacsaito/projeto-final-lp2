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




Data	Ferramenta	Etapa	Arquivo(s) →	Motivo do uso e erro antes do uso	O que foi feito com a resposta	Link ou impressão
23/11/2026	ChatGPT	Estrutura HTML do menu	site/index.html	Dúvida sobre como criar um botão que abrisse um menu com links de navegação.	Recebi a estrutura HTML com botão e links para as páginas do site.	prints/ia-50.jpeg
23/11/2026	ChatGPT	Ocultar menu com CSS	site/css/estilo.css	O menu precisava começar escondido e aparecer somente após clicar no botão.	Aprendi a utilizar display: none para esconder o menu.	prints/ia-51.jpeg
23/11/2026	ChatGPT	Seleção de elementos JavaScript	site/js/script.js	Dúvida sobre como identificar o botão e o menu no JavaScript.	Aprendi a utilizar getElementById() e addEventListener().	prints/ia-52.jpeg
23/11/2026	ChatGPT	Abertura e fechamento do menu	site/js/script.js; site/css/estilo.css	Necessidade de fazer o botão abrir e fechar o menu.	Utilizei a orientação sobre classList.toggle() e a classe .aberto.	prints/ia-53.jpeg
23/11/2026	ChatGPT	Personalização do menu	site/css/estilo.css	O menu precisava combinar com a identidade visual do site.	Recebi orientações para personalizar cores, bordas, espaçamentos e fontes.	prints/ia-54.jpeg
23/11/2026	ChatGPT	Propriedades de posicionamento CSS	site/css/estilo.css	Dúvidas sobre propriedades necessárias para posicionar o menu corretamente.	Consultei as explicações sobre position, top, right e flex-direction.	prints/ia-55.jpeg
23/11/2026	ChatGPT	Análise do código CSS	site/css/estilo.css	Apresentei meu código CSS para verificar se o posicionamento estava correto.	A IA analisou a estrutura e identificou ajustes necessários.	prints/ia-56.jpeg
23/11/2026	ChatGPT	Correção de seletores CSS	site/css/estilo.css	O seletor utilizado para abrir o menu estava incorreto e havia um valor de posicionamento inadequado.	Corrigi o seletor para .menu.aberto e o valor de right.	prints/ia-57.jpeg
23/11/2026	ChatGPT	Revisão do menu completo	site/css/estilo.css; site/js/script.js	Necessidade de conferir se o CSS e o JavaScript estavam funcionando juntos.	Recebi uma versão revisada dos códigos para testar o funcionamento.	prints/ia-58.jpeg
23/11/2026	ChatGPT	Testes e carregamento JavaScript	site/index.html; site/js/script.js	Dúvidas sobre o carregamento do JavaScript e como testar a abertura do menu.	Recebi orientações sobre defer e testes no navegador.	prints/ia-59.jpeg
23/11/2026	ChatGPT	Diagnóstico do posicionamento	site/css/estilo.css	O menu estava aparecendo do lado oposto ao botão.	Identifiquei que precisava criar uma referência de posicionamento para o menu.	prints/ia-60.jpeg
23/11/2026	ChatGPT	Organização da estrutura HTML	site/index.html; site/css/estilo.css	O menu precisava ficar alinhado ao botão, e não ao tamanho inteiro da navbar.	Adicionei a orientação de agrupar o botão e o menu em uma div.menu-container.	prints/ia-61.jpeg
23/11/2026	ChatGPT	Ajuste final do posicionamento	site/css/estilo.css	O menu ainda precisava aparecer diretamente abaixo do botão e alinhado à esquerda.	Ajustei as propriedades top: 100% e left: 0.	prints/ia-62.jpeg
23/11/2026	ChatGPT	Aparência dos links	site/css/estilo.css	Os links estavam com sublinhado e cores padrão do navegador.	Recebi orientações para utilizar text-decoration: none, color e :hover.	prints/ia-63.jpeg



