---
titulo: Projeto final - Laboratório de Programação 2 (Web)
descricao: Site sobre o Universo, sendo o Fábio Antônio, o Gabriel Pereira e o Pedro Saito os integrantes; link do site publicado;  https://www.figma.com/design/BJQJBWmNrv9icn4NwkoZTv/Site-Universo?node-id=0-1&t=IvgQlOumb2xZPcTC-1;  Organização do Repositório -> Home, Tipos de Astros, Teorias, Missões, Objetos usados para estudo e Sistema Solar;  
autores: Fábio Antônio Nunes, Gabriel Pereira Dias, Pedro Augusto de Castro Saito.
versao: v1.0
ultima_atualizacao: 08/11/2026, no Figma.
arquivos_relacionados: CHANGELOG.md, docs/uso-de-IA.md, docs/versoes/v1.0-final.md
---

# Site Universo

Um site que propõe diferentes tópicos sobre o universo em si, com o objetivo principal sendo a exposição de informações, teorias e curiosidades desse mesmo tema para pesquisadores e curiosos na internet.

## Integrantes

| Nome | Onde atuou no projeto? (Mínimo de 3 frentes diferentes para cada aluno) |
|---|---|
| Fábio Antônio Nunes | Figma,  |
| Gabriel Pereira Dias | Figma,  |
| Pedro Augusto de Castro Saito | Atualização da documentação do github, Figma, |

## Links

- **Site publicado (GitHub Pages):** [https://USUARIO.github.io/projeto-final-lp2/](https://USUARIO.github.io/projeto-final-lp2/)
- **Protótipo no Figma:** https://www.figma.com/design/BJQJBWmNrv9icn4NwkoZTv/Site-Universo?node-id=0-1&t=3dnTa4LgGuDGx3AO-1
- **Apresentação:** [link dos slides]

## Estrutura do repositório

| Caminho | Conteúdo |
|---|---|
| `site/` | Código do site: `index.html`, `css/estilo.css`, `js/main.js` e `assets/img/` |
| `docs/` | Escopo (`escopo.md`), documentação do Figma (`figma.md`), uso de IA (`uso-de-IA.md`) e versões (`versoes/`) |
| `docs/versoes/` | Registro do estado do projeto em cada versão (`v0.1-inicio.md` e `v1.0-final.md`) |
| `prints/` | Capturas de testes e explicações sobre elas (`explicacao.md`) |
| `CHANGELOG.md` | Histórico de mudanças por versão |

## Versões

| Tag | Marco | Documento |
|---|---|---|
| `v0.1` | Início do projeto | [docs/versoes/v0.1-inicio.md](docs/versoes/v0.1-inicio.md) |
| `v1.0` | Entrega final | [docs/versoes/v1.0-final.md](docs/versoes/v1.0-final.md) |

## Uso de IA

O uso de chatbot para tirar dúvidas está registrado em [docs/uso-de-IA.md](docs/uso-de-IA.md). Ferramentas que editam o repositório ou geram código de forma autônoma não foram utilizadas.

**HTML**

<footer>
        <div id="card-logo">
            <p id="frase-card-logo">Conheça o Universo</p>
            <img id="img-card-logo" src="img/home/Terra-com-meteoro.png" alt="logo">
        </div>
        <div id="texto-logo">
        <div id="texto-do-texto-logo">
        <p class="frase">Conheça os desenvolvedores</p>
        <p class="frase" >Fábio Antônio Nunes</p>
        <p class="frase">Gabriel Pereira Dias</p>
        <p class="frase">Pedro de Castro Saito</p>
        </div>
        <div id="botão-do-texto-logo">
        <p>SAIBA MAIS</p>
 
        </div>
        </div>
    </footer>

  **CSS PARA Computador**

    footer{
    padding: 100px;
    background-color: #111C35;
    display: flex;
    flex-direction: row;
    gap: 300px;
    justify-content: space-around;
}
#card-logo{
    background-color: #5267D9;
    height: 300px;
    min-width: 361px;
    text-align: center;
    border: #9875E8 solid 3px;
}
#frase-card-logo{
    font-family: Jura, sans-serif;
    color: #FFFFFF;
    font-size: 36px;
    text-align: center;
}
#texto-do-texto-logo{
    font-family: Jura, sans-serif;
    font-size: 20px;
    color: #FFFFFF;
}

.frase{
    display: flex;
    flex-direction: column;
}
#botão-do-texto-logo{
    width: 186px;
    height: 47px;
    background-color: #AAB4D0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-family: Jura, sans-serif;
    font-size: 20px;
}

**Css para Mobile**

footer{
    padding: 30px 20px 50px 20px;
    background-color: #111C35;
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
    justify-content: space-around;
}
#card-logo{
    background-color: #5267D9;
    height: 300px;
    min-width: 300px;
    text-align: center;
    border: #9875E8 solid 3px;
}
#frase-card-logo{
    font-family: Jura, sans-serif;
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;
}
#texto-do-texto-logo{
    font-family: Jura, sans-serif;
    font-size: 20px;
    color: #FFFFFF;
}

.frase{
    display: flex;
    flex-direction: column;
}
#botão-do-texto-logo{
    width: 186px;
    height: 47px;
    background-color: #AAB4D0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-family: Jura, sans-serif;
    font-size: 20px;
}
