import Layout from "../components/Layout"
import withSession from "../util/session"

//this page we use as server side redirect

const  Home = () => {

  return (
    <Layout />
  )
}

export const getServerSideProps = withSession(
  async ({req, res}) => {

    //trying to destructure object
    const { id = null, role = null } = req.session.get("user") || {}

    //if cookies doesn't exist redirect to login page
    if(!id){
     return{
      redirect:{
        destination: "/login",
        permanent: false
      }
    }
    }
    //check role in cookie and redirect
    switch (role) {
      case "user":
        return{
          redirect: {
            destination: "/player",
            permanent: false
          }
        }
        break
      case "manager":
        return{
          redirect: {
            destination: "/dashboard",
            permanent: false
          }
        }
        break
      case "editor":
        return{
          redirect: {
            destination: "/library",
            permanent: false
          }
        }
        break
      case "editor":
        return{
          redirect: {
            destination: "/control",
            permanent: false
          }
        }  
        break
      default:
        return{
          redirect: {
            destination: "/login",
            permanent: false
          }
        }  
        break
    }
    
  }
)

export default Home
