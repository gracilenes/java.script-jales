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


// fazer a questão 6