import React from 'react';
import { useTheme } from '@owlsolutions/tailwind-test.themes.base-theme';
import { ColorBox } from '@owlsolutions/tailwind-test.ui.atoms.color-box';

export function ListTokens() {
  const theme = useTheme();
  return (
    <div className="w-fit grid grid-cols-3 auto-cols-fr gap-3">
      {Object.entries(theme).map(([key, value]) => (
        <ColorBox key={key} colorName={key} value={value} />
      ))}
    </div>
  );
}
