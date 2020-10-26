import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import Product from '../../Components/Product/Product'; 
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Container from '../../Components/Container/Container';
import Loader from '../../Components/Loader/Loader';
import './SearchResults.scss';

const SearchResults = () => {
    const location = useLocation();
    const query = () => new URLSearchParams(location.search);
    const search = query();

    const [products, setProducts] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [categories, setCategories] = useState(false); 
      
    const getProducts = () => {
        try {
            const URL_SEARCH = `http://localhost:5000/api/items?${search}`;
            
            fetch(URL_SEARCH)
            .then(res => res.json())
            .then(data => {
                setProducts(data.items);
                setCategories(data.categories);
                setFetching(false);
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect( ()=>{          
            getProducts();
    },[location]);

    if (fetching) {
        return <Loader />;
    } else {
        return (
            <main className="main">
                <Container>
                    { categories && <Breadcrumb category={categories} /> }
            
                    <section>
                        <ul className="search-results-list">
                            { products && products.map(product => <Product key={product.id} {...product} />) }
                        </ul>
                    </section>
                </Container>
            </main>
        )
    }
};

export default SearchResults;