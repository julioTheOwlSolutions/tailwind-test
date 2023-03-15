import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain, UseTypescriptModifiers } from '@teambit/react';
import { BundlerContext } from '@teambit/bundler';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { AspectAspect, AspectMain } from '@teambit/aspect';
import { UseTailwindTransformer } from '@bit-foundations/styling.tailwind.webpack-transformer';
// import { UseTailwindTransformer } from './webpack/webpack-transformers';
import {
  devConfigTransformer,
  buildConfigTransformer,
} from '@bit-foundations/env-configs.typescript.jsx-transform';
import { EnvWithTailwindAspect } from './env-with-tailwind.aspect';
import { WebpackConfigTransformer } from '@teambit/webpack';

export class EnvWithTailwindMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect, AspectAspect];

  static runtime = MainRuntime;

  static async provider([react, envs, aspect]: [
    ReactMain,
    EnvsMain,
    AspectMain
  ]) {
    const {
      previewConfigTransformer: twPreviewTransformer,
      devServerConfigTransformer: twDevServerTransformer,
      // } = UseTailwindTransformer(tailwindConfigPath); // <-- this is for shareable tailwind config
    } = UseTailwindTransformer(
      require.resolve('./tailwind/tailwind.config.js')
    ); // <-- this is for locally-defined tw config

    const JsxTransformTsModifiers: UseTypescriptModifiers = {
      devConfig: [devConfigTransformer],
      buildConfig: [buildConfigTransformer],
    };

    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.useTypescript(JsxTransformTsModifiers),
      react.useWebpack({
        // previewConfig: [twPreviewTransformer],
        devServerConfig: [twDevServerTransformer],
      }),

      // this is key for tailwind styles rendering in the remote scope
      envs.override({
        getTemplateBundler: (
          context: BundlerContext,
          transformers: WebpackConfigTransformer[] = []
        ) => {
          return aspect.aspectEnv.createTemplateWebpackBundler(context, [
            twPreviewTransformer,
            ...transformers,
          ]);
        },
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new EnvWithTailwindMain();
  }
}

EnvWithTailwindAspect.addRuntime(EnvWithTailwindMain);
