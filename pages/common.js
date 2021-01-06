import nextCookie from 'next-cookies'
import { withAuthSync } from '../util/auth'
import { connectToDatabase } from '../util/mongodb'

const Common = ( { isConnected } ) => {


    return(
        <div>
        <h1>Hello World</h1>
        <h1>{ isConnected }</h1>
        </div>
    )
}


Common.getServerSideProps = async (ctx) => {

    const { token } = nextCookie(ctx)


        const { db } = await connectToDatabase()

        const isConnected = await db.isConnected()


   
    return({
        props:{isConnected}
    })
}

export default withAuthSync(Common)