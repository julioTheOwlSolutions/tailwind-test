import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.docs.mdx`,
    content: `---
description: A ${Name} component.
labels: ['text', 'ui', 'component']
---

import { ${Name} } from './${name}.tailwind';
import { LightTheme } from '@owlsolutions/tailwind-test.themes.light-theme';

A component that does something special.

### Component usage
\`\`\`js
<LightTheme>
    <${Name} />
</LightTheme>
\`\`\`

### Render ${Name}

\`\`\`js live
<LightTheme>
    <${Name} />
</LightTheme>
\`\`\`
`,
  };
};
