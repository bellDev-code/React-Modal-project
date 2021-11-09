import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    event.preventDefault();

    setValue(event.target.value);
  };

  return {
    value: value,
    onChange: onChange,
  };
};

export default useInput;
