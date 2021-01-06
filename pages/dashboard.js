import React from 'react'
import { Layout } from '../components/Layout'
import withSession from '../util/session'

const Dashboard = ({id, role}) => {

    return(
        <Layout 
        role={role}>
         <h1>{role}</h1>
         <h1>{id}</h1>     
        </Layout>    

    )
}

export const getServerSideProps = withSession(

    async ({ req, res }) => {
      const { id, role} = req.session.get("user")
  
      if (!id) {
        res.statusCode = 404
        res.end()
        return { props: {} }
      }
  
      return {
          props:{
              id: id,
              role: role
          } 
      }
    }
  )

export default Dashboard