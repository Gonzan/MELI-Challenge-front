import React from 'react';
import './Breadcrumb.scss';

/**
 * Retorna una lista de categorías
 * @param {Array} category - array de categorías 
 */
const Breadcrumb = ({ category }) => (
    <ul className="breadcrumb">
        { category.map(category =>
            <li className="breadcrumb-item" key={category}>
                <a className="breadcrumb-link" href="/">{category}</a>
            </li>) }   
    </ul>
);

export default Breadcrumb;