import { useField } from 'formik';
import React from 'react';

interface NumberInputProps {
  label: string; 
  name: string;
}

const NumberInput = ({label, name}: NumberInputProps) =>{
  const [{value}, , {setValue}] = useField({name});
  
  return (              
    <tr>
      <td>
        <p>{label}: </p>
      </td>
      <td>
        <input className='p-1 m-1' value={value} onChange={(event) => setValue(+event.target.value)}/>
      </td>
    </tr>);
};

export default NumberInput;