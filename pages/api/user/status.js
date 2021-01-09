import dbConnect from '../../util/mongoosedb'
import User from '../../models/User'
import  withSession  from '../../util/session'
import { redirectPathSwitch } from '../../util/redirect'


async function handler (req, res) {

    if(req.method === "POST"){

      const { login, status } = await req.body


      try{

        await dbConnect()

        await User.findOneAndUpdate({ login }, { })

        //compare passwords
        const match = await bcrypt.compare(password, passwordHash)

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