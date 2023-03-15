import React from 'react';
import {
  BaseTheme,
  BaseThemeProps,
} from '@owlsolutions/tailwind-test.themes.base-theme';
import { mercadoThemeDefaults } from './mercado-theme-tokens';

export type MercadoThemeProps = BaseThemeProps;

export function MercadoTheme(props: MercadoThemeProps) {
  return <BaseTheme {...props} overrides={mercadoThemeDefaults} />;
}

// theme metadata
MercadoTheme.themeName = 'mercado';
