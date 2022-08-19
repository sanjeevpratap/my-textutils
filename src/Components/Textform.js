import React, { useState } from "react";

function Textform(props) {
  const handleUpClick = () => {
    console.log("hello on click has been clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLwClick = () => {
    console.log("hello on click has been clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleReplaceClick = () => {
    console.log("hello on click has been clicked");

    console.log("hello inpute string is :", { text1 });
    
    let newText = text.replace({text1}, {text2});
    setText(newText);
  };

  // const handleFirstClick = ()=>{
  //     console.log("hello on click has been clicked");
  //     let newText =text.toLowerCase();
  //     setText(newText);

  // }
  const handleOnChange = (event) => {
    console.log("hello on Chage");
    setText(event.target.value);

    //setText(event.target.value1);
  };

  const handleMessageChange = event => {
    // 👇️ access textarea value
    console.log("hello on send mesafsdf");
    setMessage1(event.target.value1);
    setMessage2(event.target.value2);
   
  };

  const [text, setText] = useState("helo i am use state");
  const [text1, setMessage1] = useState("Enter your word here");
  const [text2, setMessage2] = useState("Enter your word here");
  // let text1 = "";
  // let text2 = "";

  return (
    <>
      <div>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLwClick}>
          lowercase
        </button>
        {/* <button className="btn btn-primary" onClick={handleReplaceClick}>
          replace
        </button> */}
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            onClick={handleReplaceClick}
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Replace
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <input
              className="dropdown-item"
              type="text"
              value1={text1}
              onChange={handleMessageChange}
              aria-labelledby="dropdownMenuButton1"
            ></input>
            <input
              className="dropdown-item"
              type="text"
              value2={text2}
              onChange={handleMessageChange}
              aria-labelledby="dropdownMenuButton1"
            ></input>
            ;
          </ul>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          uppercase
        </button>
      </div>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>
          No. of words {text.split(" ").length} and {text.length} Charcter
        </p>
      </div>
    </>
  );
}

export default Textform;
