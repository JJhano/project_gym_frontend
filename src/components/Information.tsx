import RutComponent from "./RutComponent";
import ButtoTypeRoom from "./ButtonTypeRoom";

export default function Information() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-3 h-full">
      <div>
        <ButtoTypeRoom text="Sala de pesas" />
        <ButtoTypeRoom text="Sala multiuso" />
      </div>
      <div className="w-full">
        <RutComponent />
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="border-2 p-2">Enviar</button>
      </div>
    </div>
  );
}
