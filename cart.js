
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const totalText = document.getElementById("total");

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${item.image}" />
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <div>
        <button onclick="changeQty(${index}, -1)">-</button>
        <span> ${item.quantity} </span>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
      <p>Item Total: $${itemTotal}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  totalText.textContent = "Total: $" + total;
}

function changeQty(index, change) {
  cartItems[index].quantity += change;
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCart();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCart();
}

renderCart();


