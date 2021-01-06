import style from '../styles/login.module.css'

export default function TestLogin(){
    
    return(
      <div className="row">
        <div className={style.inputField}>
          <input value="Alvin" id="first_name2" type="text" className="validate" />
          <label className="active" for="first_name2">First Name</label>
        </div>
       
      </div>
    )
} 

/*
 <style jsx>
            {
                `
                .input-field label {
                    color: rgb(212, 0, 0);
                  }
                 
                  .input-field input[type=text]:focus + label {
                    color: rgb(255, 0, 242);
                  }
                 
                  .input-field input[type=text]:focus {
                    border-bottom: 1px solid #000;
                    box-shadow: 0 1px 0 0 #000;
                  }
              
                  .input-field input[type=text].valid {
                    border-bottom: 1px solid #000;
                    box-shadow: 0 1px 0 0 #000;
                  }
                  
                  .input-field input[type=text].invalid {
                    border-bottom: 1px solid #000;
                    box-shadow: 0 1px 0 0 #000;
                  }
                
                  .input-field .prefix.active {
                    color: #000;
                  }
                `
            }
        </style>
*/