import React from 'react';
import { Button } from './button.tailwind';
import { BaseTheme } from '@owlsolutions/tailwind-test.themes.base-theme';
//import { MercadoTheme } from '@owlsolutions/tailwind-test.themes.mercado-theme';
import { LightTheme } from '@owlsolutions/tailwind-test.themes.light-theme';
import { ChevronDownIcon } from '@heroicons/react/solid';

export const PrimaryButtonLightTheme = () => (
  <LightTheme>
    <Button>Hello world!</Button>
  </LightTheme>
);

export const WithIcon = () => (
  <LightTheme>
    <Button>
      Icon
      <ChevronDownIcon className="h-7 text-inherit" />
    </Button>
  </LightTheme>
);
export const PrimaryOutline = () => {
  return (
    <LightTheme>
      <Button type="outline">Hello world!</Button>
    </LightTheme>
  );
};
export const Secondary = () => {
  return (
    <LightTheme>
      <Button color="secondary">Hello world!</Button>
    </LightTheme>
  );
};
export const SecondaryOutline = () => {
  return (
    <LightTheme>
      <Button color="secondary" type="outline">
        Hello world!
      </Button>
    </LightTheme>
  );
};

/*export const BasicButtonBaseTheme = () => {
  return (
    <BaseTheme>
      <Button>Hello world!</Button>
    </BaseTheme>
  );
};

export const BasicButtonMercadoTheme = () => {
  return (
    <MercadoTheme>
      <Button>Hello world!</Button>
    </MercadoTheme>
  );
};*/

export const ButtonWithExtraClassesBaseTheme = () => {
  return (
    <BaseTheme>
      <Button extraClasses="bg-indigo-100 text-indigo-700 border-indigo-100 hover:bg-indigo-200 hover:border-indigo-200">
        Hello world!
      </Button>
    </BaseTheme>
  );
};
