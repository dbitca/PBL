import React, { useState, useContext } from 'react';
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthContext from '../store/auth-context';
import Connect from "../components/Connect"
const LoginUi = ()  =>{
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);
  return (
    <Connect 
      actionUrl="/forgot-password"
      action="Forgot password ?"
      actionUrl2="/register"
      action2="Register"
      
      page="Log In">
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

      <Button
        buttonClassName="login-button"
        title="Log In"
        onClick={()=>{
        console.log(name);
        console.log(password);
        authCtx.updateAuth(true);
        authCtx.updateUser(name);
      }} />
    </Connect>
  );
}

export default LoginUi;
