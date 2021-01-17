import { Select } from 'react-materialize';

export default function Channel({
  channels,
  onChange
}){

   return(
    <div className="container container-content-center">
    <form onChange={ event => onChange(event)}>
    <Select
    id="Channel"
    multiple={false}
    onChange={function noRefCheck(){}}
    options={{
      classes: 'white-dropdown-trigger',
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
        outDuration: 250,
      }
    }}
    value="hard"
  >
    <option
      disabled
      value=""
    >
      Choose your channel
    </option>
    {channels.map((elem) => <option key={elem} >{elem}</option>)}
  </Select>
  </form>
  <style jsx global>
      {
      `
      
      .select-wrapper .caret{
        fill: white;
      }

      .select-wrapper input.select-dropdown{
        border-bottom: 2px solid #ffffff;
        color: #ffffff;
        font-size: 18px;
      }

      .select-wrapper input.select-dropdown:focus{
        border-bottom: 2px solid #ffffff;
      }

      .select-wrapper input.select-dropdown:focus{
        border-bottom: 2px solid #ffffff;
      }

      .dropdown-content li > a, .dropdown-content li > span{
        color: grey;
      }

      `
      }
    </style> 
  </div>
  
   )
}
