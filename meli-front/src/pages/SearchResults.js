import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import Product from '../Components/Product/Product'; 
import Bredcrumb from '../Components/Bredcrumb/Bredcrumb';
import './SearchResults.scss';

const SearchResults = () => {
    const location = useLocation();
    const query = () => new URLSearchParams(location.search);
    const search = query();

    const [products, setProducts] = useState([]); 
    const [categories, setCategories] = useState(false); 
      
    const getProducts =  ()=> {
        try {
            const URL_SEARCH = `http://localhost:5000/api/items?${search}`;
            
            fetch(URL_SEARCH)
            .then(res => res.json())
            .then(data => {
                setProducts(data.items);
                setCategories(data.categories)
                console.log(data);
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect( ()=>{          
            getProducts();
    },[location]);  
    return(
        <section className="search-results">
            {categories && <Bredcrumb category={categories} />}
            <section className="search-results__items">
                 <ul>
                    {products.map(product => <Product key={product.id} {...product}/>)}
                </ul>
            </section> 
        </section>
    )
};

export default SearchResults