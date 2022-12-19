import React, { FC, useRef, useState } from 'react';
import { useColors } from '../context';
import {
  WHEEL_INNER_RADIUS,
  WHEEL_OUTER_RADIUS,
} from '../data';
import { getAngle, getCursorPosition, getDistance } from '../engine';

const cursorIsInWheel = (coordinate: number[]) => {
  const distance = getDistance(coordinate);
  return distance < WHEEL_OUTER_RADIUS && distance > WHEEL_INNER_RADIUS;
};

const CursorHandler: FC = () => {
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const { setHue } = useColors();

  const handleMouseMove = (event) => {
    if (!mouseIsDown) {
      return;
    }
    const coordinate = getCursorPosition(cursorRef.current, event);
    if (cursorIsInWheel(coordinate)) {
      let h = getAngle(coordinate);
      h = Math.round(h);
      setHue(h);
    }
  };

  return (
    <div
      ref={cursorRef}
      onMouseDown={() => setMouseIsDown(true)}
      onMouseUp={() => setMouseIsDown(false)}
      onMouseMove={handleMouseMove}
    ></div>
  );
};

export default CursorHandler;
