import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import styled from 'styled-components';

export type ButtonProps = {
  /**
   * Extra classes for the button, overwrite the default ones
   */
  extraClasses?: string;
  /**
   * Could be primary or secondary
   */
  color?: 'primary' | 'secondary';
  /**
   * Could be filled or outlinej
   */
  type?: 'filled' | 'outline';
  /**
   * Icon to be displayed 
   */
  icon?: ReactNode;
  /**
   * Any children to be displayed
   */
  children?: ReactNode;
};

const FilledButtonStyled = styled.button`
  background-color: var(--${({ color }) => color}100);
  border: 2px solid var(--${({ color }) => color}100);
  color: var(--text80);
  &:hover {
    border: 2px solid var(--${({ color }) => color}70);
    background-color: var(--${({ color }) => color}70);
  }
`;
const OutlineButtonStyled = styled.button`
  border: 2px solid var(--${({ color }) => color}100);
  color: var(--${({ color }) => color}100);
  &:hover {
    background-color: var(--${({ color }) => color}80);
  }
`;

export function Button({
  children,
  extraClasses = '',
  color = 'primary',
  type = 'filled',
}: ButtonProps) {
  const classNameMerged = twMerge(
    'w-full flex items-center justify-center px-6 py-2 text-base font-bold rounded-md active:drop-shadow-lg',
    extraClasses
  );
  const ButtonStyled =
    type === 'filled' ? FilledButtonStyled : OutlineButtonStyled;
  return (
    <ButtonStyled color={color} className={classNameMerged}>
      {children}
    </ButtonStyled>
  );
}
