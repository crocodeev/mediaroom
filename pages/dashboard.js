import React from 'react'
import { Layout } from '../components/Layout'
import withSession from '../util/session'
import dbConnect from '../util/mongoosedb'
import User from '../models/User'
import ListElement from '../components/DasboardComponents/ListElement'

const Dashboard = ({data}) => {

    return(
        <Layout>
         <table className="highlight">
           <thead>
           <tr>
              <th>Name</th>
              <th>Login</th>
              <th>Channels</th>
              <th>Status</th>
              <th>Actions</th>
          </tr>
           </thead>
           <tbody>
           {data.map( (elem, index) => <ListElement
            name={elem.name}
            login={elem.login}
            channels={elem.channels}
            active={elem.active}
            key={index}
            />)}
           </tbody>
           </table>
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

      try {
        await dbConnect()

        const data =  await User.find({ role: "user" }, 'name login channels active').exec()

        return {
          props:{
              data: JSON.parse(JSON.stringify(data))
          } 
      }

      } catch (error) {
        console.log(error)
      }
  
      
    }
  )

export default Dashboard