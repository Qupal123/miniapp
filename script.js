const tg = window.Telegram.WebApp;
tg.expand();

document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.onclick = () => {
        tg.sendData(JSON.stringify({
            action: "buy",
            product: btn.dataset.product
        }));
        tg.close();
    };
});
