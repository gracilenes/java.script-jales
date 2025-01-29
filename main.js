// main.js
// Função que exibe um alerta
function exibirAlerta() {
    alert("Olá! O script foi carregado com sucesso.");
}
// Chamando a função assim que o script for carregado
exibirAlerta();

let nomeJogador = "Arthas";
console.log(nomeJogador);

let moedas = 5;
let vidas = 3;

console.log(`O herói tem ${moedas} moedas e ${vidas} vidas.`);

let nivel = 1;
console.log(typeof nivel);

let ataque = 20;
let defesa = 15;
let dano = ataque - defesa;

console.log(`O dano causado ao inimigo é ${dano}.`);

let hp = prompt("Informe o HP do personagem:");

hp = Number(hp); // Convertendo o valor para número, pois o prompt retorna uma string

if (hp > 0) {
    console.log("O herói está vivo.");
} else {
    console.log("O herói está morto.");
}

// Função para determinar a dificuldade com base no nível
function determinarDificuldade(nivel) {
    if (nivel >= 1 && nivel <= 10) {
        console.log("Dificuldade: Fácil");
    } else if (nivel >= 11 && nivel <= 20) {
        console.log("Dificuldade: Normal");
    } else if (nivel >= 21) {
        console.log("Dificuldade: Difícil");
    } else {
        console.log("Nível inválido");
    }
}

// Exemplo de níveis
let nivelJogador = 15; // Você pode alterar esse valor para testar com diferentes níveis

// Chama a função para determinar a dificuldade
determinarDificuldade(nivelJogador);

// Definindo a contagem regressiva
let contador = 5;

// Loop while para a contagem regressiva
while (contador > 0) {
    console.log(contador);  // Exibe o número atual da contagem
    contador--;  // Decrementa o contador
}

// Quando o contador atingir 0, exibe a mensagem "Batalha iniciada!"
console.log("Batalha iniciada!");

// Definindo o array de inimigos da primeira fase
let inimigos = ["Goblin", "Orc", "Troll"];

// Usando um loop for para exibir os nomes dos inimigos
for (let i = 0; i < inimigos.length; i++) {
    console.log(inimigos[i]);  // Exibe o nome do inimigo no console
}

// Função para calcular o dano
function calcularDano(ataque, defesa) {
    let dano = ataque - defesa;

    // Garantir que o dano não seja negativo
    if (dano < 0) {
        dano = 0;
    }

    return dano;  // Retorna o dano calculado
}

// Exemplo de valores de ataque e defesa
let ataqueJogador = 15;  // Ataque do jogador
let defesaInimigo = 10;  // Defesa do inimigo

// Calculando o dano causado ao inimigo
let dano = calcularDano(ataqueJogador, defesaInimigo);

// Exibindo o dano no console
console.log("Dano causado no inimigo:", dano);

let inventário = ["Espada", "Poção", "Escudo"];

// Exibindo o primeiro item
console.log("Primeiro item:", inventário[0]);

// Exibindo o último item
console.log("Último item:", inventário[inventário.length - 1]);

let inventário = ["Espada", "Poção", "Escudo"];

function verificarItem(item) {
    return inventário.includes(item);
}

// Testando a função
console.log(verificarItem("Espada")); // true
console.log(verificarItem("Cajado")); // false

let inventário = ["Espada", "Poção", "Escudo"];

// Adicionando "Armadura" ao final
inventário.push("Armadura");

// Removendo o primeiro item (Espada)
inventário.shift();

// Exibindo o inventário atualizado
console.log(inventário);

["Poção", "Escudo", "Armadura"]

let personagem = {
    nome: "Aragon",
    nivel: 10,
    hp: 100,
    status: function() {
        console.log(`O herói ${this.nome} está no nível ${this.nivel} e tem ${this.hp} pontos de vida.`);
    }
};

// Chamando o método status
personagem.status();
