"use strict";

// Função síncrona que executa um laço extremamente pesado
function funcaoMuitoPesada() {
  let execucoes = 0; // Variável para contar execuções
  for (let i = 0; i < 1000000000; i++) {
    execucoes++; // Incrementa o contador
  }
  return execucoes; // Retorna o número total de execuções
}

// Criação de uma Promise que simula a mesma função acima, mas de forma assíncrona
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execucoes = 0; // Variável para contar execuções
    for (let i = 0; i < 1000000000; i++) {
      execucoess++; // ERRO: variável escrita incorretamente, deveria ser "execucoes++"
    }
    resolve(execucoes); // Se der tudo certo, a Promise é resolvida
  } catch (e) {
    reject('Deu erro na iteração dos números'); // Se der erro, a Promise é rejeitada
  }
});

// Função que retorna uma Promise que simula um login com atraso de 3 segundos
const promiseComParametros = (login, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula sucesso no login após 3 segundos
      resolve(`Logado com o usuário: ${login}`);
    }, 3000);
  });
};

// Função principal assíncrona que orquestra as chamadas
async function execucaoPrincipal() {
  console.log("inicio"); // Indica o início da execução

  // Chamada da função de login com "then", sem usar await
  promiseComParametros('gian@gmail.com', 123456).then(resultado => {
    console.log(resultado); // Exibe o resultado do login após 3 segundos
  });
  try {
    // Aguarda a execução da função muito pesada com await
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado); // Exibe o número de execuções, se não houver erro
  } catch (e) {
    console.log(e); // Exibe o erro caso a Promise falhe
  }
  console.log("fim"); // Indica o fim da execução (isso será impresso *antes* do login, por causa da ordem assíncrona)
}

// Chama a função principal
execucaoPrincipal();