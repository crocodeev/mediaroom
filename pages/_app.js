import '../styles/globals.css'
import '../node_modules/materialize-css/dist/css/materialize.css'

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
