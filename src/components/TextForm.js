import React, {useState} from "react";

export default function TextForm(props) {
  const [text,setText] = useState('');
  // text = "new Text " Wrong Way to change State
  // setText("new Text") Correct way to change state

  const handleUpClick = ()=>{
    // console.log("Button Clicked" + text); 
    var newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    var lowerText = text.toLowerCase();
    setText(lowerText);
  }
  const handleClearClick = ()=>{
    var clearText = '';
    setText(clearText);
  }
  const handleRevClick = ()=>{
    var revText = "";
    for (let index = text.length-1; index >=0; index--) {
      revText+= text[index];
    }
    setText(revText);
  }
  const handleCopy = ()=>{
    // console.log("I am copinng");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
  }
  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleOnChange = (event)=>{
    // console.log("On Change "); 
    setText(event.target.value);
  }

  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-2">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='dark'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleRevClick}>Reverse String</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.length===0?0:text.split(" ").length} Words And {text.length} Characters</p>
      <p>{text.length===0?0:0.008 * text.split(" ").length} Minutes to Read.</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter text in Above box to preview Here ...'}</p>
    </div>
    </>
  );
}
