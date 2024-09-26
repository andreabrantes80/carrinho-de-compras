let carrinho = [];

function adicionarProduto(){
    let produto = document.getElementById('produto').value;
    
    //verifica se o produto não esta vazio
    
    if(produto !== ""){
        carrinho.push(produto);
        document.getElementById('produto').value = "";
        //limpa campo texto
        exibirCarrinho();  //atualiza a lista do carrinho
    }else{
        alert('Por favor, insira um produto.');
    }
    document.getElementById('produto').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarProduto();
        }
    });
}

function removerProduto(index){
    carrinho.splice(index, 1); //remove o produto do array
    exibirCarrinho();
    
}

function exibirCarrinho(){
    let lista = document.getElementById('listaCarrinho');
    lista.innerHTML = ""; //limpa a lista antes de atualizar

    carrinho.forEach(function(produto, index){
        lista.innerHTML += `<li>${produto}<button onClick="removerProduto(${index})">Remover</button></li>`
    });
}