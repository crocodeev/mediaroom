export default function UserStatus({isActive}){

    if(isActive){

        return (
        <a className="btn-small green ">       
        <i className="material-icons">thumb_up</i>
        </a>)
        
    }else{
        return (
            <a className="btn-small  red ">       
            <i className="material-icons">thumb_down</i>
            </a>)
    }
} 