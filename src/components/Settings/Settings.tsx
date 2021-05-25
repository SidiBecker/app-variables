import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { toast, ToastOptions } from 'react-toastify';
import { AllColors } from '../../Utils/ColorsEnum';
import { copyToClipboard, RGBToHex } from '../../Utils/Utils';
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

function copyVariables() {
  let ret = '';
  AllColors.forEach((colorObj) => {
    let color = getComputedStyle(document.documentElement)
      .getPropertyValue(colorObj.variable)
      .trim();

    ret += colorObj.config + ': ' + color + '\r\n';
  });

  copyToClipboard(ret);

  const options: ToastOptions = {
    autoClose: 3000,
  };
  toast.success('Copiado para a área de transferência!', options);
}

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-container">
        <form>
          {AllColors.map((color, index) => (
            <InputColor
            key={`config_${index}`}
              label={color.name}
              color={getColorVariable(color.variable)}
              name={color.variable}
            />
          ))}
        </form>
        <div className="copy" onClick={copyVariables}>
          <FaCopy size={20} />
          <span>Copiar configurações</span>
        </div>
      </div>
    </div>
  );
};
