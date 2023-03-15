import { ComponentTemplate, ComponentContext } from '@teambit/generator';
import { componentFile } from './files/component';
import { docsFile } from './files/docs';
import { testFile } from './files/test';
import { indexFile } from './files/index-file';

export const owlHelper: ComponentTemplate = {
  name: 'owl-helper',
  description: 'Owl basic helper',
  generateFiles: (context: ComponentContext) => {
    return [
      indexFile(context),
      componentFile(context),
      testFile(context),
      docsFile(context),
    ];
  },
};
