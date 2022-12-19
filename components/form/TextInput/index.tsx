import { useField } from 'formik';
import React from 'react';

interface TextInputProps {
  label: string; 
  name: string;
}

const TextInput = ({label, name}: TextInputProps) =>{
  const [props] = useField({name});

  return (              
    <tr>
      <td>
        <p>{label}: </p>
      </td>
      <td>
        <input className='p-1 m-1' {...props} />
      </td>
    </tr>);
};

export default TextInput;