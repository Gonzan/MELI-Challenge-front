import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumb from './Breadcrumb';

test('Debe contener una <ul>', () => {
  const {container} = render(<Breadcrumb category={[]} />);
  expect(container.querySelector('ul')).toBeInTheDocument();
});

test('Debe tener un <li> al recibir props', () => {
  const {container} = render(<Breadcrumb category={['Autos']} />);
  expect(container.querySelector('li')).toBeInTheDocument();
});

test('Debe tener las siguientes clases', () => {
  const {container} = render(<Breadcrumb category={['Autos']} />);
  expect(container.querySelector('.breadcrumb')).toBeInTheDocument();
  expect(container.querySelector('.breadcrumb-item')).toBeInTheDocument();
  expect(container.querySelector('.breadcrumb-link')).toBeInTheDocument();
});