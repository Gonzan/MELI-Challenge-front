import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Product.scss';

/**
 * Ítem de resultado de búsqueda
 * @param {String} id - identificador del ítem
 * @param {Object} price - precio del ìtem
 * @param {String} title - título del ítem
 * @param {String} picture - url de la imagen del ítem
 * @param {String} condition - condición del ítem (usado o nuevo)
 */
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

Product.propTypes = {
    id: PropTypes.string.isRequired,
    price: PropTypes.object,
    title: PropTypes.string,
    picture: PropTypes.string,
    condition: PropTypes.string,
};

Product.defaultProps = {
    price: {},
    title: '',
    picture: '',
    condition: '',
};

export default Product;