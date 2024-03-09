function consultaValor() {
    let input = document.getElementById('input').value;
    let resposta;

    switch (input) {

        case "Arroz":
        case "1":
            resposta = 'R$5,99kg'
            break;

        case "Feijão":
        case "2":
            resposta = "R$6,89kg"
            break
        
        
        case "Frango":
        case "3":
            resposta = "R$18,90kg"
            break
        
        case "Macarrão":
        case "4":
            resposta = "R$3,89un"
            break;

        default:
            resposta = "Produto não cadastrado ou inexistente"
            break;    
    }

    document.getElementById('preco-produto').innerText = resposta;
    
}
