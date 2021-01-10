

export default function Bar(props){

    return(
        <div className="equlizer_line"
             id={props.id}
             >
            <style jsx>{`
        .equlizer_line {
            height: 0px;
            width: .8rem;
            margin-right: .1rem;
            margin-left: .1rem;
            background: white;
          
            -webkit-transition: height 200ms cubic-bezier(0.4, 0, 0.2, 1);
            -moz-transition: height 200ms cubic-bezier(0.4, 0, 0.2, 1);
            -o-transition: height 200ms cubic-bezier(0.4, 0, 0.2, 1);
            transition: height 200ms cubic-bezier(0.4, 0, 0.2, 1);
          }
      `}</style>
        </div>
    )
}