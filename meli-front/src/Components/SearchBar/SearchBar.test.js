import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import SearchBar from './SearchBar';

test('Debe contener un <header>', () => {
  const {container} = render(<App><SearchBar /></App>);
  expect(container.querySelector('.header')).toBeInTheDocument();
});

test('Debe tener un <div class="container">', () => {
  const {container} = render(<App><SearchBar /></App>);
  expect(container.querySelector('.container')).toBeInTheDocument();
});

test('Debe tener un <a class="header-logo">', () => {
  const {container} = render(<App><SearchBar /></App>);
  expect(container.querySelector('.header-logo')).toBeInTheDocument();
});

test('Las props del input deben estar vacias', () => {
  const {container} = render(<App><SearchBar /></App>);
  expect(container.querySelector('input').value).toHaveLength(0);
});
