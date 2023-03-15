import React from 'react';
import {
  BaseTheme,
  BaseThemeProps,
} from '@owlsolutions/tailwind-test.themes.base-theme';
import { lightThemeDefaults } from './light-theme-tokens';

export type LightThemeProps = BaseThemeProps;

export function LightTheme(props: LightThemeProps) {
  return <BaseTheme {...props} overrides={lightThemeDefaults} />;
}

// theme metadata
LightTheme.themeName = 'light';
