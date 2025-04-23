
    const products = [
      {
        id: 1,
        name: "poco x7 pro",
        price: 19000,
        image: "poco x7 pro.jpg"
      },
      {
        id: 2,
        name: "poco C61",
        price: 15000,
        image:"poco c61.jpg"
      },
      {
        id: 3,
        name: "poco M6",
        price: 14000,
        image: "poco m6.jpg"
      },
      {
        id: 4,
        name: "poco X4",
        price: 13000,
        image: "poco x4.jpg"
      },
      {
        id: 5,
        name: "poco X7 5G",
        price: 17500,
        image: "poco X7 5g.jpg"
      },
      {
        id: 6,
        name: "poco X3",
        price: 19000,
        image: "poco x3.jpg"
      },
      {
        id: 7,
        name: "Galaxy F55",
        price: 22000,
        image: "f55 5g.jpg"
      },
      {
        id: 8,
        name: "galaxy A16",
        price: 20100,
        image: "sam a16 5g.jpg"
      },
      {
        id: 9,
        name: "Galaxy A55",
        price: 30000,
        image: "sam a55 5g.jpg"
      },
      {
        id: 10,
        name: "Galaxy S23",
        price: 25000,
        image: "sam s23.jpg"
      },
      {
        id: 11,
        name: "Galaxy A23",
        price: 27000,
        image: "samA23.jpg"
      },
      {
        id: 12,
        name: "Galaxy A23",
        price: 28000,
        image: "sAM Z fold4.jpg"
      },
      {
        id: 13,
        name: "realme 10 pro",
        price: 14000,
        image: "realme 10 pro.jpg"
      },
      {
        id: 14,
        name: "realme 13 5G",
        price: 18000,
        image: "realme 13 5g.jpg"
      },
      {
        id: 15,
        name: "realme 14X 5G",
        price: 19000,
        image: "realme 14x 5g.jpg"
      },
      {
        id: 16,
        name: "realme 14X",
        price: 17500,
        image: "realme 14x.jpg"
      },
      {
        id: 17,
        name: "realme 13 5G",
        price: 18000,
        image: "realme 135g.jpg"
      },
      {
        id: 18,
        name: "realme GT 7",
        price: 19000,
        image: "realme gt7.jpg"
      },
      {
        id: 19,
        name: "vivo Y18",
        price: 20000,
        image: "vivi y18.jpg"
      },
      {
        id: 20,
        name: "vivo T2X 5G",
        price: 22000,
        image: "vivo t2x 5g.jpg"
      },
      {
        id: 3,
        name: "vivo v40",
        price: 23000,
        image: "vivo v40.jpg"
      },
      {
        id: 3,
        name: "vivo Y20",
        price: 25000,
        image: "vivo y20.jpg"
      },
      {
        id: 3,
        name: "vivo V300",
        price: 27000,
        image: "vivov300.jpg"
      },
      {
        id: 3,
        name: "vivo Y16",
        price: 23500,
        image: "vivo y16.jpg"
      },
    ];
  {
    function loadProducts(filter = "") {
      const productList = document.getElementById("product-list");
      productList.innerHTML = "";
  
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(filter.toLowerCase())
      );
  
      filtered.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
      });
    }
  
    function addToCart(id) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find(p => p.id === id);
  
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const item = products.find(p => p.id === id);
        item.quantity = 1;
        cart.push(item);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      document.getElementById("cart-count").textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
  
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((acc, item) => acc + item.quantity, 0);
      document.getElementById("cart-count").textContent = count;
    }
  
    document.getElementById("search").addEventListener("input", (e) => {
      loadProducts(e.target.value);
    });
  
    loadProducts();
    updateCartCount();
}


