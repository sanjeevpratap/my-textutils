import React from "react";
import { useState } from "react";
import "./App.css";
import Navabar from "./Components/Navabar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import About from "./Components/About";

// import {  Routes, Route } from 'react-router-dom';

function App(props) {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1200);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("dark mode has beem enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "grey";
      showalert("light mode has beem enabled", "success");
    }
  };
  const togglemodered = () => {
    document.body.style.backgroundColor = "red";
  };
  let red = "red";

  return (
    <>
    <>
      <Navabar
        title="My-Textutils"
        titleabout="About us"
        mode={mode}
        togglemode={togglemode}
        togglemodered={togglemodered}
        red={red}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <>
          {/* <Route exact path="/about" element={<About />}/> */}
            {/* <About />
          </Route> */}
          {/* <Route exact path="/" element={ */}
          <Textform
              heading="Enter the text to Analyse"
              mode={mode}
              showalert={showalert}
            />
             {/* }/> */}
           
        </>
      </div>
      </>
    </>
  );
}

export default App;
