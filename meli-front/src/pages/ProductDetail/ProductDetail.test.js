import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetail from './ProductDetail';

test('Debe contener un <main>', () => {
  const {container} = render(<ProductDetail />);
  expect(container.querySelector('main')).toBeInTheDocument();
});

test('Debe contener un <main class="main">', () => {
  const {container} = render(<ProductDetail />);
  expect(container.querySelector('.main')).toBeInTheDocument();
});

test('Debe contener un <Container />', () => {
  const {container} = render(<ProductDetail />);
  expect(container.querySelector('Container')).toBeInTheDocument();
});

test('Debe contener un <div class="detail-main">', () => {
  const {container} = render(<ProductDetail />);
  expect(container.querySelector('div')).toBeInTheDocument();
  expect(container.querySelector('.detail-main')).toBeInTheDocument();
});