import React from 'react';

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`bg-blue-800 text-white font-md py-2 px-4 rounded mt-3 `}>
      {children}
    </button>
  );
};

export default Button;
