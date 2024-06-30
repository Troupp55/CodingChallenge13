document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>$${product.price}</p>
                    <p>${product.description}</p>
                `;
                productContainer.appendChild(productDiv);
            });
        })
        .catch(error => {
            productContainer.innerHTML = `<p>Error fetching products: ${error.message}</p>`;
        });
});
