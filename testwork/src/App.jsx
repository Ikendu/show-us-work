import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import SliderMobile from "./components/SliderMobile";

function App() {
  return (
    <div className="p-0 m-0 w-screen relative">
      <div className=" grid grid-flow-col">
        <div className=" ">
          <Sidebar />
        </div>
        <div className=" ">
          <MainSection />
        </div>
      </div>
      <div className="lg:hidden border-t-2 rounded-t-3xl bottom-0 z-20">
        <SliderMobile />
      </div>
    </div>
  );
}

export default App;
