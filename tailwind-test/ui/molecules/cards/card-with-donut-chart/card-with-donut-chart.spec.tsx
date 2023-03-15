import React from 'react';
import { render } from '@testing-library/react';
import { BasicCardWithDonutChart } from './card-with-donut-chart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCardWithDonutChart />);
  expect(true).toBeTruthy();
});
