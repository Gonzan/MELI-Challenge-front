import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import Error from '../../pages/Error/Error';
import Loader from '../../Components/Loader/Loader';
import './ProductDetail.scss';

const ProductDetail = () => {
    const [product, setProduct] = useState();
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);
    const params = useParams();

    const getProduct = async () => {
        
        const URL_PRODUCT = `http://localhost:5000/api/items/${params.id}`

        try {
            setError(false);
            setFetching(true);
            const product = await fetch(URL_PRODUCT);
            const response = await product.json();
            setProduct(response.item);
        
        } catch (error) {
            setError(true);
        }

        setFetching(false);
    }

    useEffect(() => {
        getProduct()
    }, []);

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