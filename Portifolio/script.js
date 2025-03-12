// Funções de exercícios...

// 1) Calcule a diferença entre 2 números
function calcularDiferenca() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let resultado = Math.abs(num1 - num2);
    document.getElementById("diferencaResultado").innerText = `A diferença é: ${resultado}`;
}

// 2) Verifique se um número é par
function verificarPar() {
    let numero = parseInt(prompt("Digite um número:"));
    let resultado = (numero % 2 === 0) ? "é par" : "não é par";
    document.getElementById("parResultado").innerText = `${numero} ${resultado}`;
}

// 3) Verifique se um número é múltiplo de outro
function verificarMultiplo() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let resultado = (num1 % num2 === 0) ? `${num1} é múltiplo de ${num2}` : `${num1} não é múltiplo de ${num2}`;
    document.getElementById("multiploResultado").innerText = resultado;
}

// 4) Converta uma temperatura de Celsius para Fahrenheit
function converterTemperatura() {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("temperaturaResultado").innerText = `${celsius}°C é igual a ${fahrenheit}°F`;
}

// 5) Calcule a área (base * altura)
function calcularArea() {
    let base = parseFloat(prompt("Digite a base do retângulo:"));
    let altura = parseFloat(prompt("Digite a altura do retângulo:"));
    let area = base * altura;
    document.getElementById("areaResultado").innerText = `A área é: ${area}`;
}

// 6) Verifique se a média das notas é maior que a média e se a nota é par
function verificarNotas() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let media = (nota1 + nota2) / 2;
    let resultado = (media >= 7) ? "A média é maior que 7" : "A média é menor que 7";
    document.getElementById("notasResultado").innerText = `${resultado}. A média foi ${media}`;
}

// 7) Calcule o IMC
function calcularIMC() {
    let peso = parseFloat(prompt("Digite seu peso (em kg):"));
    let altura = parseFloat(prompt("Digite sua altura (em metros):"));
    let imc = peso / (altura * altura);
    let classificacao = (imc < 18.5) ? "Abaixo do peso" : (imc < 24.9) ? "Peso normal" : (imc < 29.9) ? "Sobrepeso" : "Obesidade";
    document.getElementById("imcResultado").innerText = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`;
}

// 8) Verifique se um ano é bissexto
function verificarBissexto() {
    let ano = parseInt(prompt("Digite um ano:"));
    let bissexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
    let resultado = bissexto ? "É um ano bissexto" : "Não é um ano bissexto";
    document.getElementById("bissextoResultado").innerText = resultado;
}

// 9) Converta uma moeda com taxa de câmbio
function converterMoeda() {
    let valor = parseFloat(prompt("Digite o valor em reais:"));
    let taxa = 5.3; // Taxa de câmbio
    let resultado = valor * taxa;
    document.getElementById("moedaResultado").innerText = `R$${valor} é igual a U$${resultado.toFixed(2)}`;
}

// 10) Tabuada de um número
function tabuada() {
    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    let tabuadaStr = "";
    for (let i = 1; i <= 10; i++) {
        tabuadaStr += `${numero} x ${i} = ${numero * i}\n`;
    }
    document.getElementById("tabuadaResultado").innerText = tabuadaStr;
}

// 11) Jogo Pedra, Papel e Tesoura
function jogoPedraPapelTesoura() {
    let escolha = prompt("Escolha entre Pedra, Papel ou Tesoura:").toLowerCase();
    let opcoes = ["pedra", "papel", "tesoura"];
    let computador = opcoes[Math.floor(Math.random() * 3)];
    let resultado = "";
    
    if (escolha === computador) {
        resultado = "Empate!";
    } else if ((escolha === "pedra" && computador === "tesoura") ||
               (escolha === "papel" && computador === "pedra") ||
               (escolha === "tesoura" && computador === "papel")) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Você perdeu!";
    }

    document.getElementById("jogoResultado").innerText = `Você escolheu: ${escolha}. Computador escolheu: ${computador}. Resultado: ${resultado}`;
}

// 12) Calcule o Fatorial de um número
function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    document.getElementById("fatorialResultado").innerText = `O fatorial de ${numero} é: ${fatorial}`;
}
