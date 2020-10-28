import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../../Components/Product/Product'; 
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Container from '../../Components/Container/Container';
import Loader from '../../Components/Loader/Loader';
import Error from '../../pages/Error/Error';
import './SearchResults.scss';

/*
 * Página resultados de búsqueda 
 */
const SearchResults = () => {
    // Se utiliza el hook useLocation para capturar el query string de la url
    const location = useLocation();
    const query = () => new URLSearchParams(location.search);
    const search = query();

    // Se generan estados para guardar el resultado, las categorías, los errores y el estado del loading
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState({
        status: false,
        message: ''
    });
    
    const getProducts = async () => {
        const URL_SEARCH = `http://localhost:5000/api/items?${search}`;
        
        try {
            setError(false);
            setFetching(true);
            const fetchProducts = await fetch(URL_SEARCH);
            const response = await fetchProducts.json();

            // Si el array de categorías no viene vacío, se guardan los productos en el estado y se crean las categorías
            if (response.items !== null) {
                setProducts(response.items);
                setCategories(response.categories);
            } else {
                setError({
                    status: true,
                    message: 'No encontramos lo que buscás :('
                })
            }
        } catch (error) {
            setError({
                status: true,
                message: 'Ocurrió un error inesperado.',
            });
        }

        setFetching(false);
    }

    // Se utiliza el hook useEffect para hacer el llamado a la API dependiendo de la query string
    useEffect(() => {
        getProducts();
    },[location]);

        return (
            <>
                { error && <Error message={error.message} /> }
                { fetching && <Loader /> }
                { products &&
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
                }
            </>
        )
};

export default SearchResults;