import Header from './Header'
import { useEffect } from 'react'



export function Layout({role, children}){

    return(
    <div className="container">
        <Header role={role} />
        <main>
            { children }
        </main>
    </div>
    )
}