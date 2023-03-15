import { ComponentContext } from '@teambit/generator';

export const componentFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;
  return {
    relativePath: `${name}.tsx`,
    content: `export type ${Name} = {
  /**
   * a field description
   */
  field: string;
};

export const mock${Name}: ${Name} = {
  field: 'value',
};
`,
  };
};
