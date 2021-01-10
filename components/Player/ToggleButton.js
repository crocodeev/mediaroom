import Play from './Play'
import Pause from './Pause'
import { useState } from 'react'
 
export default function ToggleButton(props){

    const [buttonState, setButtonState] = useState(1);

    function click(){
        console.log("clicked");
        setButtonState(!buttonState)
    }    

    return(
        <div className="container container-content-center"
             onClick={() => {
                 click()
                 props.onClick()
             }}
        >

            {
                buttonState ?
                <Play></Play>:
                <Pause></Pause>
            }
        </div>
    )
}