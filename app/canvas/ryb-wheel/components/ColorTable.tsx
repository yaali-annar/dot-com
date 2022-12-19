import React, { FC } from 'react';

import { useColors } from '../context';
import ColorRow from './ColorRow';

const clampHue = (value:number) => (value + 360) % 360;

const ColorTable: FC = () => {
  const { hue, hueOffset, setHueOffset } = useColors();

  const hues = [
    clampHue(hue-hueOffset), clampHue(hue), clampHue(hue+hueOffset)];

  return (
    <>
      <div className='flex items-center mt-4'>
        <label htmlFor="offset">Offset: </label>
        <input 
          className='mx-2'
          max="180"
          min="0" 
          onChange={event=>setHueOffset(+event.target.value)}
          type="range" 
          value={hueOffset}
        />
        <input readOnly className='p-1' type="text" width={60} value={hueOffset} />
      </div> 
      <table>
        <thead>
          <tr>          
            <td>Color</td>
            <td>Degree (RYB)</td>
            <td>Hue (HSV)</td>
            <td>Hex</td>
          </tr>
        </thead>
        <tbody>
          {hues.map((hue, index) => (<ColorRow key={index} hue={hue} />))}
        </tbody>
      </table>
    </>
  );
};

export default ColorTable;
