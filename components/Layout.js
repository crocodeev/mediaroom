import Head from 'next/head'
import Header from './LayoutComponents/Header'
import { useEffect } from 'react'



export default function Layout({role, openModal, children}){

    return(
    <div>
    <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>      
    <div className="container">
        <Header role={role} openModal={openModal}/>
        <main>
            { children }
        </main>
    </div>
    </div> 
    )
}