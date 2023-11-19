import { useState } from "react";
import PopUp from "./PopUp"

interface BlockProps {
  text: string;
}

export default function Block({ text }: BlockProps) {
  const [popUpButton, setPopUpButton] = useState(false);
  const handleClosePopUp = () => {
    setPopUpButton(false);
  };

  const handleButtonClick = () => {
    setPopUpButton(!popUpButton);
  };
  return (
    <div className="p-2">
      <button
        className={`w-full p-1 rounded-sm ${
          popUpButton ? " text-white bg-blue-500" : ""
        }`}
        onClick={handleButtonClick}
      >
        {text}
      </button>
      <div>
          <PopUp
            isOpen={popUpButton}
            onClose={handleClosePopUp}
          />
        </div>
    </div>
  );
}
