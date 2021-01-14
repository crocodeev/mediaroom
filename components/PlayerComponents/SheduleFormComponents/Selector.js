import { Select } from 'react-materialize'


export default function Selector ({ channels,
                                    onChange }){

    
    return(
        <Select
            id="Select"
            multiple={false}
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
            value={Channels[0].name}
            >
           
            { Channels.map( (elem) =>  <option key={elem.name} value={elem.name}>{elem.name}</option>  ) }

            </Select>
    )
}