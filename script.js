const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação",
      "Um framework de design",
    ],
    correta: 1,
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "variable nome = valor;",
      "var nome = valor;",
      "let nome = valor;",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do método 'document.getElementById()'?",
    respostas: [
      "Selecionar um elemento pelo nome da classe.",
      "Selecionar um elemento pelo ID.",
      "Selecionar um elemento pelo nome da tag.",
    ],
    correta: 1,
  },
  {
    pergunta: "Como se escreve um comentário de uma linha em JavaScript?",
    respostas: ["/* Comentário */", "// Comentário", "<!-- Comentário -->"],
    correta: 1,
  },
  {
    pergunta: "O que o operador '===' verifica em comparações em JavaScript?",
    respostas: ["Valor", "Tipo e valor", "Tipo"],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      "'let' é usado para constantes, enquanto 'const' é para variáveis.",
      "'let' permite reatribuição, enquanto 'const' não permite.",
      "Não há diferença, ambos são intercambiáveis.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Como se adiciona um elemento ao final de um array em JavaScript?",
    respostas: [
      "array.add(element);",
      "array.push(element);",
      "array.insert(element);",
    ],
    correta: 1,
  },
  {
    pergunta: "O que o método 'toUpperCase()' faz em uma string?",
    respostas: [
      "Converte a string para minúsculas.",
      "Converte a string para maiúsculas.",
      "Inverte a ordem dos caracteres na string.",
    ],
    correta: 2,
  },
  {
    pergunta: "Como se declara uma função em JavaScript?",
    respostas: [
      "function: minhaFuncao() {}",
      "def minhaFuncao() {}",
      "function minhaFuncao() {}",
    ],
    correta: 3,
  },
  {
    pergunta: "O que o operador ternário faz em JavaScript?",
    respostas: [
      "Substitui um bloco 'if' em situações simples.",
      "Realiza operações matemáticas ternárias.",
      "Concatena três strings.",
    ],
    correta: 1,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

for (const [index, item] of perguntas.entries()) {
  // clona as perguntas
  const quizItem = template.content.cloneNode(true);
  // modifica o h3
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    // clona a pergunta
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    // coloca a resposta
    dt.querySelector("span").textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta' + index);
    dt.querySelector('input').value = item.respostas.indexOf(resposta).toString();
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta.toString();

      if (estaCorreta) {
        corretas.add(index);
      } else {
        corretas.delete(index);
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    };

    // coloca a pergunta na tela
    quizItem.querySelector("dl").appendChild(dt);
  }

  // remove a primeira questão
  quizItem.querySelector("dl dt").remove();

  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}

  //remove a primeira questão
  quizItem.querySelector("dl dt").remove();

  //coloca a pergunta na tela
  quiz.appendChild(quizItem);
