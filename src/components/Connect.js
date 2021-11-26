import { Link } from 'react-router-dom';
import '../style/LoginUi.css';
import profile from "./../image/a.png";

const Connect = (props) => {
    return (
      <div className="login-main">
       <div className="sub-main">
         <div>
           <div className="imgs">
             <div className="container-image">
               <img src={profile} alt="profile" className="profile"/>
             </div>
           </div>
    
           <div>
            <h1>{props.page}</h1>
              
            {props.children}
            <p className="link">
            <Link className="login-urls" to={props.actionUrl}>{props.action}</Link>
            Or
            <Link className="login-urls" to={props.actionUrl2}>{props.action2}</Link>
  
            </p> 
           </div>
         </div>
  
       </div>
      </div>
    )
}

export default Connect;