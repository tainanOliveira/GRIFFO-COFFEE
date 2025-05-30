document.addEventListener("DOMContentLoaded", function () {
    let cartTotal = 0;
    const cartValueElement = document.getElementById("cart-value");
    const contentContainer = document.getElementById("content-container");

    const links = document.querySelectorAll('.nav-menu li a');

    // Adiciona evento de clique para os links do menu
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const content = this.getAttribute('data-content');

            // Carrega o conteúdo dinâmico com os botões
            switch (content) {
                case 'menu':
                    contentContainer.innerHTML = `
                   
                   <h1 id="hitoria-h1">A História do Griffo Caffé</h1>
                   <p id="hitoria-p">
                   Bem-vindo ao Griffo Caffé, um lugar onde o aroma do café se mistura com a paixão pela simplicidade e o acolhimento. <br>
                   Nossa história começa com um sonho simples, mas grandioso: criar um espaço onde os sabores autênticos se encontram com momentos de conexão, onde cada xícara é feita com carinho e cada pedacinho de bolo carrega um pedaço de nossa essência.
                   O nome Griffo vem de <img src="imagemMenu/menu1.jfif" alt="" class="float-img"> uma antiga lenda que fala sobre a força e a resiliência de um grifo, um ser mítico que representa a união entre o poder da águia e a sabedoria do leão. Na nossa cafeteria, isso simboliza a mistura de dois mundos: a tradição e a inovação. <br>
                   Aqui, acreditamos que a verdadeira força está no equilíbrio entre o antigo e o novo, entre o clássico e o moderno. E, claro, sempre com uma boa dose de paixão. <br>
                   Nossa jornada começou com a busca pelos melhores grãos, cultivados com cuidado e respeito ao meio ambiente, e a vontade de oferecer aos nossos clientes mais do que um simples café - queremos oferecer uma experiência. <br>
                   Cada receita é pensada para trazer sabor e aconchego, <img src="imagemMenu/menu2.jfif" alt="" class="float-img"> cada detalhe é cuidadosamente escolhido para criar uma atmosfera rústica e acolhedora, onde você possa se sentir em casa. <br>
                   Em cada esquina do Griffo Caffé, há uma história para contar - seja a de um café que viajou de terras distantes até nossa xícara ou a de um bolo caseiro feito com carinho, como o de antigamente. E você, nosso querido cliente, é parte dessa história. Acreditamos que o café, mais do que uma bebida, é um elo que conecta pessoas e cria momentos especiais. Aqui, queremos que você se sinta acolhido, como se estivesse na casa de um amigo, com a certeza de que cada visita será única. <br>
                   Nosso compromisso é oferecer um ambiente onde a conversa flui, o sabor encanta e o tempo parece passar mais devagar - porque, no Griffo Caffé, cada momento é precioso.
                 </p>
                    `;
                    break;
                case 'promocoes':
                    contentContainer.innerHTML = `
                    <div class="card" style="width: 15rem; height: 20rem;">
                        <img src="/imagemPromo/comboEnergeticojfif.jfif" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Combo Energético</h5>
                            <p class="card-text">Um café expresso duplo + um pão de queijo por um preço especial</p>
                            <p class="card-text">R$ 15.00</p>
                            <button class="btn-cart" data-name="Combo Energético" data-price="15.00">Adicionar</button>
                        </div>
                    </div>

                     <div class="card" style="width: 15rem; height: 21rem;">
                <img src="/imagemPromo/cappuccinoCremoso.jfif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Cappuccino Cremoso</h5>
                    <p class="card-text">Nosso cappuccino tradicional, cremoso e quentinho, por um preço especial.</p>
                    <p class="card-text">R$ 9,90</p>
                     <button class="btn-cart"  data-name="Cappuccino Cremoso"data-price=" 9.90">Adicionar</button>
                </div>
            </div>
            
             <div class="card" style="width: 15rem; height: 20rem;">
              <img src="/imagemPromo/latter.jfif" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Latte Saborizado</h5>
                  <p class="card-text">Peça um latte médio com sabor (baunilha, caramelo ou avelã) e aproveite o desconto.</p>
                  <p class="card-text">R$ 11,90</p>
                  
                  <button class="btn-cart" data-name="Latte Saborizado" data-price="11.90">Adicionar</button>
              </div>
            </div>

            <div class="card" style="width: 15rem; height: 22rem;">
            <img src="imagemPromo/gelado.jfif" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Café Gelado Refresh</h5>
                <p class="card-text">Refrescante e saboroso, ideal para dias quentes! Aproveite o desconto.</p>
                <p class="card-text">R$ 13,50</p>
                 <button class="btn-cart" data-name="Café Gelado Refresh" data-price="13.50">Adicionar</button>
            </div>
        </div>
          `;
                    break;
                case 'bebidasgeladas':
                    contentContainer.innerHTML = `
                    <div class="card" style="width: 15rem; height: 20rem;">
                        <img src="imagemCafeGelado/gelado1.jfif" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Ice Latte</h5>
                            <p class="card-text">Café espresso duplo com leite gelado e gelo...</p>
                            <p class="card-text">R$ 14,90</p>
                            <button class="btn-cart" data-name="Ice Latte" data-price="14.90">Adicionar</button>
                        </div>
                    </div>

                    <div class="card" style="width: 15rem; height: 21rem;">
                  <img src="imagemCafeGelado/gelado2.jfif" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title"> Mocha Gelado </h5>
                      <p class="card-text">Uma combinação irresistível de café espresso, leite, calda de chocolate e gelo..</p>
                      <p class="card-text">R$ 16,90</p>
                      
                      <button class="btn-cart" data-name="Mocha Gelado"  data-price="16.90">Adicionar</button>
                  </div>
                </div>

                <div class="card" style="width: 15rem; height: 21rem;">
                  <img src="imagemCafeGelado/gelado3.jfif" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">Caramel Macchiato Gelado</h5>
                      <p class="card-text">Café espresso com leite gelado e um toque de calda de caramelo.</p>
                      <p class="card-text">R$ 17,90</p>
                      
                      <button class="btn-cart"data-name="Caramel Macchiato Gelado" data-price="17.90">Adicionar</button>
                  </div>
                </div>

                div class="card" style="width: 15rem; height: 21.5rem;">
                  <img src="imagemCafeGelado/gelado4.jfif" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">Frappuccino Tradicional</h5>
                      <p class="card-text">Café batido com leite, gelo e um toque de chantilly. Disponível nas versões chocolate, baunilha ou caramelo.</p>
                      <p class="card-text">R$ 18,90</p>
                      
                      <button class="btn-cart" data-name="Frappuccino Tradicional" data-price="18.90">Adicionar</button>
                  </div>
                </div>
                  `;
                    break;
                    case 'lanchesQuitutes':
                        contentContainer.innerHTML = `
                      <div class="card" style="width: 15rem; height: 22rem;">
                      <img src="lanchesQuitutes/lanche1.jfif" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">Coxinha de Frango</h5>
                          <p class="card-text">Massa crocante e recheio suculento de frango desfiado, temperado com especiarias e ervas finas. Perfeita para um lanche rápido e saboroso.</p>
                          <p class="card-text">R$ 6,50</p>
                          
                          <button class="btn-cart" data-name=" Coxinha de Frango" data-price="6.50">Adicionar</button>
                      </div>
                  </div>
                  <div class="card" style="width: 15rem; height: 22rem;">
                    <img src="lanchesQuitutes/lanche2.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Torta de Maçã</h5>
                        <p class="card-text">Massa leve e crocante, recheada com maçãs caramelizadas, canela e um toque de baunilha. </p>
                        <p class="card-text">R$ 9,50</p>
                         <button class="btn-cart" data-name="Torta de Maçã" data-price="9.50">Adicionar</button>
                    </div>
                </div>
      
                <div class="card" style="width: 15rem; height: 24rem;">
                  <img src="lanchesQuitutes/lanche3.jfif" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">Bruschetta de Tomate e Manjericão</h5>
                      <p class="card-text">Fatias de pão italiano tostado, cobertas com uma mistura fresca de tomate picado, manjericão, azeite de oliva e um toque de balsâmico. </p>
                      <p class="card-text">R$ 11,50</p>
                      
                      <button class="btn-cart" data-name="Bruschetta de Tomate e Manjericão" data-price="11.50">Adicionar</button>
                  </div>
              </div>
      
              <div class="card" style="width: 15rem; height: 24rem;">
                <img src="lanchesQuitutes/lanche4.jfif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Pão de Queijo</h5>
                    <p class="card-text">Feito com queijo minas e polvilho, fofinho por dentro e crocante por fora. Um clássico da culinária mineira.</p>
                    <p class="card-text">R$ 7,00</p>
                    
                    <button class="btn-cart"  data-name="Pão de Queij"data-price="7.00">Adicionar</button>
                </div>
            </div>`;
                        break;
                        case 'bebidasquentes':
                            contentContainer.innerHTML = `
        
                            
                      <div class="card" style="width: 15rem; height: 20rem;">
                        <img src="bebidasQuentes/quente1.jfif" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Café Expresso</h5>
                            <p class="card-text">Café encorpado com sabor intenso e aroma marcante, perfeito para quem gosta de um café forte.</p>
                            <p class="card-text">R$ 6,00</p>
                            
                            <button class="btn-cart" data-name="Café Expresso" data-price="6.00">Adicionar</button>
                        </div>
                    </div>
            
                    <div class="card" style="width: 15rem; height: 22rem;">
                      <img src="bebidasQuentes/quente2.jfif" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">Cappuccino</h5>
                          <p class="card-text">Café expresso, leite vaporizado e uma camada de espuma, perfeito para acompanhar um lanche.</p>
                          <p class="card-text">R$ 8,50</p>
                          
                          <button class="btn-cart" data-name="Cappuccino" data-price="8.50">Adicionar</button>
                      </div>
                  </div>
            
                  <div class="card" style="width: 15rem; height: 22rem;">
                    <img src="bebidasQuentes/quente3.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Café Latte</h5>
                        <p class="card-text">Mistura de café expresso com leite vaporizado, suave e cremoso.</p>
                        <p class="card-text">R$ 7,50</p>
                        
                        <button class="btn-cart" data-name="Café Latte" data-price="7.50">Adicionar</button>
                    </div>
                </div>
                
                <div class="card" style="width: 15rem; height: 23rem;">
                  <img src="bebidasQuentes/quente4.jfif" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">Mocha</h5>
                      <p class="card-text">Café expresso com leite vaporizado e calda de chocolate, um verdadeiro deleite para os fãs de chocolate.</p>
                      <p class="card-text">R$ 9,00</p>
                      
                      <button class="btn-cart"  data-name="Mocha" data-price="9.00">Adicionar</button>
                  </div>
              </div>  `;
                            break;




                default:
                    contentContainer.innerHTML = `<p>Selecione uma categoria.</p>`;
            }

            // Após atualizar o HTML, precisamos adicionar os eventos aos novos botões
            atualizarEventosDosBotoes();
        });
    });

    // Define o link 'menu' como ativo e carrega o conteúdo
    const menuLink = document.querySelector('.nav-menu li a[data-content="menu"]');
    if (menuLink) {
        menuLink.classList.add('active');
        menuLink.click(); // Simula o clique no menu para carregar o conteúdo
    }

    function atualizarEventosDosBotoes() {
        const buttons = document.querySelectorAll(".btn-cart");

        buttons.forEach(button => {
            button.addEventListener("click", function () {
                let itemName = this.getAttribute("data-name");
                let itemPrice = parseFloat(this.getAttribute("data-price"));
                cartTotal += itemPrice;

                // Armazenar item no carrinho
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                cartItems.push({ name: itemName, price: itemPrice });
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                cartValueElement.textContent = `R$ ${cartTotal.toFixed(2)}`;
            });
        });
    }
});
