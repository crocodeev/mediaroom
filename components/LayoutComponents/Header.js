import { Howler } from 'howler'
import Router from 'next/router'

export default function Header ({ role, openModal }){

    async function handleLogout(){
        const url = '/api/logout'
        try {
            const response = await fetch(url, {
                method: 'POST',  
              })
            
            //stop music, if logout from player page  
            if(Howler){
              Howler.stop()
            }  

            Router.push('/')  
               
        } catch (error) {
            console.log(error)
        }
        
    }
    
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">MEDIAROOM</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            { role === "manager" ? <li><a onClick={() => console.log("creating user")}>Create</a></li> : null }
            { role === "user" ? <li><a onClick={openModal}>Schedule</a></li> : null }
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
        <style jsx>{`
        nav {
            position: fixed;
            left: 0px;
            top: 0px;
            background: transparent;
            padding-inline: 10px;
        }
        `}</style>
      </nav>
    )
}

/*
<style jsx>{`
        nav {
            top: 0px;
            position: absolute;
            background: transparent;
            padding-inline: 10px;
        }
        `}</style>
 */