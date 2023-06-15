import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    const handledupclick = () => {
        let newtext = text.toUpperCase()

        console.log("heybby" + text)
        props.showAlert("Text is now uppercase  ", "success")

        settext(newtext)
    }
    const handledloclick = () => {
        let newtext = text.toLowerCase()

        console.log("heybby" + text)
        settext(newtext)
        props.showAlert("Text is now lowecase", "success")
    }
    const handledonchange = (e) => {
        console.log("handled on change")
        settext(e.target.value)

    }
    const clearclick=(e)=>{
        console.log("clear")
        
        settext("")
       props.showAlert("text-board is clear","success")
       
        

    }
    const copytext=()=>{
        console.log("copied")
        let text = document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is copied", "success")
    }


    const [text, settext] = useState("")
    return (
        <>
            <div>
                <h1 style={{ color: props.mode === 'dark' ? "white" : "black" }} >{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? "grey " : "white", color: props.mode === 'light' ? "black" : "white", cursorColor: props.mode === 'light' ? "black" : "white" }} onChange={handledonchange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handledupclick} >Convert to uppercase </button>
                <button className="btn btn-primary mx-1" onClick={handledloclick} >Convert to Lowercase </button>
                <button className="btn btn-primary mx-1" onClick={clearclick} >Clearall </button>
                <button className="btn btn-primary mx-1" onClick={copytext} >Copy to Clipboard </button>
            </div>

            <div className="container">
                <h1 style={{ color: props.mode === 'dark' ? "white" : "black" }}>Your Text summary</h1>
                <p style={{ color: props.mode === 'light' ? "black" : "white" }}>{text.split(" ").length} words and {text.length} charaters</p>
                <p style={{ color: props.mode === 'light' ? "black" : "white" }}>{0.008 * text.split(" ").length} Minutes read</p>
                <h2 style={{ color: props.mode === 'light' ? "black" : "white" }}>Preview</h2>
                <p style={{ color: props.mode === 'light' ? "black" : "white" }}>{text.length>0?text:"Enter something in above box" }</p>

            </div>
        </>
    )
}
