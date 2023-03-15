import { ComponentContext } from '@teambit/generator';

export const testFile = (context: ComponentContext) => {
  const { name, nameCamelCase: Name } = context;

  return {
    relativePath: `${name}.spec.tsx`,
    content: `import { ${Name} } from './${name}';

describe('${Name}()', () => {
  it('should do something', () => {
    expect(${Name}('dummy text')).toBe('hello dummy text!!');
  });
});
`,
  };
};
