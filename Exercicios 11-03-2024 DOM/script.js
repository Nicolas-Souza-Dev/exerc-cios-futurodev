document.getElementById('titulo').style.backgroundColor = 'red';

let spans = document.getElementsByClassName('span');

for (let i = 0; i < spans.length; i++) {
    spans[i].innerText = 'Texto alterado em todos os spans a partir de uma manipulação de DOM'
} 

