import React, { useState } from "react";

function Textform(props) {
  const handleUpClick = () => {
    console.log("hello on click has been clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("converted to Uppercase","primary");
  };
  const handleLwClick = () => {
    console.log("hello on click has been clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("converted to Lowercase","primary");
  };
  const handleReplaceClick = () => {
    console.log("hello on click has been clicked");

    console.log("hello inpute string is :", { text1 });

    let newText = text.replaceAll(`${text1}`, `${text2}`);
    // let newText= "hi it is me"
    setText(newText);
    props.showalert("Word replaced","primary");
  };

  const handleCopyClick = () => {
    const newText = { text };
    setText(newText);
  };
  const handleOriginalClick = () => {
    const newText = { text };
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

  const handleMessageChange1 = (event) => {
    // 👇️ access textarea value

    setMessage1(event.target.value);
    console.log(setMessage1);
    // setMessage2(event.target.value);
  };
  const handleMessageChange2 = (event) => {
    // 👇️ access textarea value

    // setMessage1(event.target.value);
    // console.log(setMessage1);
    setMessage2(event.target.value);
    console.log(setMessage2);
  };

  const [text, setText] = useState("helo i am use state");
  const [text1, setMessage1] = useState("");
  const [text2, setMessage2] = useState("");
  // let text1 = "";
  // let text2 = "";

  return (
    <>
      <div>
        <div
          className="mb-3"
          style={{ color: props.mode === `light` ? `black` : `white` }}
        >
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === `dark` ? `grey` : `white`,
              color: props.mode === `light` ? `black` : `white`,
            }}
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
        {/* <div className="dropdown"> */}
        <button
          className="btn btn-primary dropdown-toggle"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Replace
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <input
            className="dropdown-item"
            type="text"
            value={text1}
            onChange={handleMessageChange1}
            aria-labelledby="dropdownMenuButton1"
          ></input>
          <input
            className="dropdown-item"
            type="text"
            value={text2}
            onChange={handleMessageChange2}
            aria-labelledby="dropdownMenuButton1"
          ></input>
          <button className="btn btn-secondary" onClick={handleReplaceClick}>
            Replace
          </button>
        </ul>
        {/* </div> */}
        <button className="btn btn-primary" onClick={handleCopyClick}>
          copy
        </button>
        <button className="btn btn-primary" onClick={handleOriginalClick}>
          original
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
      <div
        className="container my-4"
        style={{ color: props.mode === `light` ? `black` : `white` }}
      >
        <h3>Your Text Summary</h3>
        <p>
          No. of words {text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} Charcter
        </p>
      </div>
      <div
        className="container  my-3"
        style={{ color: props.mode === `light` ? `black` : `white` }}
      >
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}

export default Textform;
