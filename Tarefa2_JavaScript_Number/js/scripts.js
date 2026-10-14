document.addEventListener('DOMContentLoaded', function () {

    // EXERCÍCIO 1: 
    const valorArredondarInput = document.getElementById('valorArredondarInput');
    const btnArredondar = document.getElementById('btnArredondar');
    const resultadoArredondarOutput = document.getElementById('resultadoArredondarOutput');

    function arredondarNumero(valor) {
        const num = Number(valor);
        if (Number.isNaN(num)) return "Por favor, insira um número válido.";

        const proximo = Math.round(num);
        const baixo = Math.floor(num);
        const cima = Math.ceil(num);

        return `${proximo}\n${baixo}\n${cima}`;
    }

    if (btnArredondar) {
        btnArredondar.addEventListener('click', function () {
            const valor = valorArredondarInput.value;
            const res = arredondarNumero(valor);
            resultadoArredondarOutput.innerText = res;
            console.log("Resultado:\n" + res);
        });
    }

    // EXERCÍCIO 2
    const precoInput = document.getElementById('precoInput');
    const btnFormatCasasDecimais = document.getElementById('btnFormatCasasDecimais');
    const resultadoCasasDecimaisOutput = document.getElementById('resultadoCasasDecimaisOutput');

    function formatarPreco(preco) {
        const num = Number(preco);
        if (Number.isNaN(num)) return "Por favor, insira um número válido.";

        const precoString = num.toFixed(2);
        const precoNumero = Number(precoString);

        return `${precoString} (Convertido para Number: ${precoNumero})`;
    }

    if (btnFormatCasasDecimais) {
        btnFormatCasasDecimais.addEventListener('click', function () {
            const preco = precoInput.value;
            const res = formatarPreco(preco);
            resultadoCasasDecimaisOutput.innerText = res;
            console.log("Resultado:", res);
        });
    }

    // EXERCÍCIO 3
    const valor1Input = document.getElementById('valor1Input');
    const valor2Input = document.getElementById('valor2Input');
    const btnCalcularOperacoes = document.getElementById('btnCalcularOperacoes');
    const resultadoOperacoesOutput = document.getElementById('resultadoOperacoesOutput');

    function calcularOperacoes(v1Str, v2Str) {
        const v1 = Number(v1Str);
        const v2 = Number(v2Str);

        if (Number.isNaN(v1) || Number.isNaN(v2)) {
            return "Por favor, insira valores numéricos válidos.";
        }

        const soma = v1 + v2;
        const diferenca = v1 - v2;
        const produto = v1 * v2;
        const quociente = v2 !== 0 ? (v1 / v2) : "Divisão por zero";

        return `Soma: ${soma}\nDiferença: ${diferenca}\nProduto: ${produto}\nQuociente: ${quociente}`;
    }

    if (btnCalcularOperacoes) {
        btnCalcularOperacoes.addEventListener('click', function () {
            const v1 = valor1Input.value;
            const v2 = valor2Input.value;
            const res = calcularOperacoes(v1, v2);
            resultadoOperacoesOutput.innerText = res;
            console.log("Resultado:\n" + res);
        });
    }

    // EXERCÍCIO 4
    const valorValidarInput = document.getElementById('valorValidarInput');
    const btnValidarNumero = document.getElementById('btnValidarNumero');
    const resultadoValidarOutput = document.getElementById('resultadoValidarOutput');

    function validarNumero(valor) {
        const num = Number(valor);

        if (valor.trim() !== "" && !Number.isNaN(num)) {
            return "Valor numérico válido";
        } else {
            return "Valor inválido";
        }
    }

    if (btnValidarNumero) {
        btnValidarNumero.addEventListener('click', function () {
            const val = valorValidarInput.value;
            const res = validarNumero(val);
            resultadoValidarOutput.innerText = res;
            console.log("Resultado:", res);
        });
    }

    // EXERCÍCIO 5
    const numeroInteiroInput = document.getElementById('numeroInteiroInput');
    const btnVerificarInteiro = document.getElementById('btnVerificarInteiro');
    const resultadoInteiroOutput = document.getElementById('resultadoInteiroOutput');

    function verificarInteiro(valor) {
        let valParaTestar = valor;
        
        if (typeof valor === 'string') {
            const convertido = Number(valor);
            if (!Number.isNaN(convertido) && valor.trim() !== "") {
                valParaTestar = convertido;
            } else {
                valParaTestar = NaN;
            }
        }

        if (Number.isInteger(valParaTestar)) {
            return "O número é inteiro.";
        } else {
            return "O número não é inteiro.";
        }
    }

    if (btnVerificarInteiro) {
        btnVerificarInteiro.addEventListener('click', function () {
            const val = numeroInteiroInput.value;
            const res = verificarInteiro(val);
            resultadoInteiroOutput.innerText = res;
            console.log("Resultado:", res);
        });
    }

    // EXERCÍCIO 6:
    const arrayNumerosInput = document.getElementById('arrayNumerosInput');
    const btnMaiorMenor = document.getElementById('btnMaiorMenor');
    const resultadoMaiorMenorOutput = document.getElementById('resultadoMaiorMenorOutput');

    function encontrarMaiorEMenor(arr) {
        const maior = Math.max(...arr);
        const menor = Math.min(...arr);

        return `Maior: ${maior}\nMenor: ${menor}`;
    }

    if (btnMaiorMenor) {
        btnMaiorMenor.addEventListener('click', function () {
            const listaStr = arrayNumerosInput.value;
            const numeros = listaStr.split(',').map(n => Number(n.trim())).filter(n => !Number.isNaN(n));

            if (numeros.length === 0) {
                resultadoMaiorMenorOutput.innerText = "Por favor, insira uma lista válida de números.";
                return;
            }

            const res = encontrarMaiorEMenor(numeros);
            resultadoMaiorMenorOutput.innerText = res;
            console.log("Resultado:\n" + res);
        });
    }

    // EXERCÍCIO 7:
    const btnGerarAleatorio = document.getElementById('btnGerarAleatorio');
    const resultadoAleatorioOutput = document.getElementById('resultadoAleatorioOutput');

    function gerarNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    if (btnGerarAleatorio) {
        btnGerarAleatorio.addEventListener('click', function () {
            const num = gerarNumero();
            resultadoAleatorioOutput.innerText = `Número gerado: ${num}`;
            console.log("Resultado:", num);
        });
    }


    // EXERCÍCIO 8:
    const notasInput = document.getElementById('notasInput');
    const btnCalcularMedia = document.getElementById('btnCalcularMedia');
    const resultadoMediaOutput = document.getElementById('resultadoMediaOutput');

    function calcularMedia(...notas) {
        if (notas.length === 0) return "0.00";
        const soma = notas.reduce((acc, curr) => acc + curr, 0);
        const media = soma / notas.length;
        return media.toFixed(2);
    }

    if (btnCalcularMedia) {
        btnCalcularMedia.addEventListener('click', function () {
            const listaNotasStr = notasInput.value;
            const notas = listaNotasStr.split(',').map(n => Number(n.trim())).filter(n => !Number.isNaN(n));

            if (notas.length === 0) {
                resultadoMediaOutput.innerText = "Por favor, insira notas válidas.";
                return;
            }

            const mediaFormatada = calcularMedia(...notas);
            resultadoMediaOutput.innerText = `Média: ${mediaFormatada}`;
            console.log("Resultado:", mediaFormatada);
        });
    }

    // EXERCÍCIO 9: 
    const btnExibirLimites = document.getElementById('btnExibirLimites');
    const resultadoLimitesOutput = document.getElementById('resultadoLimitesOutput');

    if (btnExibirLimites) {
        btnExibirLimites.addEventListener('click', function () {
            const maxSafe = Number.MAX_SAFE_INTEGER;
            const minSafe = Number.MIN_SAFE_INTEGER;
            const maxValue = Number.MAX_VALUE;

            const explicacaoDesafio = 
                `\n--- Explicação do Desafio ---\n` +
                `MAX_SAFE_INTEGER (${maxSafe}): É o maior número inteiro que o JS consegue representar sem perder a precisão em operações matemáticas.\n` +
                `MAX_VALUE (${maxValue}): É o maior valor absoluto em ponto flutuante que o JS consegue armazenar antes de considerar Infinity.`;

            const textoFinal = `1. Maior inteiro seguro: ${maxSafe}\n2. Menor inteiro seguro: ${minSafe}\n3. Maior valor numérico finito: ${maxValue}\n${explicacaoDesafio}`;

            resultadoLimitesOutput.innerText = textoFinal;
            console.log("Resultado:\n" + textoFinal);
        });
    }

    // EXERCÍCIO 10: 
    const valorAnaliseInput = document.getElementById('valorAnaliseInput');
    const btnAnalisarNumero = document.getElementById('btnAnalisarNumero');
    const btnAnalisarCasosTeste = document.getElementById('btnAnalisarCasosTeste');
    const resultadoAnaliseOutput = document.getElementById('resultadoAnaliseOutput');

    function analisarNumero(val) {
        let ehNumeroReal = typeof val === 'number' && !Number.isNaN(val);

        return {
            valor: val,
            ehNumero: ehNumeroReal,
            ehInteiro: Number.isInteger(val),
            ehFinito: Number.isFinite(val),
            ehSeguro: Number.isSafeInteger(val)
        };
    }

    if (btnAnalisarNumero) {
        btnAnalisarNumero.addEventListener('click', function () {
            let entrada = valorAnaliseInput.value.trim();
            let valorConvertido;

            if (entrada === "Infinity") valorConvertido = Infinity;
            else if (entrada === "-Infinity") valorConvertido = -Infinity;
            else if (entrada === "NaN") valorConvertido = NaN;
            else if (!isNaN(Number(entrada)) && entrada !== "") valorConvertido = Number(entrada);
            else valorConvertido = entrada;

            const objResultado = analisarNumero(valorConvertido);
            resultadoAnaliseOutput.innerText = JSON.stringify(objResultado, null, 2);
            console.log("Resultado:", objResultado);
        });
    }

    if (btnAnalisarCasosTeste) {
        btnAnalisarCasosTeste.addEventListener('click', function () {
            const casosTeste = [42, 42.5, "42", Infinity, NaN];
            const resultados = casosTeste.map(c => analisarNumero(c));
            
            resultadoAnaliseOutput.innerText = JSON.stringify(resultados, null, 2);
            console.log("Resultado:", resultados);
        });
    }

});