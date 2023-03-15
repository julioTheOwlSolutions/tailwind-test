import { ComponentTemplate, ComponentContext } from '@teambit/generator';
import { componentFile } from './files/component';
import { compositionFile } from './files/composition';
import { docsFile } from './files/docs';
import { testFile } from './files/test';
import { indexFile } from './files/index-file';

export const owlReactTailwind: ComponentTemplate = {
  name: 'owl-react-tw',
  description: 'Owl basic react component with tailwind',
  generateFiles: (context: ComponentContext) => {
    return [
      indexFile(context),
      componentFile(context),
      compositionFile(context),
      docsFile(context),
      testFile(context),
    ];
  },
  config: {
    // 'owlsolutions.tailwind-test/environments/env-with-tailwind': {},
    //'teambit.react/react': {},
    'teambit.envs/envs': {
      env: 'owlsolutions.tailwind-test/environments/env-with-tailwind',
    },
  },
};
