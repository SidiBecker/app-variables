import React, { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { InputColor } from '../InputColor/InputColor';
import { AllColors, ColorsEnum } from '../../Utils/ColorsEnum';
import {
  Color,
  copyVariables,
  getColorVariable,
  setColorVariable,
} from '../../Utils/Utils';
import './Settings.scss';

export const Settings = () => {
  const [colors, setColors] = useState<Array<any>>([]);

  useEffect(() => {
    let colorList = AllColors.map((colorObj) => {
      return {
        ...colorObj,
        color: getColorVariable(colorObj.variable),
        enabled: !colorObj.optional,
      };
    });

    setColors(colorList);
  }, []);

  function onChangeColor({ name, color }: Color) {
    setColorVariable({ name, color });

    colors.forEach((colorObj) => {
      if (colorObj.variable === name) {
        colorObj.color = color;
      }
    });

    const colorsCopy = colors.map((e) => e);
    colorsCopy.forEach((colorObj) => {
      if (
        !colorObj.enabled &&
        ((name === ColorsEnum.BACKGROUND.variable &&
          colorObj.variable === ColorsEnum.LOGIN_BUTTON_COLOR.variable) ||
          (name === ColorsEnum.OUTLINE_COLOR.variable &&
            colorObj.variable === ColorsEnum.LOGIN_TEXT_COLOR.variable) ||
          (name === ColorsEnum.BACKGROUND.variable &&
            colorObj.variable === ColorsEnum.SPLASH_BACKGROUND.variable))
      ) {
        colorObj.color = color;
        setColorVariable({ name: colorObj.variable, color });
        setColors(colorsCopy);
      }
    });
  }

  function onEnableColor({ name, enabled }: any) {
    colors.forEach((color) => {
      if (color.variable === name) {
        color.enabled = enabled;
      }
    });

    if (!enabled) {
      if (name === ColorsEnum.SPLASH_BACKGROUND.variable) {
        onChangeColor({
          name: ColorsEnum.BACKGROUND.variable,
          color: getColorVariable(ColorsEnum.BACKGROUND.variable),
        });
      }

      if (name === ColorsEnum.LOGIN_BUTTON_COLOR.variable) {
        onChangeColor({
          name: ColorsEnum.BACKGROUND.variable,
          color: getColorVariable(ColorsEnum.BACKGROUND.variable),
        });
      }

      if (name === ColorsEnum.LOGIN_TEXT_COLOR.variable) {
        onChangeColor({
          name: ColorsEnum.OUTLINE_COLOR.variable,
          color: getColorVariable(ColorsEnum.OUTLINE_COLOR.variable),
        });
      }
    }
  }

  return (
    <div className="settings">
      <div className="settings-container">
        <form>
          {colors.map((color, index) => {
            return (
              <InputColor
                key={`config_${index}`}
                label={color.name}
                color={color.color}
                name={color.variable}
                type={color.type}
                optional={color.optional}
                onChangeColor={onChangeColor}
                onEnableColor={onEnableColor}
              />
            );
          })}
        </form>
        <div className="copy" onClick={() => copyVariables(colors)}>
          <FaCopy size={20} />
          <span>Copiar configurações</span>
        </div>
      </div>
    </div>
  );
};
