import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import SliderMobile from "./components/SliderMobile";

function App() {
  return (
    <div className="p-0 m-0 w-screen ">
      <div className=" grid grid-flow-col">
        <div className=" ">
          <Sidebar />
        </div>
        <div className=" ">
          <MainSection />
        </div>
      </div>
      <div className="lg:hidden">
        <SliderMobile />
      </div>
    </div>
  );
}

export default App;
