import React, { useState } from "react";

const Textform = (props) => {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert('Converted To Upercase', 'suceess');
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert('Converted To Lowercase', 'success');
  };
  const handleToClear = () => {
    let newtext = '';
    setText(newtext);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied To textboard', 'suceess');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  

  const [text, setText] = useState("");
  return (
    <div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <form>
          <div className="form-group">
            <h2 className="my-3" >{props.heading} </h2>
            <textarea 
            // showAlert={showAlert}
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
          </div>
          <div className="container my-3">
            <button
              type="button"
              className="btn btn-primary mx-1 my-1"
              onClick={handleUpClick}
              disabled={text.length===0}
            >
              Convert To Uppercase
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1 my-1"
              onClick={handleLoClick}
              disabled={text.length===0}
            >
              Convert To Lowercase
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={handleToClear}
              disabled={text.length===0}
            >
              Clear Text
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={handleCopy}
              disabled={text.length===0}
            >
              Copy
            </button>
          </div>
          <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: 'enter your text above to preview it here '}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Textform;
