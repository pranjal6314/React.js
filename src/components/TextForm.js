import React ,{ useState }  from "react";

export default function TextForm(props) {
    const uppercase=()=>{
            // console.log('clicked :', text)
            // setText("you clicked the button for converting text to uppercase! :)")
            let newtext=text.toUpperCase();
            setText(newtext);
            props.showAlert("Text is converted into uppercase .","success")
    }
    const clear=()=>{
            let newtext=""
            setText(newtext);
            props.showAlert("Textbox is cleared .","success")
    }
    const lowercase=()=>{
            let newtext=text.toLowerCase();
            setText(newtext);
            props.showAlert("Text is converted into lowercase .","success")
    }
    const handleOnChange=(events)=>{
            // console.log("changed")
           
            setText(events.target.value)
    }
    const sentence=()=>{
        let first=text.charAt(0);
        let upper=first.toUpperCase();
        let newtext=upper+text.slice(1);
        setText(newtext);
        // let firstLett = text.charAt(0);
        // let newLetter= firstLett.toUpperCase(); 
        // setText(newLetter+text.slice(1)); 
}
    const alternating=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const copy=()=>{
        let text=document.getElementById('myBox');
        text.select(); 
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied .","success")
    }
    const download=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const replace=()=>{
        let rep=prompt('Enter the word to be replaced');
        let tobereplaced=new RegExp(rep,'g');
        let toreplace=prompt("Enter the text that you want to replace with:");

        let newtext=text.replace(tobereplaced,toreplace);
        setText(newtext);
    }
    const reverse=()=>{
        let newtext=text.split(' ').reverse().join(' ');
        setText(newtext);
    }
    const whitespaces =()=>{
            // let newtext=text.trim();
            // setText(newtext)
            let newtext=text.split(/[ ]+/);
            setText(newtext.join(" "))
    }
    const [text, setText] = useState('Enter your text');
  return (
    <>
    <div className="container">
  
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">
                    Example textarea
                </label>
                <textarea
                    value={text}
                    onChange={handleOnChange}
                    className="form-control"
                    id="myBox"
                    rows="3"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2 " onClick={clear}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={uppercase}>Convert To Upper Case</button>
            <button className="btn btn-primary mx-2 my-2" onClick={lowercase}>Convert To Lower Case</button>
            <button className="btn btn-primary mx-2 my-2" onClick={sentence}>Convert To Sentence Case</button>
            <button className="btn btn-primary mx-2 my-2" onClick={alternating}>Convert To aLtErNatIng cAsE</button>
            <button className="btn btn-primary mx-2 my-2" onClick={copy}>Copy To Clipboard</button>
            <button className="btn btn-primary mx-2 my-2" onClick={download}>Download Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={replace}>Replaceing Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={reverse}>Reverse Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={whitespaces}>Remove whitespaces  </button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words , {text.length} characters</p>
        <p>{0.008 *(text.split(" ").length -1 )}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    
  );
}
