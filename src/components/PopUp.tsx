interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
}
const datos = [
  { nombre: 'Juan', rut: '12345678-9' },
  { nombre: 'María', rut: '98765432-1' },
  { nombre: 'Carlos', rut: '87654321-0' },
];
const PopUp = ({ isOpen, onClose }: PopUpProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 h-screen w-full">
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative z-10 bg-white p-2 rounded-lg shadow-lg h-1/2 w-1/4 ">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center">
          <h1 className="text-[2vw] font-semibold  mb-0 mt-4">
            Informacion del indicador
          </h1>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Nombre</th>
                <th className="py-2 px-4 border-b">RUT</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((dato, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{dato.nombre}</td>
                  <td className="py-2 px-4 border-b">{dato.rut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PopUp;