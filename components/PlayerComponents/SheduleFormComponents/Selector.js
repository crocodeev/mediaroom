import { Select } from 'react-materialize'


export default function Selector ({ channels,
                                    onChange }){

    
    return(
        <Select
            id="Select"
            multiple={false}
            onChange={(event)=>console.log(event.value)}
            options={{
                classes: '',
                dropdownOptions: {
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
                }
            }}
            value={channels[0]}    
            >
           
            { channels.map( (elem) =>  <option  key={elem} value={elem}>{elem}</option>  ) }

            </Select>
    )
}