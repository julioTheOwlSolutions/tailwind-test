import React from 'react';
import { ProgressBar } from './progress-bar.tailwind';
import { LightTheme } from '@owlsolutions/tailwind-test.themes.light-theme';

export const BasicProgressBar = () => (
  <LightTheme>
    <ProgressBar progress={0.5} total={1} />
  </LightTheme>
);

export const FullProgress = () => (
  <LightTheme>
    <ProgressBar progress={1} total={1} />
  </LightTheme>
);
export const CeroProgress = () => (
  <LightTheme>
    <ProgressBar progress={0} total={1} />
  </LightTheme>
);
