import { MainRuntime } from '@teambit/cli';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { OwlTemplatesAspect } from './owl-templates.aspect';
import { owlHelper } from './templates/owl-helper';
import { owlReactTailwind } from './templates/owl-react-tw';
import { owlType } from './templates/owl-type';

export class OwlTemplatesMain {
  static slots = [];
  static dependencies = [GeneratorAspect];
  static runtime = MainRuntime;
  static async provider([generator]: [GeneratorMain]) {
    generator.registerComponentTemplate([owlReactTailwind, owlType, owlHelper]);
    return new OwlTemplatesMain();
  }
}

OwlTemplatesAspect.addRuntime(OwlTemplatesMain);
