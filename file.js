// const mensagem = 'Hello World!';

// divApp = document.getElementById('app');
// divApp.innerHTML = mensagem + (10 * 100) + ' Abraços!'

// const a = 2;
// console.log(a);


const perguntas = [
    {
        pergunta: 'Qual é a sintaxe correta para declarar uma variável em JavaScript?',
        respostas: [
            'var myVar;',
            'variable myVar;',
            'let myVar;',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a função do operador "+" em JavaScript?',
        respostas: [
            'Concatenar strings',
            'Realizar adição de números',
            'Ambas as opções anteriores',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a forma correta de comentar uma linha de código em JavaScript?',
        respostas: [
            '// Comentário',
            '/* Comentário */',
            '<!-- Comentário -->',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o operador usado para comparar igualdade em valor e tipo em JavaScript?',
        respostas: [
            '==',
            '===',
            '=',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a função do método "querySelector" em JavaScript?',
        respostas: [
            'Selecionar um elemento HTML pelo seu ID',
            'Selecionar um elemento HTML pelo seu nome de classe',
            'Selecionar um elemento HTML pelo seu tipo de tag',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a forma correta de escrever um loop "for" em JavaScript?',
        respostas: [
            'for (var i = 0; i < 10; i++)',
            'for (i = 0; i < 10; i++)',
            'for (i = 0; i < 10)',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?',
        respostas: [
            'push()',
            'pop()',
            'concat()',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a função do método "toFixed" em JavaScript?',
        respostas: [
            'Arredondar um número para o inteiro mais próximo',
            'Arredondar um número para um número específico de casas decimais',
            'Converter um número para uma string',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a forma correta de escrever uma função em JavaScript?',
        respostas: [
            'function myFunction() {}',
            'myFunction() {}',
            'var myFunction = function() {}',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o método usado para remover o último elemento de um array em JavaScript?',
        respostas: [
            'push()',
            'pop()',
            'shift()',
        ],
        correta: 1
    }
];


// const divAux = document.querySelector('.aux');
// divAux.textContent =  perguntas[1].respostas[perguntas[0].correta];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');


for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove(); // remove o primeiro dt que foi clonado

    // coloca a pergunta na tela
    quiz.appendChild(quizItem); 
}