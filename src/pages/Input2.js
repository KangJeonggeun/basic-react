import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    //inputs[id] = value;
    setInputs({
      ...inputs, // copy the inputs and make the new object
      [id]: value,
    });
  };
  return (
    <div>
      <div>
        <label>name</label>
        <input type="text" id="name" value={name} onChange={onChange}></input>
      </div>
      <div>
        <label>email</label>
        <input
          value={email}
          id="email"
          onChange={onChange}
          type="email"
        ></input>
      </div>
      <div>
        <label>phone number</label>
        <input type="tel" id="tel" value={tel} onChange={onChange}></input>
      </div>
      <p>name:{name}</p>
      <p>email:{email}</p>
      <p>tel:{tel}</p>
    </div>
  );
};
export default Input2;
