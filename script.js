const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

function buy(product) {
  const data = {
    action: "buy",
    product: product,
    price: 100
  };

  tg.sendData(JSON.stringify(data));
}
