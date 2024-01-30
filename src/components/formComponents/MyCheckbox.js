import React from "react";

const MyCheckbox = ({ id, name, label }) => {
  return (
    <div className="flex gap-x-3 text-xl font-semibold mb-3">
      <input id={id} type="checkbox" name={name} className="w-6 h-6" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default MyCheckbox;
