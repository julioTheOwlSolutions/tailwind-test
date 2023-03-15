import React from 'react';
import { ListTokens } from './list-tokens.tailwind';
import { BaseTheme } from '@owlsolutions/tailwind-test.themes.base-theme';
import { MercadoTheme } from '@owlsolutions/tailwind-test.themes.mercado-theme';
import { LightTheme } from '@owlsolutions/tailwind-test.themes.light-theme';

export const LightThemeListTokens = () => {
  return (
    <LightTheme>
      <ListTokens></ListTokens>
    </LightTheme>
  );
};

export const BasicThemeListTokens = () => {
  return (
    <BaseTheme>
      <ListTokens></ListTokens>
    </BaseTheme>
  );
};

export const MercadoThemeListTokens = () => {
  return (
    <MercadoTheme>
      <ListTokens></ListTokens>
    </MercadoTheme>
  );
};
