import { useState } from 'react'
import { Layout } from '../components/Layout'
import withSession from '../util/session'
import dbConnect from '../util/mongoosedb'
import User from '../models/User'
import Channel from '../models/Channel'
import ListElement from '../components/DasboardComponents/ListElement'
import EditUserForm from '../components/DasboardComponents/EditUserForm'
import Modal from 'react-modal'

const customStyles = {
  content : {
    width                 : '60%', 
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay: {zIndex: 1000}
}

Modal.setAppElement('#__next')

const Dashboard = ({users, availableChannels, role}) => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const [userData, setData] = useState(users)
    const [modalData, setModalData] = useState(0)

    function openModal(event) {
      setModalData(event.target.getAttribute('value'))
      setIsOpen(true)
    }

    function closeModal(){
      setIsOpen(false);
    }



    return(
        <Layout role={role}>


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
           {users.map( (elem, index) => <ListElement
            name={elem.name}
            login={elem.login}
            channels={elem.channels}
            active={elem.active}
            key={index}
            index={index}
            openModal={openModal}
            />)}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Edit User"
          style={customStyles}
        >
          <EditUserForm
          name={userData[modalData].name}
          login={userData[modalData].login}
          status={userData[modalData].active}
          availableChannels={availableChannels}
          previousChannels={userData[modalData].channels}
          closeModal={closeModal}/>
        </Modal>

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

        const users =  await User.find({ role: "user" }, 'name login channels active').exec()
        const availableChannels = await Channel.find({}, 'name').exec()

        return {
          props:{
              users: JSON.parse(JSON.stringify(users)),
              availableChannels: JSON.parse(JSON.stringify(availableChannels)),
              role: role
          } 
      }

      } catch (error) {
        console.log(error)
      }
  
      
    }
  )

export default Dashboard