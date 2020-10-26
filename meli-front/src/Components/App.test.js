import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Montaje del componente', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});