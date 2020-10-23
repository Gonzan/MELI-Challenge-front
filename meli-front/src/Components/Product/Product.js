import React from 'react'
import { Link } from 'react-router-dom'
import Icon_Shipping from '../../assets/ic_shipping.png'
import './Product.scss'
const Product = ({id, title, address,picture})=> (
    <Link to={`/details/${id}`}>
        <li className="product-container">
            <div className="product-container__controll">
                <figure className="product-container__poster">
                    <img src={picture} alt="poduct" />
                </figure>
                <div className="product-container__detail">
                    <div className="detail-price">
                        <div className="detail-price__controll">
                            <span>$</span><span>1111</span>
                            <span><img src={Icon_Shipping} alt="shipping-icon"/></span>
                        </div>
                        <span className="detail-price__location">{address?.state_name}</span>
                    </div>
                    <div className="detail__title">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </li>
    </Link>
)

export default Product