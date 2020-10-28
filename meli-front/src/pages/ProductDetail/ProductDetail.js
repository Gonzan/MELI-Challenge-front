import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import Error from '../../pages/Error/Error';
import Loader from '../../Components/Loader/Loader';
import './ProductDetail.scss';

/*
 * Página de detalle del producto
 */
const ProductDetail = () => {
    // Se crean estados para guardar la información del producto, saber si se esperan resultados o si hay errores
    const [product, setProduct] = useState();
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    // Se utiliza el hook useParams de react router para capturar el ID del URL
    const params = useParams();

    /**
     * Almacena en el localStorage los últimos 5 productos únicos
     * @param {Object} item - ítem de detalle 
     */
    const sendToStorage = (item) => {
        const initialItem = localStorage.getItem('lastItems');
        const parsedInitialItem = JSON.parse(initialItem) || [];

        // Almacena en el localStorage sólo si el ID del producto no está en el mismo
        const lastItems = parsedInitialItem.find(storageItem => storageItem.id === item.id) ? parsedInitialItem : [item, ...parsedInitialItem];

        // Formatea el array en 5 posiciones máximo
        if (lastItems.length >= 5) lastItems.length = 5;

        localStorage.setItem('lastItems', JSON.stringify(lastItems));
    }

    const getProduct = async () => {
        
        const URL_PRODUCT = `http://localhost:5000/api/items/${params.id}`

        try {
            setError(false);
            setFetching(true);
            const product = await fetch(URL_PRODUCT);
            const response = await product.json();
            setProduct(response.item);
            sendToStorage(response.item);
        } catch (error) {
            setError(true);
        }

        setFetching(false);
    }

    // Se utiliza el hook de useEffect para hacer un llamado a la API
    useEffect(() => {
        getProduct()
    },[]);

    return (
        <main className="main">
            
            { error && <Error /> }
            { fetching && <Loader /> }
            { product && (
                <Container>
                    <div className="detail">
                        <section className="detail-specs">
                            <figure className="detail-container">
                                <img src={product.picture} alt="product" className="detail-image" />
                            </figure>

                            <div className="detail-main">
                                <span className="detail-specs-sold">
                                    {product.condition} - {product.sold_quantity} vendidos
                                </span>

                                <h1 className="detail-specs-title">{product.title}</h1>

                                <span className="detail-price-currency">$</span>
                                <span className="detail-price">{product.price.amount}</span>

                                <button className="detail-button">Comprar</button>
                            </div>
                        </section>

                        <section className="detail-description">
                            <h2 className="detail-description-title">Descripción del producto</h2>
                            <p className="detail-text">{product.description}</p>
                        </section>
                    </div>
                </Container>
            )}
        </main>
    )
};

export default ProductDetail;