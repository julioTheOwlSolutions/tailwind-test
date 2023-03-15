import { ComponentContext } from '@teambit/generator';

export const componentFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;
  return {
    relativePath: `${name}.tailwind.tsx`,
    content: `import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import styled from 'styled-components';

export type ${Name}Props = {
  /**
   * Extra classes for the ${name}, overwrite the default ones
   */
  extraClasses?: string;
  /**
   * A node to be rendered in the special component.
   */
  children?: ReactNode;
  text?: string;
};

const ${Name}Styled = styled.div\`
  color: white;
\`;

export function ${Name}({ 
  children,
  extraClasses = '',
  text = 'Hello World!!',
}: ${Name}Props) {
  const classNameMerged = twMerge('w-full bg-black', extraClasses);

  return <${Name}Styled className={classNameMerged}>{text}</${Name}Styled>;
}
`,
  };
};
