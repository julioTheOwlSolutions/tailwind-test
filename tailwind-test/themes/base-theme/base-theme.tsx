import React, { ReactNode } from 'react';
import { createTheme } from '@teambit/base-react.themes.theme-provider';
import { baseThemeDefaults } from './base-theme-tokens';

export type BaseThemeSchemaType = typeof baseThemeDefaults;

export interface BaseThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  overrides?: Partial<BaseThemeSchemaType>;
  children?: ReactNode;
}

const { useTheme, ThemeProvider } = createTheme<BaseThemeSchemaType>({
  theme: baseThemeDefaults,
});

export function BaseTheme({ children, className, ...props }: BaseThemeProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}

export { useTheme };
