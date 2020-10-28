import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

/**
 * Página de error
 * @param {String} message - mensaje a renderizar
 */
const Error = ({ message }) => (
    <main className="error">
        <h1 className="error-title">{message}</h1>
    </main>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: '',
};

export default Error;