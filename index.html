const tg = window.Telegram.WebApp;
tg.expand();

const content = document.getElementById("content");

// 🔹 ТОВАРЫ
const products = [
  { title: "30 гемов", img: "img/30.png", price: 100 },
  { title: "80 гемов", img: "img/80.png", price: 100 },
  { title: "170 гемов", img: "img/170.png", price: 100 },
  { title: "360 гемов", img: "img/360.png", price: 100 },
  { title: "950 гемов", img: "img/950.png", price: 100 },
  { title: "2000 гемов", img: "img/2000.png", price: 100 },

  { title: "Brawl Pass", img: "img/BP.png", price: 100 },
  { title: "Brawl Pass+", img: "img/BP_plus.png", price: 100 },
  { title: "Brawl Pass Ultimate", img: "img/BP_U.png", price: 100 },

  { title: "Mega Box", img: "img/MM.png", price: 100 },
  { title: "Mega Skin", img: "img/MS.png", price: 100 },
  { title: "Mythic Skin", img: "img/PROP.png", price: 100 }
];

// 🔹 МАГАЗИН
function showShop() {
  setActiveTab(0);
  content.className = "products";
  content.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}">
      <h3>${p.title}</h3>
      <p>${p.price} ₽</p>
      <button>Купить</button>
    `;
    card.querySelector("button").onclick = () => buy(p);
    content.appendChild(card);
  });
}

// 🔹 ПОКУПКА
function buy(product) {
  tg.sendData(JSON.stringify({
    action: "buy",
    product: product.title,
    price: product.price
  }));

  tg.showPopup({
    title: "Заказ создан",
    message: `${product.title}\nЦена: ${product.price} ₽`,
    buttons: [{ type: "ok" }]
  });
}

// 🔹 ОТЗЫВЫ (ПОКА ЗАГЛУШКА → заменим на реальные)
function showReviews() {
  setActiveTab(1);
  content.className = "reviews";
  content.innerHTML = `
    <div class="review">
      <div class="stars">★★★★★</div>
      Быстро и честно
    </div>
    <div class="review">
      <div class="stars">★★★★☆</div>
      Всё пришло, спасибо
    </div>
  `;
}

function setActiveTab(i) {
  document.querySelectorAll(".tab").forEach((t, idx) => {
    t.classList.toggle("active", idx === i);
  });
}

// старт
showShop();
