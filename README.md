# Vinheria Agnello

Projeto de apresentação da Vinheria Agnello e sistema básico de cadastro de vinhos. O site possui cinco páginas, estilos compartilhados e um cadastro com nome, tipo, safra e quantidade em estoque, exibido no console do navegador.

## Integrantes

- Pedro Henrique Gomes Rodrigues
- Francisco Carlos Rocha de Almeida Junior
- Daniel de Oliveira Zuin
- Gabriel Almeida Areal

## GitHub Pages

https://github.com/almeidalds/vinharia-agnello.git

## Como executar

1. Extraia o projeto e abra `index.html` no navegador.
2. Responda aos quatro prompts e confirme o aviso de cadastro.
3. Abra o console (Ctrl + Shift + J no Chrome/Edge para Windows) para conferir os dados.
4. Navegue pelo menu para visitar história, produtos, contato e galeria.
5. Recarregue a página inicial para realizar outro cadastro.

Não exige instalação de bibliotecas. 
As fontes do Google dependem de internet; há fontes alternativas locais. 
Imagens e vídeo são arquivos locais!

## Estrutura

```projeto
index.html
README.md
src/
    css/style.css
    js/
    script.js
    video-fundo.js
    pages/
        historia.html
        produtos.html
        contato.html
        galeria.html
    assets/
        imgs/
        videos/vinho-fundo.mp4
```

## Tecnologias e funcionamento

- HTML semântico: cabeçalho, menu, conteúdo principal, rodapé, tabela, formulário, imagens e vídeo usado como plano de fundo da área inicial.
- CSS: cores vinho e creme, estilos de formulário e galeria, adaptação para telas pequenas e foco visível ao navegar pelo teclado.
- JavaScript básico: variáveis, concatenação, `prompt()`, `alert()` e `console.log()`.

O JavaScript está ao final do body apenas na página inicial. Faz quatro perguntas, apresenta exatamente “Cadastro realizado! Veja os detalhes no console.” e depois exibe os dados em uma única saída organizada. Os valores permanecem como texto; não há validação, cálculos, armazenamento persistente ou banco de dados. Um campo vazio permanece vazio e Cancelar retorna `null`, sem interromper as perguntas seguintes. A tabela da página de produtos é estática.

## Contato e galeria

O formulário de contato é um modelo HTML demonstrativo: os campos podem ser preenchidos e limpos, mas o botão de envio fica desativado porque não há serviço de recebimento de mensagens. Há política de privacidade fictícia. Foram usados rótulos associados aos campos, tipos de entrada apropriados e agrupamento de opções.

A galeria inclui seis imagens e links para os arquivos originais para que seja possível expandi-la em tela cheia. 
