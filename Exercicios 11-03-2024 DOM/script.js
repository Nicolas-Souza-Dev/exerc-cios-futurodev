//-------------Exercicío 1----------------------- 

document.getElementById('titulo').style.backgroundColor = 'red';

//-------------Exercicío 2----------------------- 

let spans = document.getElementsByClassName('span');

for (let i = 0; i < spans.length; i++) {
    spans[i].innerText = 'Texto alterado em todos os spans a partir de uma manipulação de DOM'
} 

//-------------Exercicío 3----------------------- 

let content = document.getElementById('content');

let elemento = document.createElement('span');

elemento.appendChild(document.createTextNode('Criei meu span utilizando manipulação de DOM'));

content.appendChild(elemento);

