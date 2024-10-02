import React, {useState} from 'react'
import { Paper} from '@mui/material/'

import './FontConverter.css'
import './fonts.css'


function FontConverter() {

    const [text, setText] = useState("Hello My name is Krishna!, this project is used to convert text to handwriting using React JS")
    
    return (
        <div className="fontConverter">
            <div className="fontStyler">
                <div className="input_container">
                    <Paper elevation={15} className="paper_input" >
                        <textarea onChange={e => setText(e.target.value)} 
                            className="inputTextField" cols='36' rows='19'>
                            {text}
                        </textarea>
                    </Paper>
                </div>
                <div className="font_selector">
        
                        
                </div>
                <div className="output_container">
                    <Paper elevation={3} square={true} className="paper" id="page" >
                        <p className="output_text" 
                            style={{fontFamily: "'Beth Ellen', cursive", fontSize: `17px`, color: `blue`, 
                            left: '0', paddingLeft:'0.5rem'}}>
                            {text}
                        </p>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default FontConverter

