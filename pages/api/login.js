// login 
import dbConnect from '../../util/mongoosedb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import  withSession  from '../../util/session'
import { redirectPathSwitch } from '../../util/redirect'


async function handler (req, res) {

    if(req.method === "POST"){
      //take credetial from request

      const { login, password } = await req.body


      try{

        await dbConnect()

        const {
          _id,
          passwordHash,
          role 
        } = await User.findOne({ login })

        //compare passwords
        const match = await bcrypt.compare(password, passwordHash)
        
        if(match){

          req.session.set('user', {
            id: _id,
            role: role
          })
          await  req.session.save()
          
          const path = redirectPathSwitch(role)

          res.redirect(301, path)
          res.end()
        }else{
          return res.status(400).json({ message: "user or password doesn't exist"})
        }
    }catch (error) {
      console.log(error)
      const { response } = error
      return response
        ? res.status(response.status).json({ message: response.statusText })
        : res.status(400).json({ message: error.message })
    }
  }
}

  export default withSession(handler)