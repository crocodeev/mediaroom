

export default function DeleteButton(){

    return(
        <a className="btn-floating waves-effect waves-light red btn modal-trigger hoverable">       
            <i className="material-icons">delete</i>
            <style jsx>{`
            a {
                margin: 5px;
            }
            `}</style>
        </a>
    )
}