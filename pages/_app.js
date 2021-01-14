import '../styles/globals.css'
import '../node_modules/materialize-css/dist/css/materialize.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  //this for using materialize
  useEffect( async () => {
    if(process.browser){
      const M = await import('materialize-css')
      M.AutoInit()
    }
  }, [])

  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
