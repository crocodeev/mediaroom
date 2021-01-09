

export default function EditButton({ openModal, index}){

    return(
        <a
        onClick={(event) => openModal(event)} 
        className="btn-floating waves-effect waves-light orange btn hoverable">       
            <i 
            value={index}
            className="material-icons">edit</i>
            <style jsx>{`
            a {
                margin: 5px;
            }
            `}</style>
        </a>
    )
}