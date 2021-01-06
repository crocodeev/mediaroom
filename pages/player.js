import React from 'react'
import withSession from '../util/session'
import { Layout } from '../components/Layout'

const Player = ({id, role}) => {
    return(
        <Layout>
        <h1>PLAYER</h1>    
        <p>
            {role}
        </p>
        <br/>
        <p>
            {id}
        </p>
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

export default Player