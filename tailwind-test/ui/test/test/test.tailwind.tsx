import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import styled from 'styled-components';

export type TestProps = {
  /**
   * Extra classes for the test, overwrite the default ones
   */
  extraClasses?: string;
  /**
   * A node to be rendered in the special component.
   */
  children?: ReactNode;
  text?: string;
};

const TestStyled = styled.div`
  color: white;
`;

export function Test({ 
  children,
  extraClasses = '',
  text = 'Hello World!!',
}: TestProps) {
  const classNameMerged = twMerge('w-full bg-black', extraClasses);

  return <TestStyled className={classNameMerged}>{text}</TestStyled>;
}
