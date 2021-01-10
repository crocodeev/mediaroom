import Header from './Header'
import { useEffect } from 'react'

export function Layout({role, children}){

    useEffect( async () => {
        if(process.browser) {
            const M = await import('materialize-css')
            M.AutoInit()
        }
    },[])

    return(
    <div className="container">
        <Header role={role} />
        <main>
            { children }
        </main>
    </div>
    )
}