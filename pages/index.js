import Head from 'next/head'
import Login from '../components/Login'

export default function Home() {

  
  function handleSubmit(event){
    event.preventDefault()
    console.log(event.target)
  }
  


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login />
      </main>

    </div>
  )
}
