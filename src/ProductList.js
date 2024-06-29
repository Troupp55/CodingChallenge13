import React, { useState } from 'react';

const ProductList = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % products.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + products.length) % products.length);
    };

    return (
        <div className="product-list">
            <button onClick={handlePrevious}>Previous</button>
            <div key={products[currentIndex].id} className="product">
                <img src={products[currentIndex].image} alt={products[currentIndex].name} />
                <h2>{products[currentIndex].name}</h2>
                <p>{products[currentIndex].description}</p>
                <span>${products[currentIndex].price}</span>
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default ProductList;
