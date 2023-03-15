import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryButtonLightTheme } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<PrimaryButtonLightTheme />);
  const rendered = getByText('Hello world!');
  expect(rendered).toBeTruthy();
});
