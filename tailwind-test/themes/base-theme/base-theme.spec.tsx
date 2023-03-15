import React from 'react';
import { render } from '@testing-library/react';
import { ColorScheme } from './base-theme.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<ColorScheme />);
  const rendered = getByText('primary100');
  expect(rendered).toBeTruthy();
});
