import { ComponentContext } from '@teambit/generator';

export const componentFile = (context: ComponentContext) => {
  const { name, nameCamelCase: Name } = context;
  return {
    relativePath: `${name}.tsx`,
    content: `export function ${Name}(name: string) {
  return \`hello \${name}!!\`;
}
`,
  };
};
