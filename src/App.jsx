import React from "react";
import "./global.css";
import Mobile from "./Mobile";
import Birthday from "./Birthday";
import Sidebar from "./Sidebar";
import Api from "./Api";
import Inputs from "./Inputs";
import { Toaster } from "react-hot-toast";
import Lorem from "./components/Lorem";
import Generator from "./Generator";
import Facebook from "./Facebook";

const App = () => {
  return (
    <>
      <Generator />
      <Toaster />
    </>
  );
};

export default App;
