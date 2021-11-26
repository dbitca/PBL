import React, { useState, useContext } from 'react';
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthContext from '../store/auth-context';
import Connect from "../components/Connect"
const ForgotPassword = ()  =>{
  const [mail, setMail] = useState("");
   const authCtx = useContext(AuthContext);
  return (
    <Connect 
      actionUrl="/login"
      action="Login"
      actionUrl2="/register"
      action2="Register"
      page="Forgot Password"
    >

      <Input 
        type="text" 
        image={email} 
        altImg="email" 
        placeholder="E-mail" 
        onChange={(e)=>setMail(e.target.value)}
      />
  
      <Button
        buttonClassName="login-button"
        title="Send password to mail"
        onClick={()=>{
        console.log(mail);
        authCtx.updateAuth(true);
      }} />
    </Connect>
  );
}

export default ForgotPassword;
