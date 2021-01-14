import Selector from './Selector'
import { useState, useEffect} from 'react'


export default function EditScheduleForm({
    channels
}){
   
                                                                                                         

   function handleChange(event){

   }
   
   async function handleSubmit(){

   }

    return(

        <div className="row">
          <form className="col s12">

            <div className="row">
            
            </div>

            <div className="row">
            <div className="input-field col s2">
            <a
            onClick={closeModal} 
            className="btn-small waves-effect waves-light orange btn hoverable">       
            Cancel
            </a>
            </div>
            <div className="input-field col s2">
            <a
            onClick={closeModal} 
            className="btn-small waves-effect waves-light green btn hoverable">       
            Submit
            </a>
            </div>
            </div>

          </form>
          </div>
    )
}