import React from 'react'
import './ProductDetail.scss'
const ProductDetail = () => {
    
        return (
            <div className="detail-container">
                <section className="related-search">
                    <span>
                        Bredcrumb
                    </span>
                </section>
                <section className="detail-product">
                    <div className="product-poster">
                        <img src="" alt=""/>
                    </div>
                    <div className="product-specs">
                        <span className="product-status">new</span>-
                        <span className="sold-cuantity"> vendidos</span>
                        <h1>title</h1>
                        <span className="product-price">$2121</span>
                        <button className="btn-buy">Comprar</button>
                    </div>
                </section>
                <section className="product-description">
                    <h2>Descripcion del producto</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </section>
            </div>
        )
}
export default ProductDetail