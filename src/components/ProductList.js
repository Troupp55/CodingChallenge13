import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
