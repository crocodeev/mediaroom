import { useRef, useEffect } from 'react'
import Bar from './Bar'


export default function Equlizer(props){

    const amplitudeValues = useRef(null)

    const style={
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100px",
        marginBottom: "20px"
    }


      function spectrumSetter(newAmplitudeData){
        amplitudeValues.current = newAmplitudeData
        let domElements = props.frequencyBandArray.map((num) =>
        document.getElementById(num))
        for(let i = 0; i < props.frequencyBandArray.length; i++ ){
            let num = props.frequencyBandArray[i]
            domElements[num].style.height = `${amplitudeValues.current[num]/4}px`
        }
      }

      function runSpectrum(){
        props.getFrequencyData(spectrumSetter)
        requestAnimationFrame(runSpectrum)
      }

     
      useEffect(() => {
        requestAnimationFrame(runSpectrum)
      }, [])


    return(
        <div style={style}>
            {props.frequencyBandArray.map((num) =>
            <Bar
              id={num}
              key={num}
            />
          )}
        </div>
    )
}