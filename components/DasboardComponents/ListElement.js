import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import UserStatus from './UserStatus'

export default function ListElement ({
    name,
    login,
    channels,
    active,
    index
}) {

    return(
        <tr>
            <th>
                {name}
            </th>
            <th>
                {login}
            </th>
            <th>
                {channels.map( elem => <h6>{elem + ' '}</h6>)}
            </th>
            <th>
             <UserStatus isActive={active}/>
            </th>
            <th>
            <EditButton />

            <DeleteButton />
            </th>
        </tr>
    )

}