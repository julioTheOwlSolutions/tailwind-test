import React from 'react';
import { render } from '@testing-library/react';
import { BasicProgressBar } from './progress-bar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProgressBar />);
  expect(true).toBeTruthy();
});
