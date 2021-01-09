import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import UserStatus from './UserStatus'

export default function ListElement ({
    name,
    login,
    channels,
    active,
    index,
    openModal,
}) {

    return(
        <tr key={index}>
            <th>
                {name}
            </th>
            <th>
                {login}
            </th>
            <th>
                {channels.map( (elem, index) => <h6 key={index}>{elem + ' '}</h6>)}
            </th>
            <th>
             <UserStatus isActive={active}/>
            </th>
            <th>
            <EditButton
            index={index} 
            openModal={openModal}/>
            <DeleteButton />
            </th>
        </tr>
    )

}