import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name, nameCamelCase } = context;

  return {
    relativePath: `${name}.docs.mdx`,
    content: `---
description: 'Entity component for ${Name}'
labels: ['data', 'entity', 'types']
---
${Name} Type

### Type example

\`\`\`ts
const ${nameCamelCase}: ${Name} = { field: 'value' };
\`\`\`
`,
  };
};
