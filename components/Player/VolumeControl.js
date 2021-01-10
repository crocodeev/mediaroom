
import Slider from 'react-input-slider'

export default function TrackPosition(){

    const sliderStyle={
        track: {
          backgroundColor: '#f5f5f5',
          width: "50%",
          height: 4,
          //position: "relative",
          //left: "20%"
        },
        active: {
          backgroundColor: 'white'
        },
        thumb: {
          width: 20,
          height: 20
        },
        disabled: {
          opacity: 0.5
        }
  }
  
  const divStyle={
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
  }

    return(
      <div style={divStyle}>
         <Slider
            axis="x"
            styles={sliderStyle}
            />
      </div>      
    )
}