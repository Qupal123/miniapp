const tg = window.Telegram.WebApp;
tg.expand();

document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const product = btn.dataset.product;

        tg.sendData(JSON.stringify({
            action: "buy",
            product: product
        }));

        tg.close();
    });
});
