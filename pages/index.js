import Head from 'next/head'
import Login from '../components/Login'

const  Home = () => {

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

export const getServerSideProps = ({req, res}) => {
  
  if( !('session' in req) ){

    return{
      redirect:{
        destination: '/login',
        permanent: false
      } 
    }
  } 

  return {
    props:{

    }
  }

}

export default Home
