import React, { useState } from "react";

const RutComponent = () => {
  const [ruts, setRuts] = useState([""]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedRuts = [...ruts];
    updatedRuts[index] = event.target.value;
    setRuts(updatedRuts);
  };

  const handleAddRut = () => {
    if (ruts.length < 4) {
      setRuts([...ruts, ""]);
    }
  };

  const handleRemoveRut = (index: number) => {
    const updatedRuts = [...ruts];
    updatedRuts.splice(index, 1);
    setRuts(updatedRuts);
  };

  return (
    <div className="w-1/2">
      {ruts.map((rut, index) => (
        <div key={index} className="flex items-center space-x-2 mt-2">
          <button
            className="bg-red-500 text-white p-1 rounded-md pl-2 pr-2"
            onClick={() => handleRemoveRut(index)}
          >
            X
          </button>
          <div className="rounded-md border-2 border-black  focus-within:border-blue-500 p-1">
            <input
              className="p-1 w-full outline-none"
              type="text"
              value={rut}
              onChange={(event) => handleChange(index, event)}
              placeholder="Rut"
            />
          </div>
        </div>
      ))}

      {ruts.length < 4 && (
        <div className="flex items-center justify-center text-2xl p-2">
          <button
            className="bg-green-500 text-white p-1 rounded-md pl-2 pr-2"
            onClick={handleAddRut}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default RutComponent;
