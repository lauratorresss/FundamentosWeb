//Questão 01 

const nomeInput = document.getElementById('nomeInput');
const btnFormat = document.getElementById('btnFormat');
const resultadoOutput = document.getElementById('resultadoOutput');

function padronizarNome(texto) {
    return texto.trim().toLowerCase();
}

btnFormat.addEventListener('click', function() {
    const textoEntrada = nomeInput.value;
    const textoFormatado = padronizarNome(textoEntrada);
    
    resultadoOutput.innerText = textoFormatado;
    console.log("Resultado:", textoFormatado);
});

//Questão 02

const emailInput = document.getElementById('emailInput');
    const btnVerificarEmail = document.getElementById('btnVerificarEmail');
    const resultadoEmailOutput = document.getElementById('resultadoEmailOutput');

    function verificarDominioEmail(email) {
        if (email.endsWith("@exemplo.com")) {
            return "E-mail válido";
        } else {
            return "E-mail inválido";
        }
    }

    if (btnVerificarEmail) {
        btnVerificarEmail.addEventListener('click', function () {
            const emailDigitado = emailInput.value.trim();
            const resultado = verificarDominioEmail(emailDigitado);
            
            resultadoEmailOutput.innerText = resultado;
            console.log("Resultado:", resultado);
        });
    }

//Questão 3 
    const fraseContagemInput = document.getElementById('fraseContagemInput');
    const btnContarCaracteres = document.getElementById('btnContarCaracteres');
    const resultadoContagemOutput = document.getElementById('resultadoContagemOutput');

    function contarCaracteres(frase) {
        const total = frase.length;
        const semEspacos = frase.replaceAll(" ", "").length;
        return `Total: ${total}\nSem espaços: ${semEspacos}`;
    }

    if (btnContarCaracteres) {
        btnContarCaracteres.addEventListener('click', function () {
            const fraseDigitada = fraseContagemInput.value;
            const resultado = contarCaracteres(fraseDigitada);
            
            resultadoContagemOutput.innerText = resultado;
            console.log("Resultado:\n" + resultado);
        });
    }

//Questão 4
    const mensagemBuscaInput = document.getElementById('mensagemBuscaInput');
    const btnBuscarPalavra = document.getElementById('btnBuscarPalavra');
    const resultadoBuscaOutput = document.getElementById('resultadoBuscaOutput');

    function buscarJavaScript(mensagem) {
        if (mensagem.includes("JavaScript")) {
            return "A mensagem contém JavaScript.";
        } else {
            return "A mensagem não contém JavaScript.";
        }
    }

    if (btnBuscarPalavra) {
        btnBuscarPalavra.addEventListener('click', function () {
            const mensagemDigitada = mensagemBuscaInput.value;
            const resultado = buscarJavaScript(mensagemDigitada);
            
            resultadoBuscaOutput.innerText = resultado;
            console.log("Resultado:", resultado);
        });
    }

//Questão 5
    const emailExtracaoInput = document.getElementById('emailExtracaoInput');
    const btnExtrairUsuario = document.getElementById('btnExtrairUsuario');
    const resultadoExtracaoOutput = document.getElementById('resultadoExtracaoOutput');

    function extrairUsuario(email) {
        const posicaoArroba = email.indexOf("@");
        if (posicaoArroba !== -1) {
            return email.slice(0, posicaoArroba);
        }
        return email;
    }

    if (btnExtrairUsuario) {
        btnExtrairUsuario.addEventListener('click', function () {
            const emailDigitado = emailExtracaoInput.value.trim();
            const usuario = extrairUsuario(emailDigitado);
            
            resultadoExtracaoOutput.innerText = usuario;
            console.log("Resultado:", usuario);
        });
    }

