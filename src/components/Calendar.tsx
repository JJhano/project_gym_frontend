import { useState } from "react";
import Block from "./Block";

const Calendar = () => {
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const timeBlocks = [
    "08:10 - 09:40",
    "09:50 - 11:20",
    "11:30 - 13:00",
    "14:10 - 15:40",
    "15:50 - 17:20",
    "17:30 - 19:00",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const renderDays = () => {
    const currentDay = currentDate.getDate();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const startingDay = firstDayOfMonth.getDay();
    const offset = startingDay > 0 ? startingDay - 1 : 6; // Ajuste para iniciar desde el lunes

    const dayElements = [];

    for (let i = 0; i < daysOfWeek.length; i++) {
      const dayNumber = currentDay - offset + i;

      if (dayNumber > 0 && dayNumber <= daysInMonth) {
        dayElements.push(
          <div key={i} className="text-center">
            <div className="font-bold">
              {daysOfWeek[i]}
              {" " + dayNumber}
            </div>
            <div className="m-1 ">
              {timeBlocks.map((block, blockIndex) => (
                <div key={blockIndex} className="">
                  <Block text={block} />
                </div>
              ))}
            </div>
          </div>
        );
      }
    }

    return dayElements;
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  const handlePrevWeek = () => {
    const prevWeek = new Date(currentDate);
    prevWeek.setDate(currentDate.getDate() - 7);
    setCurrentDate(prevWeek);
  };

  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-2xl m-2 mb-6">
        {months[currentDate.getMonth()]}
      </h2>
      <div className="grid grid-flow-col ">{renderDays()}</div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-200 flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevWeek}
        >
          Semana Anterior
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextWeek}
        >
          Semana Siguiente
        </button>
      </div>
    </div>
  );
};

export default Calendar;
