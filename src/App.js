import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList'; // Ensure this path is correct

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://course-api.com/react-store-products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
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
