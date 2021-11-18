import React, { useState } from 'react';

import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import key from "./../image/key.png";

import Input from "../components/Input";
import Button from "../components/Button";


const SignUp = ()  =>{
  const [idnp, setIDNP] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [mail, setMail] = useState("");
  const [validIDNP, validateIDNP] = useState(false);
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
  
         <div>
          <h1>Sign Up</h1>
          {
            !validIDNP ? <div> 
              <Input 
                type="text" 
                image={email} 
                altImg="idnp" 
                placeholder="IDNP" 
                onChange={(e)=>setIDNP(e.target.value)}
              />

              <Input
                type="password"
                image={key}
                altImg="key"
                placeholder="Secret Code"
                onChange={(e)=>setCode(e.target.value)}
              />
            <Button
              buttonClassName="login-button"
              title="Next"
              onClick={()=>{
                validateIDNP(true);
              }}
            />
            </div>
            : <div> 
              <Input 
                type="text" 
                image={email} 
                altImg="email" 
                placeholder="E-mail" 
                onChange={(e)=>setMail(e.target.value)}
              />

              <Input
                type="password"
                image={key}
                altImg="key"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
               <Input
                type="password"
                image={key}
                altImg="key"
                placeholder="Verify password"
                onChange={(e)=>setVerifyPassword(e.target.value)}
              />
            <Button
              buttonClassName="login-button"
              title="Sign Up"
              onClick={()=>{
                console.log("idnp=", idnp);
                console.log("email=", mail);
                console.log("password=", password);
                console.log("verifyPassword=", verifyPassword);
                console.log("code=", code);
              }}
            />
            </div>
          }
  
         </div>
       </div>

     </div>
    </div>
  );
}

export default SignUp;
