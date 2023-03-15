import React from 'react';
import { render } from '@testing-library/react';
import { MercadoColorScheme } from './mercado-theme.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<MercadoColorScheme />);
  const rendered = getByText('primary100');
  expect(rendered).toBeTruthy();
});
