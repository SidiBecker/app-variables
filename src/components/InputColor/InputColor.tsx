import React, { useEffect, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Color } from '../../Utils/Utils';
import Toggle from 'react-toggle';

export function InputColor({
  label,
  name,
  color,
  optional,
  onChangeColor,
  onEnableColor,
}: InferProps<typeof InputColor.propTypes>) {
  const [enabled, setEnabled] = useState(!optional);
  const [colorState, setColorState] = useState({
    name,
    color,
  });

  function onChange({ color, name }: Color) {
    onChangeColor({ color, name }, { colorState, setColorState });
    setColorState({ color, name });
  }

  function onChangeToggle(enabled: boolean) {
    onEnableColor({ enabled, name });
    setEnabled(enabled);
  }

  useEffect(() => {
    setColorState({ name, color });
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
  optional: PropTypes.bool.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  onEnableColor: PropTypes.func.isRequired,
};
