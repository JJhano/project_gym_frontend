import { useState } from "react";

interface ButtonTypeRoomProps {
  text: string;
}

export default function Block({ text }: ButtonTypeRoomProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="p-2">
      <button
        className={`w-full  ${
          isClicked ? " border-blue-500 text-blue-500" : ""
        }`}
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </div>
  );
}
