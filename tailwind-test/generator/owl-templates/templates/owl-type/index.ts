import { ComponentTemplate, ComponentContext } from '@teambit/generator';
import { componentFile } from './files/component';
import { docsFile } from './files/docs';
import { indexFile } from './files/index-file';

export const owlType: ComponentTemplate = {
  name: 'owl-type',
  description: 'Owl basic type',
  generateFiles: (context: ComponentContext) => {
    return [indexFile(context), componentFile(context), docsFile(context)];
  },
};
