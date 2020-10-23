import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
        const [product, setProduct] = useState();
        const [fetching, setFetching] = useState(true);
        const params = useParams();
    
        const getProduct = async ()=> {
            try {
                const product = await fetch(`http://localhost:5000/api/items/${params.id}`);
                const response = await product.json();
                return response.item;
            } catch (error) {
                console.log(error.message);
            }
        }
        useEffect(()=>{
            getProduct().then(response =>  {
                setProduct(response);
                setFetching(false);
            });
        },[]);
    if(fetching){
        return "buscando";
    }else{
        return (
            <div className="detail-container">
            <section className="related-search">
                <span>
                    Bredcrumb
                </span>
            </section>
            <section className="detail-product">
                <div className="product-poster">
                    <img src={product.picture} alt=""/>
                </div>
                <div className="product-specs">
                    <span className="product-status">{product.condition}</span>-
                    <span className="sold-cuantity">{product.sold_quantity}</span>
                    <h1>{product.title}</h1>
                    <span className="product-price">${product.price.amount}</span>
                    <button className="btn-buy">Comprar</button>
                </div>
            </section>
            <section className="product-description">
                <h2>Descripción del producto</h2>
                <p>{product.description}</p>
            </section>
        </div>
    )
    };
};       
export default ProductDetail