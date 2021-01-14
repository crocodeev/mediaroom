import { useState } from 'react'
import { redirectClient } from '../util/redirect'

export default function Login(){

    const [userData, setUserData] = useState({ login: '', error: '' })


    function handleChange(event){
        setUserData(
            Object.assign({}, userData, { [event.target.id]: event.target.value })
        )
    } 

    async function handleSubmit(event) {
        event.preventDefault()
        setUserData(Object.assign({}, userData, { error: '' }))
    
        const login = userData.login
        const password = userData.password

        const url = '/api/login'
    
        try {
          const response = await fetch(url, {
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, password }),
          })

          if (response.status === 200) {

            //if login successfull, redirect to page, that define in responce 
            redirectClient(response)
            
          } else {
            console.log('Login failed.')
            let error = new Error(response.statusText)
            error.response = response
            throw error
          }
        } catch (error) {
          console.error(
            'You have an error in your code or there are Network issues.',
            error
          )
    
          const { response } = error
          setUserData(
            Object.assign({}, userData, {
              error: response ? response.statusText : error.message,
            })
          )
        }
      }
    

    return(
      <div className="container container-content-center">
        <form
            className="form-login"
            onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field">
                <input type="text"
                      id="login"
                      value={userData.login} 
                      
                      onChange={ event => handleChange(event)}
                      >
                </input>
              </div>  
            </div>

            <div className="row">
              <div className="input-field">
                <input type="password"
                      id="password"
                      
                      placeholder="password"
                      onChange={ event => handleChange(event)}
                      >

                </input>
                </div>
            </div>
            <div className="row">
              <button className="wave-effect btn-large btn-custom" type="submit">SUBMIT</button>
            </div>
          
            <style jsx>
              {
                `
                .input-field {
                  color: rgb(255, 255, 255);
                }

                .input-field label {
                  color: rgb(255, 255, 255);
                }
            
                .input-field input:focus + label {
                  color: rgb(255, 255, 255);
                }
          
                .input-field input:focus {
                  color: rgb(255, 255, 255);
                  border-bottom: 1px solid rgb(255, 255, 255);
                  box-shadow: 0 1px 0 0 rgb(250, 250, 250);
                }
              
                .input-field input.valid {
                  color: rgb(255, 255, 255);
                  border-bottom: 1px solid rgb(255, 255, 255);
                  box-shadow: 0 1px 0 0 rgb(250, 250, 250);
                }
          
                .input-field input.invalid {
                  color: rgb(255, 255, 255);
                  border-bottom: 1px solid rgb(255, 255, 255);
                  box-shadow: 0 1px 0 0 rgb(250, 250, 250);
                }
              
                .input-field .prefix.active {
                  color: rgb(255, 255, 255);
                }

                .input-field:active {
                  color: rgb(255, 255, 255);
                }

                .btn-custom {
                  background: transparent;
                  border: 2px solid white;
                }
                `
              }
            </style>
        </form>
        </div>
    )
}

