import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type CardProps = {
  /**
   * Classes to overwrite the default ones
   */
  extraClasses?: string;
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Card({ children, extraClasses = '' }: CardProps) {
  const classNameMerged = twMerge(
    'bg-white p-4 drop-shadow-lg rounded-lg overflow-hidden',
    extraClasses
  );
  return <div className={classNameMerged}>{children}</div>;
}
