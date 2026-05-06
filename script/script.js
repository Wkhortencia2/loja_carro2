function salvarCarros(event) {
    //impedir de recarregar a página
    event.preventDefault();

    let titulo = document.getElementById('title').value;
    let preco = document.getElementById('preco').value;
    let descricao = document.getElementById('descricao').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let kilometragem = document.getElementById('kilometragem').value
    let data_compra = document.getElementById('data_compra').value

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

        let carro = {
        id: Date.now(),
        titulo,
        preco,
        descricao,
        marca,
        modelo,
        kilometragem,
        data_compra,
        cambio
    };

    let carros = JSON.parse(localStorage.getItem("carros")) || [];
    carros.push(carro);
    localStorage.setItem("carros", JSON.stringify(carros));

    adicionarNatela(carro);

    document.querySelector("form").reset();

    
}
    function adicionarNatela(carro){
        let lista = document.getElementById('listarCarros');
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQgnC09O5PytrE9lsGArIqLmE2ePvtPWtUA&s'>
        <h3>${carro.titulo}<h3>
        <p><strong>Preço:</strong> R$ ${carro.preco}</p>
        <p><strong>Marca:</strong> R$ ${carro.marca}</p>
        <p><strong>Modelo:</strong> R$ ${carro.modelo}</p>
        <p><strong>Câmbio:</strong> R$ ${carro.cambio}</p>
        `;
        lista.appendChild(card);


    }

    window.onload = function () {
    let carros = JSON.parse(localStorage.getItem("carros")) || [];

    carros.forEach(carro => {
        adicionarNaTela(carro);
    }); 
    }

            function excluirCarro(id, botao) {
                let carros = JSON.parse(localStorage.getItem("carros")) || [];
            
                carros = carros.filter(carros => Number(carro.id) !== Number(id));

                localStorage.setItem("carros", JSON.stringify(carros));



            }
