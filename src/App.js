import React from "react";
import { useState } from "react";
import "./App.css";
import Navabar from "./Components/Navabar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import About from "./Components/About";
// import Parse from "parse/react-native.js";
// import AsyncStorage from '@react-native-community/async-storage';
 import { Routes, Route } from "react-router-dom";
// import { 
//   Platform, 
//   AppRegistry, 
//   DeviceEventEmitter, 
//   NativeEventEmitter, 
//   NativeModules, 
//   Image  // Add Image import
// } from 'react-native';

// Parse.setAsyncStorage(AsyncStorage);

// Parse.initialize('rLLgx2QpY98b9JO1mNdltrTF0vFgGpUikl4rQaaz','GIEUQLa1Rw4ChZp0ClvB1F4eXkqiR17Nhfpl6U7j');
// Parse.serverURL = "https://parseapi.back4app.com"



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
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter the text to Analyse"
                  mode={mode}
                  showalert={showalert}
                />
              }
            />
          </Routes>
        </div>
      </>
    </>
  );
}

export default App;
