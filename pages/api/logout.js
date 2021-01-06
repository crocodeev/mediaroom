import withSession from '../../util/session'

async function handler(req, res){
    await req.session.destroy()
    res.status(200).send("")
}

export default withSession(handler)

