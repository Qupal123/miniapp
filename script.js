// Инициализация Mini App
Telegram.WebApp.ready();

// Кнопка покупки
function buy(product) {
  Telegram.WebApp.sendData(JSON.stringify({
    action: "buy",
    product: product
  }));
}
