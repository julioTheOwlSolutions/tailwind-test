import React from 'react';
import { CardWithDonutChart } from './card-with-donut-chart.tailwind';
import { LightTheme } from '@owlsolutions/tailwind-test.themes.light-theme';

const data = [
  { name: 'Next 10 days', value: 5 },
  { name: 'Past Due', value: 2 },
  { name: 'Future', value: 8 },
];

export const BasicCardWithDonutChart = () => (
  <LightTheme>
    <CardWithDonutChart title="Status Open Purchase Orders Lines" data={data} />
  </LightTheme>
);
