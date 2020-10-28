import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './Loader';

test('Debe contener un <div>', () => {
  const {container} = render(<Loader />);
  expect(container.querySelector('div')).toBeInTheDocument();
});

test('Debe tener las siguientes clases', () => {
  const {container} = render(<Loader />);
  expect(container.querySelector('.loader-container')).toBeInTheDocument();
  expect(container.querySelector('.loader')).toBeInTheDocument();
});