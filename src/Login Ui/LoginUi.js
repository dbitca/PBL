import React, { useState } from 'react';

import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import key from "./../image/key.png";

import Input from "../components/Input";
import Button from "../components/Button";


const LoginUi = ()  =>{
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

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
          <h1>Log In</h1>
            <Input 
              type="text" 
              image={email} 
              altImg="email" 
              placeholder="User Name" 
              onChange={(e)=>setName(e.target.value)}
            />
            <Input 
              type="password"
              image={pass}
              altImg="pass"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Input
              type="password"
              image={key}
              altImg="key"
              placeholder="Code"
              onChange={(e)=>setCode(e.target.value)}

            />
            <Button
              buttonClassName="login-button"
              title="Log In"
              onClick={()=>{
                console.log(name);
                console.log(password)
                console.log(code)
              }} />

          <p className="link">
            <a href="#">Forgot password ?</a> Or <a href="#"> Sign Up</a>
          </p> 
         </div>
       </div>

     </div>
    </div>
  );
}

export default LoginUi;
