import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { EnvWithTailwindAspect } from './env-with-tailwind.aspect';
import '@owlsolutions/tailwind-test.environments.env-with-tailwind/tailwind/styles.css';

export class EnvWithTailwindPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([_]: [ReactPreview]) {
    const envWithTailwindPreviewMain = new EnvWithTailwindPreviewMain();
    return envWithTailwindPreviewMain;
  }
}

EnvWithTailwindAspect.addRuntime(EnvWithTailwindPreviewMain);
