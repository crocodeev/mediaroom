import { Select } from 'react-materialize'


export default function Selector ({ availableChannels, previousChannels }){
    
    return(
        <Select
            id="Select"
            multiple
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
            value={previousChannels}
            >
            <option
                disabled
                value=""
            >
                Choose channels
            </option>
            
            { availableChannels.map( (elem) =>  <option value={elem.name}>{elem.name}</option>  ) }

            </Select>
    )
}