// Questão 6

    const mensagemSubstituicaoInput = document.getElementById('mensagemSubstituicaoInput');
    const btnSubstituirInformacoes = document.getElementById('btnSubstituirInformacoes');
    const resultadoSubstituicaoOutput = document.getElementById('resultadoSubstituicaoOutput');

    function substituirNome(texto) {
        return texto.replaceAll("João", "Maria");
    }

    if (btnSubstituirInformacoes) {
        btnSubstituirInformacoes.addEventListener('click', function () {
            const textoDigitado = mensagemSubstituicaoInput.value;
            const resultado = substituirNome(textoDigitado);
            resultadoSubstituicaoOutput.innerText = resultado;
            console.log("Resultado:", resultado);
        });
    }


// Questão 7

    const codigoProdutoInput = document.getElementById('codigoProdutoInput');
    const btnFormatarcodigo = document.getElementById('btnFormatarcodigo');
    const resultadoCodigoOutput = document.getElementById('resultadoCodigoOutput');

    function formatarCodigo(codigo) {
        const codigoMaiusculo = codigo.toUpperCase();
        const letras = codigoMaiusculo.slice(0, 3);
        const numeros = codigoMaiusculo.slice(3);
        return `${letras}-${numeros}`;
    }

    if (btnFormatarcodigo) {
        btnFormatarcodigo.addEventListener('click', function () {
            const codigoDigitado = codigoProdutoInput.value.trim();
            const resultado = formatarCodigo(codigoDigitado);
            resultadoCodigoOutput.innerText = resultado;
            console.log("Resultado:", resultado);
        });
    }

// Questão 8

    const palavraInversaoInput = document.getElementById('palavraInversaoInput');
    const btnInverterString = document.getElementById('btnInverterString');
    const resultadoInversaoOutput = document.getElementById('resultadoInversaoOutput');

    function inverterString(str) {
        return str.split("").reverse().join("");
    }

    if (btnInverterString) {
        btnInverterString.addEventListener('click', function () {
            const palavraDigitada = palavraInversaoInput.value;
            const resultado = inverterString(palavraDigitada);
            resultadoInversaoOutput.innerText = resultado;
            console.log("Resultado:", resultado);
        });
    }


// Questão 9

    const senhaAnáliseInput = document.getElementById('senhaAnáliseInput');
    const btnAnalisarSenha = document.getElementById('btnAnalisarSenha');
    const resultadoSenhaOutput = document.getElementById('resultadoSenhaOutput');

    function analisarSenha(senha) {
        const temTamanhoMinimo = senha.length >= 8;
        const temMaiuscula = /[A-Z]/.test(senha);
        const temMinuscula = /[a-z]/.test(senha);
        const temNumero = /[0-9]/.test(senha);

        return temTamanhoMinimo && temMaiuscula && temMinuscula && temNumero;
    }

    if (btnAnalisarSenha) {
        btnAnalisarSenha.addEventListener('click', function () {
            const senhaDigitada = senhaAnáliseInput.value;
            const ehValida = analisarSenha(senhaDigitada);
            resultadoSenhaOutput.innerText = ehValida;
            console.log("Resultado:", ehValida);
        });
    }

//Questão 10

    const nomeCompletoInput = document.getElementById('nomeCompletoInput');
    const btnFormatarNomeCompleto = document.getElementById('btnFormatarNomeCompleto');
    const resultadoNomeCompletoOutput = document.getElementById('resultadoNomeCompletoOutput');

    function formatarNomeCompleto(nome) {
        return nome
            .trim()
            .split(/\s+/) // Separa eliminando múltiplos espaços entre as palavras
            .map(palavra => {
                const min = palavra.toLowerCase();
                return min.charAt(0).toUpperCase() + min.slice(1);
            })
            .join(" ");
    }

    if (btnFormatarNomeCompleto) {
        btnFormatarNomeCompleto.addEventListener('click', function () {
            const nomeDigitado = nomeCompletoInput.value;
            const resultado = formatarNomeCompleto(nomeDigitado);
            resultadoNomeCompletoOutput.innerText = resultado;
            console.log("Resultado:", resultado);
        });
    }