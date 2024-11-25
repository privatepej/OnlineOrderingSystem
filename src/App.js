import React from "react";
import { BrowserRouter } from "react-router";
import Navbar from "./component/Navbar";
import AppRoutes from "./navigation/AppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
