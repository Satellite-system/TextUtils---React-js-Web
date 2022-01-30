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
    document.getSelection().removeAllRanges(); //Removes the selected text and make it unselected
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
      <h2>{props.heading}</h2>
      <div className="mb-1">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='dark'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRevClick}>Reverse String</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h3 >Your Text Summary</h3>
      <p>{text.split(" ").filter((element)=>{ return element.length!==0 }).length} Words And {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0 }).length} Minutes to Read.</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter text in Above box to preview Here ...'}</p>
    </div>
    </>
  );
}
