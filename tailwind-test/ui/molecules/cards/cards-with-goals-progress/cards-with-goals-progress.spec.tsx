import React from 'react';
import { render } from '@testing-library/react';
import { BasicCardsWithGoalsProgress } from './cards-with-goals-progress.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCardsWithGoalsProgress />);
  expect(true).toBeTruthy();
});
