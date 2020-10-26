import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ id, price, title, picture, condition }) => (
    <li className="product">
        <Link to={`/details/${id}`} className="product-link">
            <figure className="product-container">
                <img src={picture} alt="product" className="product-image" />
            </figure>

            <div className="product-details">
                <div className="product-price">
                    <span className="product-price-currency">$</span>
                    <span>{price.amount}</span>
                    <i className="product-icon"></i>
                    <span className="product-condition">{condition}</span>
                </div>

                <h2 className="product-title">{title}</h2>
            </div>
        </Link>
    </li>
)

export default Product;