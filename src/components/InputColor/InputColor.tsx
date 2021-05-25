/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Color, HexToRGB, RGBToHex, isColor } from '../../Utils/Utils';
import Toggle from 'react-toggle';

export function InputColor({
  label,
  name,
  color,
  optional,
  type,
  onChangeColor,
  onEnableColor,
}: InferProps<typeof InputColor.propTypes>) {
  const [enabled, setEnabled] = useState(!optional);
  const [colorState, setColorState] = useState({
    name,
    color,
    type,
  });

  function onChange({ color, name }: Color) {
    onChangeColor({ color, name }, { colorState, setColorState });
    setColorState({
      color,
      name,
      type,
    });
  }

  function onChangeToggle(enabled: boolean) {
    onEnableColor({ enabled, name });
    setEnabled(enabled);
  }

  function formatColor({ type, color }: any) {
    if (isColor(color)) {
      if (type.toUpperCase() === 'RGB' && color.includes('#')) {
        color = HexToRGB(color) || '';
      }

      if (type.toUpperCase() === 'HEX' && color.toUpperCase().includes('RGB')) {
        color = RGBToHex(color) || '';
      }
    }
    return color;
  }

  useEffect(() => {
    setColorState({
      name,
      color,
      type,
    });
  }, [color]);

  return (
    <>
      <div className="form-field">
        <input
          type="color"
          id="favcolor"
          name="favcolor"
          value={colorState.color}
          readOnly={!enabled}
          disabled={!enabled}
          onChange={(ev) => {
            onChange({
              name,
              color: ev.target.value,
            });
          }}
        />
        <input
          type="text"
          id="text"
          name="text"
          value={formatColor({
            type: colorState.type,
            color: colorState.color,
          })}
          readOnly={!enabled}
          disabled={!enabled}
          onChange={(ev) => {
            onChange({
              name,
              color: ev.target.value,
            });
          }}
        />
        <label>{label}</label>

        {optional && (
          <Toggle
            className="toggle"
            checked={enabled}
            onChange={(e) => onChangeToggle(e.target.checked)}
          />
        )}
      </div>
    </>
  );
}

InputColor.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  optional: PropTypes.bool.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  onEnableColor: PropTypes.func.isRequired,
};
