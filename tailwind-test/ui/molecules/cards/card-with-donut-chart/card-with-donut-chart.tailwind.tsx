import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { useTheme } from '@owlsolutions/tailwind-test.themes.base-theme';
import { Card } from '@owlsolutions/tailwind-test.ui.atoms.card';
import { CheckCircleIcon } from '@heroicons/react/solid';

type Data = {
  name: string;
  value: number;
  fillColor?: string;
};
export type CardWithDonutChartProps = {
  title: string;
  data: Data[];
};
const PrimaryColorWrapper = styled.div`
  color: var(--primary100);
`;

const getDataWithColors = (data: Data[], colors: string[]) =>
  data.map((item: Data, index: number) => ({
    ...item,
    fillColor: colors[index % colors.length],
  }));

export function CardWithDonutChart({ title, data }: CardWithDonutChartProps) {
  const { primary100, success, warning, errorDelete } = useTheme();
  const dataWithColors = getDataWithColors(data, [
    warning,
    errorDelete,
    success,
  ]);
  return (
    <Card>
      <div className="w-full flex flex-col gap-5">
        {title}
        <div className="flex justify-center">
          <DonutChart
            theme={{ primary100, success, warning, errorDelete }}
            data={dataWithColors}
          />
        </div>
        <div className="flex w-full flex-wrap gap-3 justify-between">
          {dataWithColors.map((d: Data, index) => (
            <div key={index} className="w-2/5 flex flex-row gap-2 items-center">
              <CheckCircleIcon
                style={{ color: d?.fillColor ?? 'success' }}
                className="h-6"
              />
              <PrimaryColorWrapper className="text-sm">
                {d.name} ({d.value})
              </PrimaryColorWrapper>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
const DonutChart = ({ theme, data }) => {
  const COLORS = [theme.warning, theme.errorDelete, theme.success];
  return (
    <PieChart width={130} height={130}>
      <Pie
        data={data}
        innerRadius={50}
        outerRadius={65}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry: Data, index: number) => (
          <Cell key={`cell-${index}`} fill={entry.fillColor} />
        ))}
        <Label
          value={data.reduce((acc: number, item: Data) => acc + item.value, 0)}
          position="centerTop"
          className="font-bold text-inherit"
          style={{ transform: 'translateY(-25px)', color: theme.primary100 }}
          fontSize="18px"
        />
        <Label
          value="Order"
          className="font-bold text-inherit"
          position="center"
          fontSize="18px"
          style={{ color: theme.primary100 }}
        />
        <Label
          value="Lines"
          position="centerBottom"
          className="font-bold text-inherit"
          style={{ transform: 'translateY(25px)', color: theme.primary100 }}
          fontSize="18px"
        />
      </Pie>
    </PieChart>
  );
};
