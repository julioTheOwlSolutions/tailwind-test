import { ComponentContext } from '@teambit/generator';

export const compositionFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.composition.tsx`,
    content: `import React from 'react';
import { ${Name} } from './${name}.tailwind';
import { LightTheme } from '@owlsolutions/tailwind-test.themes.light-theme';

export const Basic${Name} = () => (
  <LightTheme>
    <${Name} />
  </LightTheme>
);
`,
  };
};
