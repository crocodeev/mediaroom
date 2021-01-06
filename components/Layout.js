import Header from './Header'

export function Layout({role, children}){

    return(
    <div className="container container-content-center">
        <Header role={role} />
        <main>
            { children }
        </main>
    </div>
    )
}