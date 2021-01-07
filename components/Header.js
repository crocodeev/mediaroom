import Router from 'next/router'

export default function Header ({ role }){

    async function handleLogout(){
        const url = '/api/logout'
        try {
            const response = await fetch(url, {
                method: 'POST',  
              })
            
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
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
        <style jsx>{`
        nav {
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