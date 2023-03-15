import React from 'react';
import { CardsWithGoalsProgress } from './cards-with-goals-progress.tailwind';
import { LightTheme } from '@owlsolutions/tailwind-test.themes.light-theme';
import { goals } from './goals.mock';

export const BasicCardsWithGoalsProgress = () => (
  <LightTheme>
    <div className="w-80">
      <CardsWithGoalsProgress title="Pending PO by Product" goals={goals} />
    </div>
  </LightTheme>
);
