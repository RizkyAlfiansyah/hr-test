import React from 'react';

const SelectIput = (props) => {
  const { name, label, optionList, ...otherProps } = props;
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <select
        {...otherProps}
        className="w-full p-2 rounded-md border-2 border-gray-100"
      >
        {optionList.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectIput;
