function consultaValor() {
    let input = document.getElementById('input').value;
    let resposta;
    let novoItem = {};
    
    switch (input) {
        
        case "Arroz":
        case "1":
            resposta = 'R$5,99kg'
            novoItem.nome = 'Arroz';
            novoItem.preco = 'R$5,99kg';
            break;

        case "Feijão":
        case "2":
            resposta = "R$6,89kg"
            novoItem.nome = 'Feijão';
            novoItem.preco = 'R$6,89kg';
            break
        
        
        case "Frango":
        case "3":
            resposta = 'R$18,90kg';
            novoItem.nome = 'Frango';
            novoItem.preco = 'R$18,90kg';
            break
        
        case "Macarrão":
        case "4":
            resposta = "R$3,89un"
            novoItem.nome = 'Macarrão';
            novoItem.preco = 'R$3,89un';
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

   let carrinhoHTML = "<ul>";
    carrinho.forEach(function(item) {
        carrinhoHTML += "<li>" + item.nome + ": " + item.preco + "</li>";
    });
    carrinhoHTML += "</ul>";

   document.getElementById('lista-carrinho').innerHTML = carrinhoHTML;
   

}
