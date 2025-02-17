let nomeJogador = "Arthas"; 
console.log(nomeJogador); 

let moedas = 5; 
let vidas = 3;
console.log("O herói tem " + moedas + " moedas e " + vidas + " vidas.");

let nivel = 1; 
console.log(typeof nivel); 

let ataque = 20;  
let defesa = 15;  

let dano = ataque - defesa; 

console.log("O dano causado ao inimigo é: " + dano); 

let hp = prompt("Informe o HP do personagem:"); 
hp = Number(hp); 

if (hp > 0) {
    console.log("O herói está vivo.");
} else {
    console.log("O herói está morto.");
}

let nivel2 = 15; 

if (nivel2 >= 1 && nivel2 <= 10) {
    console.log("Fácil");
} else if (nivel2 >= 11 && nivel2 <= 20) {
    console.log("Normal");
} else if (nivel2 >= 21) {
    console.log("Difícil");
}

let contador = 5; 

while (contador >= 0) {
    console.log(contador); 
    contador--; 
}
console.log("Batalha iniciada!");

let inimigos = ["Goblin", "Orc", "Troll"]; 

for (let i = 0; i < inimigos.length; i++) { 
    console.log(inimigos[i]);
}

function calcularDano(ataque, defesa) {
    return ataque - defesa; 
}

let ataque2 = 20;  
let defesa2 = 10;  

let dano2 = calcularDano(ataque2, defesa2); 

console.log("Dano causado ao inimigo: " + dano2); 

let inventario = ["Espada", "Poção", "Escudo"];

console.log("Primeiro item: " + inventario[0]); 
console.log("Último item: " + inventario[inventario.length - 1]); 

let inventario2 = ["Espada", "Poção", "Escudo"];

function verificarItem(item) {
    return inventario2.includes(item); 
}

console.log(verificarItem("Espada")); 
console.log(verificarItem("Arco"));  

let inventario3 = ["Espada", "Poção", "Escudo"]; 

inventario3.push("Armadura");
inventario3.shift();
console.log(inventario3);

let personagem = {
    nome: "Arthas",   
    nivel: 10,      
    hp: 100,         

    
    status: function() {
        console.log(`O herói ${this.nome} está no nível ${this.nivel} e tem ${this.hp} pontos de vida.`);
    }
};

personagem.status();
