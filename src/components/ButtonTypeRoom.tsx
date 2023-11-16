import { useState } from "react";

interface ButtonTypeRoomProps {
  text: string;
}

export default function ButtonTypeRoom({ text }: ButtonTypeRoomProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="w-1/2 p-2">
      <button
        className={`w-full text-lg ${
          isClicked ? "border-l-4 border-blue-500 text-blue-500" : ""
        }`}
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </div>
  );
}
