//-------------Exercicío 1----------------------- 

// document.getElementById('titulo').style.backgroundColor = 'red';

//-------------Exercicío 2----------------------- 

// let spans = document.getElementsByClassName('span');

// for (let i = 0; i < spans.length; i++) {
//     spans[i].innerText = 'Texto alterado em todos os spans a partir de uma manipulação de DOM'
// } 

//-------------Exercicío 3----------------------- 

// let content = document.getElementById('content');

// let elemento = document.createElement('span');

// elemento.appendChild(document.createTextNode('Criei meu span utilizando manipulação de DOM'));

// content.appendChild(elemento);


//-------------Exercicío 4----------------------- 

// let remove = document.querySelector('#content span');
// remove.remove();

//-------------Exercicío 5----------------------- 

// let classes = document.getElementsByClassName('span');


// for (let i = 0; i < classes.length; i++) {
//     classes[i].style.backgroundColor = 'blue';
// }


 //-------------Exercicío 6----------------------- 

//  let title = document.getElementById('titulo');

//  title.classList.add('ClassTitulo');

//  console.log(title)

  //-------------Exercicío 7----------------------- 

//   let remover = document.querySelector('.classRemove');

//   remover.classList.remove('classRemove');

//   console.log(remover)

   //-------------Exercicío 8----------------------- 

// let myelemento = document.getElementById('meuElemento');

// myelemento.setAttribute("data-atual", "13/03/2024")

   //-------------Exercicío 9 ----------------------- 

  //  myelemento.removeAttribute("data-atual");

  //  console.log(myelemento)

    //-------------Exercicío 10 ----------------------- 

    let contadorTarefa = 1;

    function adicionarTarefa() {
      let tarefa = document.getElementById("inputTarefa").value;

      if (tarefa !== "") {
        let lista = document.querySelector(".listaTarefas");
        let li = document.createElement('li');
        li.innerHTML = `${tarefa} <button onclick = "removerTarefa(this)" >Remover</button>`;
        li.id = `t${contadorTarefa}`;
        lista.appendChild(li);
        contadorTarefa++;
        document.getElementById("inputTarefa").value = "";
      } else {
        alert("Por favor, digite uma tarefa válida.")
      }
    }

    function removerTarefa(element) {
      element.parentNode.remove();
    }








