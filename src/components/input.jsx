import React from 'react';

const Input = ({ ...otherProps }) => {
  const { name, label } = otherProps;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="w-full p-2 rounded-md border-2 border-gray-100"
        {...otherProps}
      />
    </>
  );
};

export default Input;
