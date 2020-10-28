import React from 'react';
import './Error.scss';

const Error = ({ message }) => (
    <main className="error">
        <h1 className="error-title">{message}</h1>
    </main>
);

export default Error;