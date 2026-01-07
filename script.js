const tg = window.Telegram.WebApp;
tg.ready();

function buy(product) {
  tg.sendData(JSON.stringify({
    action: "buy",
    product: product,
    price: 100
  }));

  // мини-подтверждение
  tg.showAlert(`Вы выбрали: ${product}`);
}
