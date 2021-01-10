import Selector from './Selector'
import { useState, useEffect} from 'react'


export default function EditUserForm({ closeModal,
                                   name,
                                   login,
                                   status,
                                   availableChannels,
                                   previousChannels  }){
   
                                                               
   const [userData, setUserData] = useState({ name: '',
                                              login: '',
                                              status: '',
                                              password:'',
                                              channels:[],
                                              error: '' })
                                              
   useEffect(() => {

      const userInitialProfile = {
         name: name,
         login: login,
         status: status,
         password:'**********',
         channels: previousChannels
      }

      setUserData(
         Object.assign({}, userData, userInitialProfile)
      )
      
   }, [])
   

   function handleChange(event){
   
      setUserData(
         Object.assign({}, userData, { 
            // if status checkbox - toggle value
            [event.target.id]: event.target.type === "checkbox" ? event.target.checked : event.target.value 
          })
      )
   }
   
   async function handleSubmit(){

   }

    return(

        <div className="row">
          <form className="col s12">

            <div className="row">
            <div className="input-field col s2">
            <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s8">
            <input id="name" 
                   type="text" 
                   className="validate" 
                   value={userData.name}
                   onChange={handleChange}/>
            </div>
            <div className="input-field col s2">
            <a 
               className="btn-small waves-effect waves-light green btn hoverable">       
            <i className="material-icons">upgrade</i>
            </a>
            </div>
            </div>

            <div className="row">
            <div className="input-field col s2">
            <label htmlFor="login">Login</label>
            </div>
            <div className="input-field col s8">
            <input id="login" 
                   type="text" 
                   className="validate" 
                   value={userData.login}
                   onChange={handleChange} />
            </div>
            <div className="input-field col s2">
            <a 
               className="btn-small waves-effect waves-light green btn hoverable">       
            <i className="material-icons">upgrade</i>
            </a>
            </div>
            </div>

            <div className="row">
            <div className="input-field col s2">
            <label htmlFor="password" >Password</label>
            </div>
            <div className="input-field col s8">
            <input id="password" 
                   type="password" 
                   className="validate" 
                   value="*************"
                   value={userData.password}
                   onChange={handleChange}/>
            </div>
            <div className="input-field col s2">
            <a 
               className="btn-small waves-effect waves-light green btn hoverable">       
            <i className="material-icons">upgrade</i>
            </a>
            </div>
            </div>

            <div className="row">
            <div className="input-field col s2">
            <label htmlFor="status">
            <input id="status" 
                   type="checkbox" 
                   className="filled-in"
                   checked={userData.status}
                   onChange={handleChange}
                   />
            <span>Status</span>
            </label>
            </div>
            <div className="input-field col s10">
            <Selector availableChannels={availableChannels}
                      previousChannels={previousChannels}
                      value={userData.channels}
                      onChange={handleChange} />
            </div> 
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