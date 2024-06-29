import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log("Fetching products...");
        axios.get('https://course-api.com/react-store-products')
            .then(response => {
                console.log("Products fetched successfully:", response.data);
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setError('Failed to load products');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="app">
            <ProductList products={products} />
        </div>
    );
};

export default App;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="app">
            <ProductList products={products} />
        </div>
    );
};

export default App;