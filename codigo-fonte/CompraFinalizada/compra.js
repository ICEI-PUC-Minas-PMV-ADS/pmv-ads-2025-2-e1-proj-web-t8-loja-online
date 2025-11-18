document.addEventListener("DOMContentLoaded", function () {
  // ---------------------------
  // GERAR DATA E HORA ATUAL
  // ---------------------------
  var agora = new Date();
  var dataHora = agora.toLocaleString("pt-BR");

  // ---------------------------
  // GERAR NÚMERO ALEATÓRIO DO PEDIDO (6 DÍGITOS)
  // ---------------------------
  var numeroPedido = Math.floor(100000 + Math.random() * 900000);

  // ---------------------------
  // ATUALIZA TÍTULO NO CABEÇALHO
  // ---------------------------
  var tituloEl = document.getElementById("titulo-compra");
  if (tituloEl) {
    tituloEl.textContent = "Compra #" + numeroPedido;
  }

  // ---------------------------
  // MOSTRAR INFORMAÇÕES NO CARD
  // ---------------------------
  var infoEl = document.getElementById("info-pedido");
  if (infoEl) {
    infoEl.innerHTML = 
      "Número do pedido: <strong>#" + numeroPedido + "</strong><br>" +
      "Data e horário: <strong>" + dataHora + "</strong>";
  }

  // ---------------------------
  // OBJETO DA COMPRA
  // ---------------------------
  var dadosCompra = {
    numero: numeroPedido,
    data_hora: dataHora
  };

  // ---------------------------
  // SALVAR ATÉ 5 COMPRAS NO LOCALSTORAGE
  // ---------------------------
  var compras = JSON.parse(localStorage.getItem("compras")) || [];

  if (compras.length >= 5) {
    localStorage.removeItem("compras");
    compras = [];
  }

  compras.push(dadosCompra);
  localStorage.setItem("compras", JSON.stringify(compras));
});
    