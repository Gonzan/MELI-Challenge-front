import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from './Error';

test('Debe contener un <h1>', () => {
  const {container} = render(<Error />);
  expect(container.querySelector('h1')).toBeInTheDocument();
});

test('Debe contener un <main>', () => {
  const {container} = render(<Error />);
  expect(container.querySelector('main')).toBeInTheDocument();
});

test('Debe contener un <h1 class="error-title">', () => {
  const {container} = render(<Error />);
  expect(container.querySelector('.error-title')).toBeInTheDocument();
});