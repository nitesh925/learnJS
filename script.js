async function fetchItems() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json(); 
  const cardContainer = document.getElementById('cardContainer');

  cardContainer.innerHTML = data.products.map((product) => {
    return `
      <div class="card">
        <h3>${product.title}</h3>
        <img src="${product.images[0]}" alt="${product.title}" class="product-image"/>
        <p>${product.description}</p>
        <p><strong>Price:</strong> $${product.price}</p>
      </div>
    `;
  }).join('');
}
fetchItems();
