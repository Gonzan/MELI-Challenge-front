import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

test('Debe contener un <h1>', () => {
  const {container} = render(<Home />);
  expect(container.querySelector('h1')).toBeInTheDocument();
});

test('Debe contener un <main>', () => {
  const {container} = render(<Home />);
  expect(container.querySelector('main')).toBeInTheDocument();
});

test('Debe contener un <h1 class="home-title">', () => {
  const {container} = render(<Home />);
  expect(container.querySelector('.home-title')).toBeInTheDocument();
});