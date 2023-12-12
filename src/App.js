import { useState } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import MyAlert from "./components/MyAlert";

function App() {
  const [mode, setMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      color: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const handleClick = () => {
    if (mode) {
      document.body.style.backgroundColor = "white";
      handleAlert("Light Mode Enable!", "green");
    } else {
      document.body.style.backgroundColor = "#1c1919";
      handleAlert("Dark Mode Enable!", "green");
    }
    setMode(!mode);
  };

  return (
    <>
      <MyNavbar mode={mode} handler={handleClick} />
      <MyAlert alert={alert} />
      <Routes>
        <Route path="/" element={<Textform handler={handleAlert} mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </>
  );
}

export default App;
