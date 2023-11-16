import Information from "./components/Information";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-center text-2xl font-bold">PROJECT GYM</h1>
      <div className="flex-1 grid gap-2 grid-cols-[2fr,1fr] m-6 mt-1">
        <div className="border-2">
          <Calendar />
        </div>
        <div className="">
          <Information />
        </div>
      </div>
    </div>
  );
}

export default App;
