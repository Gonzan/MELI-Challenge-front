import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Container from './Container';

test('Debe contener un <div>', () => {
  const {container} = render(<Container />);
  expect(container.querySelector('div')).toBeInTheDocument();
});

test('Debe tener la clase container', () => {
  const {container} = render(<Container />);
  expect(container.querySelector('.container')).toBeInTheDocument();
});