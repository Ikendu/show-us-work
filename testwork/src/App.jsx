import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-0 m-0">
      <div className=" grid grid-flow-col">
        <div className=" col-span-1">
          <Sidebar />
        </div>
        <div className=" col-span-5">
          <MainSection />
        </div>
      </div>
    </div>
  );
}

export default App;
