import React, { useState } from "react";

const InputText = () => {
  const [textValue, setTextValue] = useState("");
  const onChange = (e) => {
    setTextValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={textValue} onChange={onChange} />
      <br />
      <p>{textValue}</p>
    </div>
  );
};
export default InputText;
