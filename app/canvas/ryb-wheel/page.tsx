'use client';
import React, { FC } from 'react';
import { ColorProvider } from './context';

import { rybStyle } from './style';
import Wheel from './components/Wheel';
import CursorHandler from './components/CursorHandler';
import ColorTable from './components/ColorTable';

import { cx } from '@emotion/css';

const RYB: FC = () => (
  <ColorProvider>
    <div className={cx(rybStyle, 'p-4')}>
      <h1 className='mb-4'>RYB Wheel</h1>
      <div className="flex">
        <div className="wrapper mr-4">
          <Wheel />
          <CursorHandler />
        </div>
        <div>
          <p>This color wheel uses RYB spectrum.</p>
          <ul className='list-disc ml-4'>
            <li>Red at 0</li>
            <li>Yellow at 120</li>
            <li>Blue at 240</li>
          </ul>
          <ColorTable />
        </div>
      </div>
    </div>
  </ColorProvider>
);

export default RYB;
