import React from 'react';
import styled, { keyframes } from 'styled-components';

export type ProgressBarProps = {
  /**
   * Progress to be rendered.
   */
  progress?: number;
  /**
   * Full progress
   */
  total?: number;
};
type ProgressProps = {
  percentage: number;
};

const ProgressBarContainerStyled = styled.div`
  border-color: var(--text100);
`;
const progressAnimation = (percentage: number) => keyframes`
 0% { width: 5%; }
 100% { width: ${percentage}; }
`;
const ProgressStyled = styled.div<ProgressProps>`
  width: ${(props) => props.percentage}%;
  background-color: var(--success);
  animation: ${(props) => progressAnimation(props.percentage)} 1.5s;
`;

export function ProgressBar({ progress = 1, total = 1 }: ProgressBarProps) {
  const percentageRounded = Math.round((progress / total) * 100);
  return (
    <ProgressBarContainerStyled className="w-full h-2 border-b">
      <ProgressStyled
        className="rounded-full h-2"
        percentage={percentageRounded > 100 ? 100 : percentageRounded}
      ></ProgressStyled>
    </ProgressBarContainerStyled>
  );
}
