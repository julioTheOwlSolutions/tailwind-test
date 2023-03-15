import React from 'react';
import styled from 'styled-components';
import { Card } from '@owlsolutions/tailwind-test.ui.atoms.card';
import { ProgressBar } from '@owlsolutions/tailwind-test.ui.atoms.progress-bar';

export type CardsWithGoalsProgressProps = {
  title: string;
  goals: any[];
};

const ProgressTextValueStyled = styled.div`
  color: var(--primary100);
`;

export function CardsWithGoalsProgress({
  title,
  goals,
}: CardsWithGoalsProgressProps) {
  return (
    <Card>
      <div className="w-full flex flex-col gap-5">
        {title}
        <div className="flex flex-col gap-4">
          {goals.map((goal, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex justify-between">
                <ProgressTextValueStyled className="text-sm">
                  {goal.name}
                </ProgressTextValueStyled>
                <ProgressTextValueStyled className="font-medium text-sm">
                  {goal.currentProgress}
                </ProgressTextValueStyled>
              </div>
              <ProgressBar progress={goal.progress} total={goal.total} />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
