import React from 'react';

const Input = ({ type,label, value, onChange }) => {
  return (
    <div className='relative mb-2'>
      <label className='leading-7 text-sm text-gray-400'>{label}</label>
      <input className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100  px-3 leading-8 transition-colors duration-200 ease-in-out' type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
