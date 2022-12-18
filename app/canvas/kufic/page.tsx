'use client';
import React, { createRef, useState } from 'react';

import { render } from '@/engines/kufic';

const gridSize = 16;
const border = 32;

const Kufic = ()=>{
  const ref = createRef<HTMLCanvasElement>();
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(640);
  
  const generate = () =>{
    const context = ref.current.getContext('2d');   
    context.clearRect(0, 0, width+border, height+border); 
    context.lineCap = 'square';
    context.lineWidth = 8;

    render({ 
      context, 
      gridSize,
      width: width/gridSize, 
      height: height/gridSize,
      border
    } );
  };

  return (
    <div className='p-4'>
      <h1 className='mb-4'>Square Kufoid</h1>
      <div className='flex'>
        <canvas className='border-black border mr-4' ref={ref} height={height+border} width={width+border} />
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>Width: </p>
                </td>
                <td>
                  <input className='p-1 m-1' value={width} onChange={(event) => setWidth(+ event.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Height: </p> 
                </td>
                <td>
                  <input className='p-1 m-1' value={height} onChange={(event) => setHeight(+ event.target.value)}/>
                </td>
              </tr>
            </tbody>
          </table>
          <button className='p-1 m-1' onClick={generate}>Generate</button>
        </div>
      </div>
    </div>); 
};

export default Kufic;