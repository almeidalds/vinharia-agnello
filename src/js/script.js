
// prompt() retorna texto.
let nomeVinho = prompt("Digite o nome do vinho:");
let tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
let safraVinho = prompt("Digite a safra do vinho (ano):");
let quantidadeEstoque = prompt("Digite a quantidade de garrafas em estoque:");

alert("Cadastro realizado! Veja os detalhes no console.");

console.log(
    "VINHERIA AGNELLO — CADASTRO DE VINHO\n" +
    "----------------------------------\n" +
    "Nome do vinho: " + nomeVinho + "\n" +
    "Tipo: " + tipoVinho + "\n" +
    "Safra: " + safraVinho + "\n" +
    "Quantidade em estoque: " + quantidadeEstoque + " garrafas\n" +
    "----------------------------------"
);
