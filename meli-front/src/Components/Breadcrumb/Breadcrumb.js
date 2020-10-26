import React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = ({ category }) => (
    category &&
    <ul className="breadcrumb">
        { category.map(category =>
            <li className="breadcrumb-item" key={category}>
                <a className="breadcrumb-link" href="#">{category}</a>
            </li>) }   
    </ul>
);

export default Breadcrumb;