import React from 'react';

export type ColorBoxProps = {
  colorName: string;
  value: string;
};

export function ColorBox({ colorName, value }: ColorBoxProps) {
  return (
    <>
      <div
        className="w-5 h-5 rounded-lg border-2 border-black"
        style={{
          background: value,
        }}
      />
      <div>{colorName}</div>
      <div>
        <code>{value}</code>
      </div>
    </>
  );
}
