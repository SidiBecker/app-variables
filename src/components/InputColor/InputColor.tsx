import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Color } from '../../Utils/Utils';

export function InputColor({
  label,
  name,
  color,
}: InferProps<typeof InputColor.propTypes>) {
  const [colorState, setColorState] = useState({
    name,
    color,
  });

  function onChangeColor({ name, color }: Color) {
    document.documentElement.style.setProperty(name, color);

    setColorState({ name, color });
  }

  return (
    <div className="form-field">
      <input
        type="color"
        id="favcolor"
        name="favcolor"
        value={colorState.color}
        onChange={(ev) =>
          onChangeColor({
            name,
            color: ev.target.value,
          })
        }
      />
      <label>{label}</label>
    </div>
  );
}

InputColor.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
