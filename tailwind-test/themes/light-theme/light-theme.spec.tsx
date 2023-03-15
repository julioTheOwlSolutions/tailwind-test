import React from 'react';
import { render } from '@testing-library/react';
import { LightColorScheme } from './light-theme.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightColorScheme />);
  const rendered = getByText('primary100');
  expect(rendered).toBeTruthy();
});
