import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { AllColors } from '../../Utils/ColorsEnum';
import { copyVariables, getColorVariable } from '../../Utils/Utils';
import { InputColor } from '../InputColor/InputColor';
import './Settings.scss';

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
