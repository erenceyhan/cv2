import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter'ı eklemeyi unutmayın
import { ToastContainer } from 'react-toastify';
import Router from "./routes";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/header/Navbar";
function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <BrowserRouter>
    <div className="container">
          <div className="spacer" /> {/* Boşluk ekledik */}
      <Sidebar />
      <main>
        <Navbar />
        <Router />
        <ToastContainer position="bottom-right" />
      </main>
    </div>
  </BrowserRouter>
  );
}
export default App;
