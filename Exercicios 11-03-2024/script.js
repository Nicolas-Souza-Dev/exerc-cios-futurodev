function consultaValor() {
    let input = document.getElementById('input').value;
    let resposta;
    let novoItem = {};
    
    switch (input) {
        
        case "Arroz":
        case "1":
            resposta = 'R$5,99kg'
            novoItem.nome = 'Arroz';
            novoItem.preco = '5.99';
            break;

        case "Feijão":
        case "2":
            resposta = "R$6,89kg"
            novoItem.nome = 'Feijão';
            novoItem.preco = '6.89';
            break
        
        
        case "Frango":
        case "3":
            resposta = 'R$18,90kg';
            novoItem.nome = 'Frango';
            novoItem.preco = '18.90';
            break
        
        case "Macarrão":
        case "4":
            resposta = "R$3,89un"
            novoItem.nome = 'Macarrão';
            novoItem.preco = '3.89';
            break;

        default:
            resposta = "Produto não cadastrado ou inexistente"
            break;    
    }

    document.getElementById('preco-produto').innerText = resposta;
    return novoItem;
    
}

let carrinho = [];

function adicionarCarrinho() {

   let item = consultaValor();
   carrinho.push(item);

   let carrinhoHTML = "<ol>";
    carrinho.forEach(function(item) {
        carrinhoHTML += "<li>" + item.nome + ": " + item.preco + "</li>";
    });
    carrinhoHTML += "</ol>";

   document.getElementById('lista-carrinho').innerHTML = carrinhoHTML;

   
}

function calcularTotal() {
    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {
        let precoNumerico = parseFloat(carrinho[i].preco);
        total += precoNumerico;
    }

    let respostaTotal = document.getElementById("valor-total");

    if (total > 0) {
        respostaTotal.innerText = "R$" + total.toFixed(2);
    } else
        respostaTotal.innerText = "O carrinho está vázio!"

    
}

