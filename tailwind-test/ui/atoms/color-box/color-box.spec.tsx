import React from 'react';
import { render } from '@testing-library/react';
import { BlueColorBox } from './color-box.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BlueColorBox />);
  const rendered = getByText('Blue');
  expect(rendered).toBeTruthy();
});
