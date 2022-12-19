import React, { FC, useEffect, useRef } from 'react';
import { useColors } from '../context';
import { canvasProps, CANVAS_DIMENSION } from '../data';
import { renderHuePointer, renderWheel } from '../engine';

const Wheel: FC = () => {
  const wheelRef = useRef<HTMLCanvasElement>(null);
  const huePointerRef = useRef<HTMLCanvasElement>(null);

  const { hue, hueOffset } = useColors();

  useEffect(() => {
    const wheel = wheelRef.current.getContext('2d');
    renderWheel(wheel);
  }, []);

  useEffect(() => {
    const huePointer = huePointerRef.current.getContext('2d');

    huePointer.clearRect(0, 0, CANVAS_DIMENSION, CANVAS_DIMENSION);

    renderHuePointer(huePointer, hue, 20);
    renderHuePointer(huePointer, hue - hueOffset, 10);
    renderHuePointer(huePointer, hue + hueOffset, 10);
  }, [hue, hueOffset]);

  return (
    <>
      <canvas ref={wheelRef} {...canvasProps}></canvas>
      <canvas ref={huePointerRef} {...canvasProps}></canvas>
    </>
  );
};

export default Wheel;
