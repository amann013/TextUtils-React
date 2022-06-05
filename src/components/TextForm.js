import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleLoClick=()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)

  }
  const handleClrClick=()=>{
    // console.log("UpperCase was clicked"+text);
    let newText ='';
    setText(newText)

  }

  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value)

  }

  const [text, setText] = useState('')
  // text = "new text";//wrong way to change the state
  // setText = "new text";//correct way to change the state
  
  return (
    <>
    <div className ="Container">
  <h1> {props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClrClick}>Convert to Clear</button>
    </div>
    <div className="container my-3 ">
      <h2> Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
