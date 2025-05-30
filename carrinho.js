document.addEventListener("DOMContentLoaded", function () {
    const pedidosLista = document.getElementById("pedidos-lista");
    const totalValueElement = document.getElementById("total-value");
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartTotal = 0;

    function atualizarCarrinho() {
        pedidosLista.innerHTML = ""; // Limpa a lista antes de recriar os itens
        cartTotal = 0; // Reseta o total antes de recalcular

        cartItems.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
                <button class="remover-item" data-index="${index}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
            pedidosLista.appendChild(li);
            cartTotal += item.price;
        });

        totalValueElement.textContent = `R$ ${cartTotal.toFixed(2)}`;
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Atualiza o armazenamento local
    }

    // Adiciona evento de clique nos botões de remover
    pedidosLista.addEventListener("click", function (event) {
        if (event.target.closest(".remover-item")) { // Garante que o clique seja no botão ou no ícone
            const index = event.target.closest(".remover-item").getAttribute("data-index");
            cartItems.splice(index, 1); // Remove o item da array
            atualizarCarrinho(); // Atualiza a exibição da lista
        }
    });

    atualizarCarrinho(); // Renderiza os pedidos ao carregar a página
});
v