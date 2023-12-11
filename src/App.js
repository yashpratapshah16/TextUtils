import { useState } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");

  const handleClick = () => {
    console.log("hello");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1c1919";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <MyNavbar mode={mode} handler={handleClick} />
      <Routes>
        <Route path="/" element={<Textform mode={mode} />} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
      <Footer mode={mode}/>
    </>
  );
}

export default App;
