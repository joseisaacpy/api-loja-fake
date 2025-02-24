const url = "https://fakestoreapi.com/products";
let ulElement = document.getElementById("ulElement");

async function buscarDados() {
  try {
    const response = await fetch(url);
    const dados = await response.json();

    let quantidade = dados.slice(0, 6); // Pegando 6 produtos para exibir

    dados.forEach((item) => {
      let liElement = document.createElement("li");
      let titleh2Element = document.createElement("h2");
      let imgElement = document.createElement("img");
      let priceElement = document.createElement("p");
      let ancoraElement = document.createElement("a");
      let buttonElement = document.createElement("button");

      titleh2Element.textContent = item.title;
      imgElement.src = item.image;
      priceElement.textContent = `R$${item.price.toFixed(2)}`;
      buttonElement.appendChild(ancoraElement);
      ancoraElement.textContent = "Comprar";
      ancoraElement.href =
        "https://api.whatsapp.com/send?l=pt_br&phone=5551997407434";

      liElement.appendChild(titleh2Element);
      liElement.appendChild(imgElement);
      liElement.appendChild(priceElement);
      liElement.appendChild(buttonElement);

      ulElement.appendChild(liElement);
    });
  } catch (error) {
    console.log(error);
  }
}

buscarDados();
