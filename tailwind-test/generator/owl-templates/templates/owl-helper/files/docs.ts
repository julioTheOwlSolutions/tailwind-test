import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, nameCamelCase } = context;

  return {
    relativePath: `${name}.docs.mdx`,
    content: `---
labels: ["tool", "helper"]
description: "A function that helps"
---

import { ${nameCamelCase} } from "./${name}";

A function that retrieves some result

API:

\`\`\`ts
const result = ${nameCamelCase}('dummy text'): string;
\`\`\`

Example

\`\`\`js
const result = ${nameCamelCase}('dummy text');
\`\`\`

\`\`\`js live
() => {
  const result = ${nameCamelCase}('dummy text');
  return <div>{result}</div>;
};
\`\`\`
`,
  };
};
