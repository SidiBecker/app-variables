import React from 'react';
import { AllColors } from '../../Utils/ColorsEnum';
import { RGBToHex } from '../../Utils/Utils';
import { InputColor } from '../InputColor/InputColor';
import './Settings.scss';

function getColorVariable(variable: string): string {
  let color = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

  if (color.includes('#')) {
    return color;
  }

  return RGBToHex(color);
}

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-container">
        <form>
          {AllColors.map((color) => (
            <InputColor
              label={color.name}
              color={getColorVariable(color.variable)}
              name={color.variable}
            />
          ))}
        </form>
      </div>
    </div>
  );
};
