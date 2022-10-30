import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        {/* Feed (Middle) */}
        {/* Widgets (Right Side) */}
      </div>
    </div>
  );
}

export default App;
