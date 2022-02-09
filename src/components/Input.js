import React from "react";

const Input = ({ className, value, setValue }) => {
  return (
    <div className={className}>
      <label className="box"></label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
