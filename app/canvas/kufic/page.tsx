'use client';
import React, { createRef, useEffect, useState } from 'react';
import {Formik, Form} from 'formik';

import NumberInput from '@/components/form/NumberInput';

import { render } from './engine';

interface FormValues { 
  width: number,
  height: number,
}

const gridSize = 16;
const border = 32;

const Kufic = ()=>{
  const ref = createRef<HTMLCanvasElement>();
  const [form, setForm ] = useState<FormValues>({
    height: 640,
    width: 80
  });

  const {height, width} = form;
  
  useEffect(() =>{
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
  },[height, ref, width]);

  return (
    <div className='p-4'>
      <h1 className='mb-4'>Square Kufoid</h1>
      <div className='flex'>
        <canvas className='border-black border mr-4' ref={ref} height={height+border} width={width+border} />
        <div>
          <Formik initialValues={form} onSubmit={setForm}>
            <Form>
              <table>
                <tbody>
                  <NumberInput label="Width" name="width"/>
                  <NumberInput label="Height" name="height"/>
                </tbody>
              </table>
              <button className='p-1 m-1' type='submit'>Generate</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>); 
};

export default Kufic;