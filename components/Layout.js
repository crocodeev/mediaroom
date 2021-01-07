import Header from './Header'

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