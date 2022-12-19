import React from 'react';
import {
  hsvToRgb,
  rgbToHex,
  rybToRgb,
} from '../utils';

type ColorRowProps = {
  hue: number
}

const ColorRow = ({ hue }: ColorRowProps) => {
  const rgbAngle = rybToRgb(hue);
  const rgb = hsvToRgb({ h: rgbAngle, s: 360, v: 360 });
  const hex = rgbToHex(rgb);

  return (
    <tr>
      <td>
        <div
          className="color-box"
          style={{ backgroundColor: `#${hex}` }}
        />
      </td>
      <td >
        <input
          className='p-1'
          value={hue}
          type="text"
          readOnly
        />
      </td>
      <td >
        <input
          className='p-1'
          value={Math.round(rgbAngle)}
          type="text"
          readOnly
        />
      </td>
      <td>
        <input  
          className='p-1'
          value={hex}
          type="text" 
          readOnly/>
      </td>
    </tr>
  );
};

export default ColorRow;
