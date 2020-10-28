import React from 'react';
import './Container.scss';

/**
 * Genera una caja contenedora ajustada al tamaño de la vista
 * @param {Node} children 
 */
const Container = ({ children }) => (
    <div className="container">
        { children }
    </div>
);

export default Container;